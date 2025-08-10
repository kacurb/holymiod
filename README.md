# HolyMiod – Full SEO Pack (React + Tailwind + Express/Stripe)

## Start
1) `npm install`
2) `cd server && npm install && cd ..`
3) Skopiuj `.env.example` do `.env` i uzupełnij klucze (Stripe + ADMIN_TOKEN)
4) Uruchom:
   - backend: `npm run server`
   - frontend: `npm start`
5) (Opcjonalnie) Stripe CLI webhook:
   `stripe listen --forward-to http://localhost:4242/api/webhook`

## Co dodano
- Meta/OG w `public/index.html`, JSON-LD (Organization)
- `robots.txt` i `sitemap.xml` (starter)
- Komponent `<Seo />` do per-route title/description
- Strony: Sklep, Produkt, O nas, Jak powstaje miód, Certyfikaty, Blog(+post), FAQ, Polityki (Regulamin/RODO/Cookies/Zwroty)
- Panel Admina, Checkout, Success/Cancel
