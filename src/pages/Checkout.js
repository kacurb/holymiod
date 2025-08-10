import React, { useState } from 'react';import Seo from '../components/Seo';
export default function Checkout({ cart }){
  const [customer, setCustomer] = useState({ name:'', email:'', phone:'', address:{ line1:'', city:'', postal_code:'' } });
  const [shipping, setShipping] = useState({ method:'odbior' }); const [loading,setLoading]=useState(false);
  const canSubmit = cart.length>0 && customer.name && customer.email;
  const startCheckout = async ()=>{
    try { setLoading(true);
      const res = await fetch('http://localhost:4242/api/checkout',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({items:cart,customer,shipping})});
      const data = await res.json(); if(data.url) window.location.href=data.url; else alert(data.error||'Błąd checkoutu');
    } catch(e){ alert('Błąd sieci: '+e.message);} finally{ setLoading(false); }
  };
  return(<section className="mx-auto max-w-4xl px-4 sm:px-6 py-10 grid md:grid-cols-2 gap-10">
    <Seo title="Finalizacja zamówienia – HolyMiod" description="Wprowadź dane i wybierz metodę dostawy."/>
    <div>
      <h2 className="text-xl font-semibold tracking-tight">Dane klienta</h2>
      <div className="mt-4 space-y-3">
        <input className="w-full border rounded-lg px-3 py-2" placeholder="Imię i nazwisko" value={customer.name} onChange={e=>setCustomer({...customer,name:e.target.value})}/>
        <input className="w-full border rounded-lg px-3 py-2" placeholder="E-mail" value={customer.email} onChange={e=>setCustomer({...customer,email:e.target.value})}/>
        <input className="w-full border rounded-lg px-3 py-2" placeholder="Telefon" value={customer.phone} onChange={e=>setCustomer({...customer,phone:e.target.value})}/>
        <input className="w-full border rounded-lg px-3 py-2" placeholder="Ulica i nr" value={customer.address.line1} onChange={e=>setCustomer({...customer,address:{...customer.address,line1:e.target.value}})}/>
        <div className="grid grid-cols-2 gap-3">
          <input className="w-full border rounded-lg px-3 py-2" placeholder="Miasto" value={customer.address.city} onChange={e=>setCustomer({...customer,address:{...customer.address,city:e.target.value}})}/>
          <input className="w-full border rounded-lg px-3 py-2" placeholder="Kod pocztowy" value={customer.address.postal_code} onChange={e=>setCustomer({...customer,address:{...customer.address,postal_code:e.target.value}})}/>
        </div>
      </div>
      <h2 className="text-xl font-semibold tracking-tight mt-8">Dostawa</h2>
      <div className="mt-3 space-y-2">
        <label className="flex items-center gap-2 text-sm"><input type="radio" name="ship" checked={shipping.method==='odbior'} onChange={()=>setShipping({method:'odbior'})}/> Odbiór osobisty (0 zł)</label>
        <label className="flex items-center gap-2 text-sm"><input type="radio" name="ship" checked={shipping.method==='paczkomat'} onChange={()=>setShipping({method:'paczkomat'})}/> Paczkomat (12,99 zł)</label>
        <label className="flex items-center gap-2 text-sm"><input type="radio" name="ship" checked={shipping.method==='kurier'} onChange={()=>setShipping({method:'kurier'})}/> Kurier (15,99 zł)</label>
      </div>
      <div className="mt-6"><button onClick={startCheckout} disabled={!canSubmit||loading} className="rounded-full bg-black text-white px-5 py-2 text-sm disabled:opacity-40">{loading?'Ładowanie...':'Przejdź do płatności'}</button></div>
    </div>
    <div>
      <h2 className="text-xl font-semibold tracking-tight">Podsumowanie</h2>
      <ul className="mt-4 space-y-3">{cart.map(i=>(<li key={i.id} className="flex justify-between text-sm border-b pb-2"><span>{i.name} × {i.qty}</span><span>{(i.price*i.qty).toFixed(2)} zł</span></li>))}</ul>
      <p className="mt-4 text-xs text-neutral-500">Kwota finalna liczona po stronie bramki płatności.</p>
    </div>
  </section>);
}
