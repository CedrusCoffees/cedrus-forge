export interface Business {
  id: number;
  name: string;
  city: string;
  website: boolean;
  googleReviews: number;
  googleRating: number;
  instagram: boolean;
  facebook: boolean;
}

export const businesses: Business[] = [
  {
    id: 1,
    name: "Burger Atlas",
    city: "Casablanca",
    website: false,
    googleReviews: 54,
    googleRating: 4.2,
    instagram: true,
    facebook: false,
  },
  {
    id: 2,
    name: "Coffee Medina",
    city: "Rabat",
    website: true,
    googleReviews: 203,
    googleRating: 4.8,
    instagram: true,
    facebook: true,
  },
  {
    id: 3,
    name: "Pizza Corner",
    city: "Marrakech",
    website: false,
    googleReviews: 18,
    googleRating: 3.9,
    instagram: false,
    facebook: false,
  },
];