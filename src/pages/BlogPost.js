import React from 'react';import Seo from '../components/Seo';import { useParams } from 'react-router-dom';
export default function BlogPost(){
  const { slug } = useParams();
  return(<section className="mx-auto max-w-3xl px-4 sm:px-6 py-16">
    <Seo title={`Blog – ${slug}`} description="Artykuł na blogu HolyMiod"/>
    <h1 className="text-3xl font-semibold tracking-tight capitalize">{slug.replaceAll('-',' ')}</h1>
    <article className="prose prose-neutral mt-6 max-w-none">
      <p>Treść artykułu w przygotowaniu. (Mogę wypełnić gotową treścią SEO.)</p>
    </article>
  </section>);
}
