import React from 'react';import Seo from '../components/Seo';
const posts=[
  {slug:'rodzaje-miodu',title:'Rodzaje miodu: lipowy, akacjowy, faceliowy, spadziowy, rzepakowy, z mniszka',excerpt:'Czym się różnią i do czego pasują?',date:'2025-08-10'},
  {slug:'jak-przechowywac-miod',title:'Jak przechowywać miód? Krystalizacja to nie wada',excerpt:'Proste zasady przechowywania miodu.',date:'2025-08-10'}
];
export default function Blog(){
  return(<section className="mx-auto max-w-4xl px-4 sm:px-6 py-16">
    <Seo title="Blog HolyMiod – przepisy, poradniki, ciekawostki" description="Przewodniki po rodzajach miodu, przepisy, ciekawostki o pasiece i pszczołach."/>
    <h1 className="text-3xl font-semibold tracking-tight">Blog</h1>
    <ul className="mt-6 space-y-4">{posts.map(p=>(
      <li key={p.slug} className="p-4 border rounded-xl">
        <a href={`/blog/${p.slug}`} className="font-medium hover:underline">{p.title}</a>
        <p className="text-sm text-neutral-600">{p.excerpt}</p>
        <p className="text-xs text-neutral-400 mt-1">{p.date}</p>
      </li>
    ))}</ul>
  </section>);
}
