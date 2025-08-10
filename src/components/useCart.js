import { useEffect, useMemo, useState } from 'react';
export function useCart(){
  const [cart, setCart] = useState(()=>{ try { return JSON.parse(localStorage.getItem('holymiod_cart')||'[]'); } catch { return []; } });
  useEffect(()=>{ localStorage.setItem('holymiod_cart', JSON.stringify(cart)); }, [cart]);
  const summary = useMemo(()=>({ items: cart.reduce((a,b)=>a+b.qty,0), total: cart.reduce((a,b)=>a+b.price*b.qty,0) }), [cart]);
  const add = (p)=> setCart(prev=>{ const i=prev.findIndex(x=>x.id===p.id); if(i!==-1){ const c=[...prev]; c[i]={...c[i], qty:c[i].qty+1}; return c; } return [...prev, { id:p.id, name:p.name, price:p.price, qty:1 }]; });
  const remove = (id)=> setCart(prev=> prev.filter(p=>p.id!==id));
  const setQty = (id, qty)=> setCart(prev => prev.map(p=> p.id===id?{...p, qty:Math.max(1, qty)}:p));
  const clear = ()=> setCart([]);
  return { cart, add, remove, setQty, clear, summary };
}
