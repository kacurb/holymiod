import React, { useState } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import { Navbar } from '../components/Navbar';
import { CartDrawer } from '../components/CartDrawer';
import { useCart } from '../components/useCart';

import Home from '../pages/Home';
import Shop from '../pages/Shop';
import Product from '../pages/Product';
import About from '../pages/About';
import How from '../pages/How';
import Certificates from '../pages/Certificates';
import Blog from '../pages/Blog';
import BlogPost from '../pages/BlogPost';
import FAQ from '../pages/FAQ';
import Checkout from '../pages/Checkout';
import Success from '../pages/Success';
import Cancel from '../pages/Cancel';
import Admin from '../pages/Admin';
import Terms from '../pages/Terms';
import Privacy from '../pages/Privacy';
import Cookies from '../pages/Cookies';
import Returns from '../pages/Returns';

export default function App(){
  const { cart, add, remove, setQty, clear, summary } = useCart();
  const [drawer, setDrawer] = useState(false);
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-white text-neutral-900">
      <Navbar itemsCount={summary.items} onCartClick={()=>setDrawer(true)} />
      <Routes>
        <Route path="/" element={<Home addToCart={(p)=>{ add({ id:p.id, name:p.name, price:p.price }); setDrawer(true); }} />} />
        <Route path="/sklep" element={<Shop addToCart={(p)=>{ add({ id:p.id, name:p.name, price:p.price }); setDrawer(true); }} />} />
        <Route path="/produkt/:id" element={<Product addToCart={(p)=>{ add({ id:p.id, name:p.name, price:p.price }); setDrawer(true); }} />} />
        <Route path="/o-nas" element={<About />} />
        <Route path="/jak-powstaje-miod" element={<How />} />
        <Route path="/certyfikaty" element={<Certificates />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:slug" element={<BlogPost />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/checkout" element={<Checkout cart={cart} />} />
        <Route path="/checkout/success" element={<Success />} />
        <Route path="/checkout/cancel" element={<Cancel />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/regulamin" element={<Terms />} />
        <Route path="/polityka-prywatnosci" element={<Privacy />} />
        <Route path="/cookies" element={<Cookies />} />
        <Route path="/zwroty-i-reklamacje" element={<Returns />} />
      </Routes>
      <CartDrawer open={drawer} cart={cart} setQty={setQty} remove={remove} clear={clear} summary={summary} onCheckout={()=>{ setDrawer(false); navigate('/checkout'); }} onClose={()=>setDrawer(false)} />
      <footer className="border-t mt-10">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 py-10 text-sm text-neutral-600 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>© {new Date().getFullYear()} HolyMiod. Wszelkie prawa zastrzeżone.</p>
          <div className="flex items-center gap-4">
            <a href="/regulamin" className="hover:text-neutral-900">Regulamin</a>
            <a href="/polityka-prywatnosci" className="hover:text-neutral-900">Polityka prywatności</a>
            <a href="/cookies" className="hover:text-neutral-900">Cookies</a>
            <a href="/zwroty-i-reklamacje" className="hover:text-neutral-900">Zwroty i reklamacje</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
