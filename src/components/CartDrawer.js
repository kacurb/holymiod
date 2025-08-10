import React from 'react';
export function CartDrawer({ open, cart, setQty, remove, clear, summary, onCheckout, onClose }){
 return(<aside className={`fixed top-0 right-0 h-full w-full sm:w-[420px] bg-white shadow-2xl transition-transform duration-300 z-50 border-l ${open?'translate-x-0':'translate-x-full'}`}>
  <div className="h-full flex flex-col">
    <div className="flex items-center justify-between border-b px-5 py-4">
      <h3 className="font-semibold tracking-tight">Twój koszyk</h3>
      <button onClick={onClose} className="rounded-full border px-3 py-1.5 text-sm">Zamknij</button>
    </div>
    <div className="flex-1 overflow-auto p-5">
      {cart.length===0 ? <p className="text-neutral-600">Koszyk jest pusty. Dodaj produkty, aby kontynuować.</p> :
        <ul className="space-y-4">{cart.map(item=>(
          <li key={item.id} className="flex items-center gap-4">
            <div className="h-16 w-16 rounded-lg bg-neutral-100 grid place-items-center text-lg">🍯</div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center justify-between gap-3">
                <p className="font-medium truncate">{item.name}</p>
                <button onClick={()=>remove(item.id)} className="text-xs text-neutral-500 hover:text-neutral-900">Usuń</button>
              </div>
              <div className="mt-1 flex items-center justify-between gap-3">
                <div className="inline-flex items-center border rounded-full">
                  <button onClick={()=>setQty(item.id, item.qty-1)} className="px-3 py-1.5 text-sm">−</button>
                  <input type="number" min={1} value={item.qty} onChange={e=>setQty(item.id, parseInt(e.target.value||'1',10))} className="w-12 text-center py-1.5 text-sm outline-none" />
                  <button onClick={()=>setQty(item.id, item.qty+1)} className="px-3 py-1.5 text-sm">+</button>
                </div>
                <span className="font-medium">{(item.price*item.qty).toFixed(2)} zł</span>
              </div>
            </div>
          </li>))}</ul>}
    </div>
    <div className="border-t p-5 space-y-3">
      <div className="flex items-center justify-between text-sm"><span>Produkty</span><span>{summary.items}</span></div>
      <div className="flex items-center justify-between text-base"><span className="font-medium">Suma</span><span className="font-semibold">{summary.total.toFixed(2)} zł</span></div>
      <div className="flex gap-3 pt-2">
        <button onClick={clear} className="w-1/3 rounded-full border px-4 py-2 text-sm hover:bg-neutral-50">Wyczyść</button>
        <button onClick={onCheckout} disabled={cart.length===0} className="w-2/3 rounded-full bg-black text-white px-4 py-2 text-sm hover:opacity-90 disabled:opacity-40">Przejdź do płatności</button>
      </div>
    </div>
  </div>
 </aside>);
}
