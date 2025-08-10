// src/components/products.js
export const products = [
  {
    id: "honey-lipowy",
    name: "Miód lipowy",
    image:
      "https://images.unsplash.com/photo-1517260283771-0ffcfd56f1d7?q=80&w=1640&auto=format&fit=crop",
    badge: "Nowość",
    description:
      "Aromat kwiatów lipy, lekka goryczka. Pozyskiwany z pożytków w woj. lubuskim i zachodniopomorskim. Ręcznie wirujemy, bez przegrzewania.",
    variants: [
      { sku: "lipowy-450", label: "450 g", price: 34.9 },
      { sku: "lipowy-900", label: "900 g", price: 64.9 }
    ]
  },
  {
    id: "honey-wielokwiat",
    name: "Miód wielokwiatowy",
    image:
      "https://images.unsplash.com/photo-1496116218417-1a781b1c416c?q=80&w=1640&auto=format&fit=crop",
    badge: "Bestseller",
    description:
      "Łagodny, kwiatowy profil smakowy. Uniwersalny do codziennego użycia.",
    variants: [
      { sku: "wielokwiat-450", label: "450 g", price: 29.9 },
      { sku: "wielokwiat-900", label: "900 g", price: 55.9 }
    ]
  },
  {
    id: "honey-spadziowy",
    name: "Miód spadziowy",
    image:
      "https://images.unsplash.com/photo-1505577058444-a3dab90d4253?q=80&w=1640&auto=format&fit=crop",
    description:
      "Ciemniejszy, żywiczny, z nutami iglastymi. Sezonowo dostępny.",
    variants: [
      { sku: "spadz-450", label: "450 g", price: 39.9 },
      { sku: "spadz-900", label: "900 g", price: 74.9 }
    ]
  },
  {
    id: "honey-gryczany",
    name: "Miód gryczany",
    image:
      "https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=1640&auto=format&fit=crop",
    description:
      "Wyrazisty, zbożowo-kwiatowy. Świetny do wypieków i sosów.",
    variants: [
      { sku: "gryka-450", label: "450 g", price: 36.9 },
      { sku: "gryka-900", label: "900 g", price: 68.9 }
    ]
  }
];
