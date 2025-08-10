import React from 'react';
import Seo from '../components/Seo';
import { products } from '../components/products';
import { Link } from 'react-router-dom';
export default function Home({ addToCart }){
 return(<>
  <Seo title="HolyMiod – miód z własnej pasieki w Puszczy Noteckiej | Naturalny miód z Osowa" description="Rzemieślniczy miód z Puszczy Noteckiej. Własna pasieka, 50 uli, naturalne metody. Miody: lipowy, akacjowy, faceliowy, spadziowy, rzepakowy, z mniszka. Sklep online." />
  <section className="border-b">
    <div className="mx-auto max-w-6xl px-4 sm:px-6 py-16 grid md:grid-cols-2 gap-10 items-center">
      <div>
        <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight">Miód z własnej pasieki w Puszczy Noteckiej</h1>
        <p className="mt-4 text-neutral-600 max-w-prose">Własna pasieka w Osowie – 50 uli, ręczne wirowanie, naturalne metody. Wywozimy ule na pożytki w Lubuskim i Zachodniopomorskim.</p>
        <div className="mt-8 flex gap-3">
          <a href="/sklep" className="rounded-full bg-black text-white px-5 py-2.5 text-sm hover:opacity-90">Sklep</a>
          <a href="/o-nas" className="rounded-full border px-5 py-2.5 text-sm hover:bg-neutral-50">O nas</a>
        </div>
      </div>
      <div className="aspect-[4/3] w-full rounded-3xl bg-gradient-to-br from-amber-100 via-amber-200 to-amber-300 overflow-hidden">
        <img src="https://images.unsplash.com/photo-1514996937319-344454492b37?q=80&w=1640&auto=format&fit=crop" alt="Słoik miodu" className="w-full h-full object-cover mix-blend-multiply" loading="lazy"/>
      </div>
    </div>
  </section>
  <section id="sklep" className="mx-auto max-w-6xl px-4 sm:px-6 py-14">
    <h2 className="text-2xl font-semibold tracking-tight">Nasze miody</h2>
    <p className="text-neutral-600 text-sm mt-1">Akacjowy, lipowy, faceliowy, spadziowy, rzepakowy, z mniszka – w zależności od sezonu.</p>
    <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {products.map((p) => {
        const def = p.variants ? p.variants[0] : { label: '450 g', price: p.price, sku: 'default' };
        return (
          <article key={p.id} className="group rounded-2xl border overflow-hidden">
            <Link to={`/produkt/${p.id}`} className="relative block aspect-[4/3] bg-neutral-50">
              <img src={p.image} alt={p.name} className="w-full h-full object-cover" loading="lazy" />
              {p.badge && (
                <span className="absolute left-3 top-3 rounded-full bg-white/90 border px-3 py-1 text-xs">
                  {p.badge}
                </span>
              )}
            </Link>
            <div className="p-4">
              <Link to={`/produkt/${p.id}`} className="font-medium tracking-tight hover:underline">
                {p.name}
              </Link>
              <p className="text-sm text-neutral-600">{def.label}</p>
              <div className="mt-3 flex items-center justify-between">
                <span className="font-semibold">{def.price.toFixed(2)} zł</span>
                <button
                  onClick={() =>
                    addToCart({
                      id: `${p.id}:${def.sku}`,
                      name: `${p.name} – ${def.label}`,
                      price: def.price
                    })
                  }
                  className="rounded-full bg-black text-white px-4 py-2 text-sm hover:opacity-90"
                >
                  Dodaj
                </button>
              </div>
            </div>
          </article>
        );
      })}
    </div>
  </section>
 </>);
}
