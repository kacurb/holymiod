import React from 'react';import Seo from '../components/Seo';
export default function How(){
  return(<section className="mx-auto max-w-6xl px-4 sm:px-6 py-16">
    <Seo title="Jak powstaje miód – HolyMiod" description="Od ula do słoika: przygotowanie uli, wywozy na pożytki, ręczne wirowanie i rozlew, kontrola partii."/>
    <h1 className="text-3xl font-semibold tracking-tight">Jak powstaje miód</h1>
    <ol className="mt-6 space-y-3 list-decimal ml-6 text-neutral-700">
      <li>Przygotowanie i przeglądy uli (własna konstrukcja, dbanie o kondycję rodzin).</li>
      <li>Wywóz na pożytki: akacja, lipa, facelia, spadź, rzepak, mniszek – w Lubuskim i Zachodniopomorskim.</li>
      <li>Ręczne wirowanie i rozlew – bez przegrzewania, by zachować naturalne wartości.</li>
      <li>Odpoczynek miodu, etykietowanie, kontrola partii.</li>
    </ol>
  </section>);
}
