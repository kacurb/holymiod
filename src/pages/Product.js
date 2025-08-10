// src/pages/Product.js
import React, { useMemo, useState } from "react";
import Seo from "../components/Seo";
import { useParams } from "react-router-dom";
import { products } from "../components/products";

export default function Product({ addToCart }) {
  const { id } = useParams();
  const p = products.find((x) => x.id === id);
  const [variant, setVariant] = useState(() => (p ? p.variants[0] : null));

  if (!p) {
    return (
      <section className="mx-auto max-w-4xl px-4 sm:px-6 py-16">
        <h1 className="text-2xl font-semibold">Nie znaleziono produktu</h1>
      </section>
    );
  }

  const productLd = useMemo(() => {
    return {
      "@context": "https://schema.org/",
      "@type": "Product",
      name: `${p.name} – ${variant?.label}`,
      image: [p.image],
      description: p.description || `Naturalny ${p.name.toLowerCase()} z własnej pasieki.`,
      brand: { "@type": "Brand", name: "HolyMiod" },
      sku: variant?.sku,
      offers: {
        "@type": "Offer",
        url: typeof window !== "undefined" ? window.location.href : "",
        priceCurrency: "PLN",
        price: variant ? variant.price.toFixed(2) : undefined,
        availability: "https://schema.org/InStock"
      }
    };
  }, [p, variant]);

  const addSelectedToCart = () => {
    if (!variant) return;
    addToCart({
      id: `${p.id}:${variant.sku}`,
      name: `${p.name} – ${variant.label}`,
      price: variant.price
    });
  };

  return (
    <section className="mx-auto max-w-4xl px-4 sm:px-6 py-16">
      <Seo
        title={`${p.name} – ${variant?.label} | HolyMiod`}
        description={p.description || `Naturalny ${p.name.toLowerCase()} z własnej pasieki.`}
      />
      <div className="grid md:grid-cols-2 gap-8">
        <img
          src={p.image}
          alt={p.name}
          className="rounded-2xl border aspect-[4/3] object-cover"
        />
        <div>
          <h1 className="text-3xl font-semibold tracking-tight">{p.name}</h1>
          <p className="text-neutral-600 mt-2">
            {p.description ||
              "Pochodzenie: Pasieka HolyMiod, Osów (Puszcza Notecka). Ręczne wirowanie, naturalne metody."}
          </p>

          {/* Wybór gramatury */}
          <div className="mt-5">
            <p className="text-sm font-medium mb-2">Wybierz gramaturę:</p>
            <div className="flex flex-wrap gap-2">
              {p.variants.map((v) => {
                const active = v.sku === variant?.sku;
                return (
                  <button
                    key={v.sku}
                    onClick={() => setVariant(v)}
                    className={
                      "px-3 py-1.5 rounded-full border text-sm " +
                      (active ? "bg-black text-white" : "hover:bg-neutral-50")
                    }
                    aria-pressed={active}
                  >
                    {v.label}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Cena + dodaj do koszyka */}
          <div className="mt-6 flex items-center gap-4">
            <span className="text-2xl font-semibold">
              {variant?.price.toFixed(2)} zł
            </span>
            <button
              onClick={addSelectedToCart}
              className="rounded-full bg-black text-white px-5 py-2 text-sm hover:opacity-90"
            >
              Dodaj do koszyka
            </button>
          </div>

          <ul className="mt-6 text-sm text-neutral-700 list-disc ml-5 space-y-1">
            <li>Pochodzenie: Osów (Puszcza Notecka)</li>
            <li>Metody: ręczne wirowanie, bez przegrzewania</li>
            <li>Sezonowość: pożytki w Lubuskim i Zachodniopomorskim</li>
          </ul>
        </div>
      </div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productLd) }}
      />
    </section>
  );
// ...existing code...
}
