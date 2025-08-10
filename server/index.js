require('dotenv').config({ path: require('path').join(__dirname, '..', '.env') });
const fs = require('fs');
const path = require('path');
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const Stripe = require('stripe');

const app = express();
app.use(cors({ origin: true }));
app.use(express.json());

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || '', { apiVersion: '2024-06-20' });

// simple orders store
const ORDERS_PATH = path.join(__dirname, 'data', 'orders.json');
function readOrders(){ try { return JSON.parse(fs.readFileSync(ORDERS_PATH,'utf8')||'[]'); } catch { return []; } }
function writeOrders(o){ fs.writeFileSync(ORDERS_PATH, JSON.stringify(o, null, 2), 'utf8'); }
if (!fs.existsSync(ORDERS_PATH)) fs.writeFileSync(ORDERS_PATH, '[]');

const PRODUCTS = [
  { id:'honey-wielokwiat', name:'Miód wielokwiatowy', price:2990 },
  { id:'honey-lipowy', name:'Miód lipowy', price:3490 },
  { id:'honey-spadziowy', name:'Miód spadziowy', price:3990 },
  { id:'honey-gryczany', name:'Miód gryczany', price:3690 }
];

function normalizeCart(items){
  if(!Array.isArray(items) || !items.length) throw new Error('Koszyk pusty');
  const map = new Map(PRODUCTS.map(p=>[p.id,p]));
  return items.map(it=>{
    const p = map.get(it.id);
    if(!p) throw new Error('Nieznany produkt: '+it.id);
    const qty = Math.max(1, parseInt(it.qty||1,10));
    return { id:p.id, name:p.name, price:p.price, qty };
  });
}

app.post('/api/checkout', async (req, res)=>{
  try {
    const { items, customer, shipping } = req.body;
    const cart = normalizeCart(items);
    const line_items = cart.map(p=>({
      price_data:{ currency:'pln', product_data:{ name:p.name }, unit_amount:p.price },
      quantity:p.qty
    }));
    let shippingAmount = 0;
    if (shipping?.method==='kurier') shippingAmount = 1599;
    if (shipping?.method==='paczkomat') shippingAmount = 1299;
    if (shippingAmount>0) line_items.push({ price_data:{ currency:'pln', product_data:{ name:'Wysyłka' }, unit_amount:shippingAmount }, quantity:1 });

    const session = await stripe.checkout.sessions.create({
      mode:'payment',
      payment_method_types:['card','p24'],
      line_items,
      success_url:(process.env.PUBLIC_URL||'http://localhost:3000')+'/checkout/success',
      cancel_url:(process.env.PUBLIC_URL||'http://localhost:3000')+'/checkout/cancel',
      metadata:{
        customer_email: customer?.email||'',
        shipping_method: shipping?.method||'odbior',
        cart: JSON.stringify(cart),
        address: JSON.stringify(customer?.address||{}),
        name: customer?.name||'',
        phone: customer?.phone||''
      },
      shipping_address_collection:{ allowed_countries:['PL'] }
    });

    res.json({ id: session.id, url: session.url });
  } catch(e){
    console.error(e);
    res.status(400).json({ error: e.message });
  }
});

app.post('/api/webhook', bodyParser.raw({ type: 'application/json' }), (req, res)=>{
  let event;
  try {
    event = require('stripe').webhooks.constructEvent(req.body, req.headers['stripe-signature'], process.env.STRIPE_WEBHOOK_SECRET);
  } catch (err) {
    console.error('Webhook verify fail:', err.message);
    return res.sendStatus(400);
  }
  if (event.type === 'checkout.session.completed') {
    const s = event.data.object;
    const order = {
      id: s.id,
      created: Date.now(),
      amount_total: s.amount_total,
      currency: s.currency,
      status: 'paid',
      customer_email: s.metadata?.customer_email || s.customer_details?.email || '',
      metadata: s.metadata || {}
    };
    const orders = readOrders();
    orders.unshift(order);
    writeOrders(orders);
    console.log('Order saved:', order.id);
  }
  res.sendStatus(200);
});

function auth(req,res,next){ const t=req.headers['x-admin-token']; if(t!== (process.env.ADMIN_TOKEN||'change_me')) return res.status(401).json({error:'Unauthorized'}); next(); }
app.get('/api/orders', auth, (req,res)=> res.json(readOrders()));
app.post('/api/orders/:id/status', auth, (req,res)=>{
  const orders=readOrders(); const i=orders.findIndex(o=>o.id===req.params.id);
  if(i<0) return res.status(404).json({error:'Not found'});
  orders[i].status=String((req.body&&req.body.status)||'processed'); writeOrders(orders);
  res.json(orders[i]);
});

const PORT = process.env.PORT || 4242;
app.listen(PORT, ()=>console.log('API listening on :'+PORT));
