import React from 'react';
import Seo from '../components/Seo';
import { products } from '../components/products';
import { Link } from 'react-router-dom';
export default function Shop({ addToCart }){
  return(<section className="mx-auto max-w-6xl px-4 sm:px-6 py-16">
    <Seo title="Sklep – miody HolyMiod" description="Miody: lipowy, akacjowy, faceliowy, spadziowy, rzepakowy, z mniszka. Wybierz gramaturę i zamów online."/>
    <h1 className="text-3xl font-semibold tracking-tight">Sklep</h1>
    <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {products.map((p) => {
        const def = p.variants ? p.variants[0] : { label: '450 g', price: p.price, sku: 'default' };
        return (
          <article key={p.id} className="group rounded-2xl border overflow-hidden">
            <Link to={`/produkt/${p.id}`} className="relative block aspect-[4/3] bg-neutral-50">
              <img src={p.image} alt={p.name} className="w-full h-full object-cover" loading="lazy" />
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
  </section>);
}
