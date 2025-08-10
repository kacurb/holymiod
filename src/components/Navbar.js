import React from 'react';import { Link } from 'react-router-dom';
export function Navbar({ itemsCount, onCartClick }){
 return(<header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-white/70 bg-white/90 border-b">
  <div className="mx-auto max-w-6xl px-4 sm:px-6 py-3 flex items-center justify-between">
    <div className="flex items-center gap-3">
      <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-amber-200">🍯</span>
      <Link to="/" className="font-semibold tracking-tight">HolyMiod</Link>
    </div>
    <nav className="hidden sm:flex items-center gap-6 text-sm text-neutral-600">
      <Link to="/sklep" className="hover:text-neutral-900">Sklep</Link>
      <Link to="/o-nas" className="hover:text-neutral-900">O nas</Link>
      <Link to="/jak-powstaje-miod" className="hover:text-neutral-900">Jak powstaje miód</Link>
      <Link to="/blog" className="hover:text-neutral-900">Blog</Link>
      <Link to="/faq" className="hover:text-neutral-900">FAQ</Link>
      <Link to="/admin" className="hover:text-neutral-900">Zamówienia</Link>
    </nav>
    <button onClick={onCartClick} className="relative inline-flex items-center gap-2 rounded-full border px-3 py-1.5 text-sm hover:shadow-sm">
      <span>🛒</span><span className="hidden sm:inline">Koszyk</span>
      {itemsCount>0 && <span className="absolute -top-2 -right-2 h-5 min-w-5 rounded-full bg-black text-white text-xs grid place-items-center px-1">{itemsCount}</span>}
    </button>
  </div></header>);
}
