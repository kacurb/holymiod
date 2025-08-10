import React, { useEffect, useState } from 'react';import Seo from '../components/Seo';
export default function Admin(){
  const [token,setToken]=useState('change_me');const [orders,setOrders]=useState([]);const [loading,setLoading]=useState(false);
  const load=async()=>{ try{ setLoading(true); const r=await fetch('http://localhost:4242/api/orders',{headers:{'x-admin-token':token}}); if(!r.ok) throw new Error('HTTP '+r.status); setOrders(await r.json()); }catch(e){ alert('Błąd: '+e.message); }finally{ setLoading(false);} };
  useEffect(()=>{ load(); },[]);
  const setStatus=async(id,status)=>{ const r=await fetch('http://localhost:4242/api/orders/'+id+'/status',{method:'POST',headers:{'Content-Type':'application/json','x-admin-token':token},body:JSON.stringify({status})}); if(r.ok) load(); else alert('Nie udało się zaktualizować'); };
  return(<section className="mx-auto max-w-5xl px-4 sm:px-6 py-10"><Seo title="Panel zamówień – HolyMiod"/><h1 className="text-2xl font-semibold">Zamówienia</h1>
    <div className="flex items-center gap-3 mt-4"><input className="border rounded px-3 py-2 text-sm" value={token} onChange={e=>setToken(e.target.value)} placeholder="Admin token"/><button onClick={load} className="rounded border px-4 py-2 text-sm">Odśwież</button></div>
    {loading?<p className="mt-6">Ładowanie…</p>:(<table className="mt-6 w-full text-sm border"><thead className="bg-neutral-50"><tr><th className="p-2 border">ID</th><th className="p-2 border">Email</th><th className="p-2 border">Kwota</th><th className="p-2 border">Status</th><th className="p-2 border">Akcje</th></tr></thead><tbody>
      {orders.map(o=>(<tr key={o.id}><td className="p-2 border">{o.id}</td><td className="p-2 border">{o.customer_email||'-'}</td><td className="p-2 border">{(o.amount_total/100).toFixed(2)} {o.currency?.toUpperCase()}</td><td className="p-2 border">{o.status}</td><td className="p-2 border space-x-2"><button onClick={()=>setStatus(o.id,'processed')} className="rounded border px-3 py-1">Oznacz zrealizowane</button></td></tr>))}
    </tbody></table>)}
  </section>);
}
