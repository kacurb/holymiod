import React from 'react';import Seo from '../components/Seo';
export default function FAQ(){
  return(<section className="mx-auto max-w-4xl px-4 sm:px-6 py-16">
    <Seo title="FAQ – HolyMiod" description="Najczęstsze pytania o nasze miody, płatności i dostawy."/>
    <h1 className="text-3xl font-semibold tracking-tight">FAQ</h1>
    <div className="mt-6 divide-y">
      <details className="py-4"><summary className="font-medium">Skąd pochodzi Wasz miód?</summary><p className="mt-2 text-neutral-700">Z własnej pasieki w dolinie Puszczy Noteckiej (Osów). Pożytki w Lubuskim i Zachodniopomorskim.</p></details>
      <details className="py-4"><summary className="font-medium">Jakie rodzaje miodu macie?</summary><p className="mt-2 text-neutral-700">Akacjowy, lipowy, faceliowy, spadziowy, rzepakowy, z mniszka – sezonowo.</p></details>
      <details className="py-4"><summary className="font-medium">Metody płatności?</summary><p className="mt-2 text-neutral-700">BLIK/Przelewy24, karty (Stripe), przelew tradycyjny, pobranie.</p></details>
      <details className="py-4"><summary className="font-medium">Dostawa?</summary><p className="mt-2 text-neutral-700">InPost Paczkomaty/Kurier, DPD, DHL, Poczta, odbiór osobisty. Darmowa od 199 zł.</p></details>
    </div>
  </section>);
}
