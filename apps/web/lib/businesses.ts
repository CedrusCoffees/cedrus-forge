export type Business = {
  id: string;
  name: string;
  city: string;
  hasWebsite: boolean;
  rating: number;
  reviews: number;
  hasWhatsapp: boolean;
};

export const businesses: Business[] = [
  {
    id: "burger-atlas",
    name: "Burger Atlas",
    city: "Casablanca",
    hasWebsite: false,
    rating: 3.8,
    reviews: 120,
    hasWhatsapp: true,
  },
];