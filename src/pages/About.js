import React from 'react';import Seo from '../components/Seo';
export default function About(){
  return(<section className="mx-auto max-w-6xl px-4 sm:px-6 py-16">
    <Seo title="O nas – pasieka HolyMiod z Puszczy Noteckiej" description="Rodzinna pasieka w Osowie. 50 uli, własnoręcznie tworzone ule, ręczne wirowanie, naturalne metody leczenia pszczół."/>
    <div className="rounded-3xl border p-6 md:p-10 flex flex-col md:flex-row gap-8 items-center">
      <div className="md:w-1/2">
        <h2 className="text-2xl font-semibold tracking-tight">Kim jesteśmy</h2>
        <p className="mt-3 text-neutral-700 leading-relaxed">
          Własna pasieka w dolinie Puszczy Noteckiej (Osów). 50 uli, rzemiosło od A do Z – od budowy uli, przez ręczne wirowanie, po naturalną troskę o zdrowie pszczół (m.in. kwas mrówkowy).
          Wywozimy ule na pożytki w Lubuskim i Zachodniopomorskim, by pozyskiwać m.in. miody: akacjowy, lipowy, faceliowy, spadziowy, rzepakowy, z mniszka.
        </p>
      </div>
      <div className="md:w-1/2 aspect-[4/3] w-full rounded-2xl overflow-hidden bg-neutral-100">
        <img src="https://images.unsplash.com/photo-1503756234508-e32369269deb?q=80&w=1640&auto=format&fit=crop" alt="Pasieka" className="w-full h-full object-cover" loading="lazy"/>
      </div>
    </div>
  </section>);
}
