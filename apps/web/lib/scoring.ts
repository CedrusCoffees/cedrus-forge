export type Business = {
  hasWebsite: boolean;
  rating: number;
  reviews: number;
  hasWhatsapp: boolean;
};

export function calculateScore(business: Business) {
  let score = 0;

  if (business.hasWebsite) score += 25;
  if (business.rating >= 4) score += 25;
  if (business.reviews >= 100) score += 25;
  if (business.hasWhatsapp) score += 25;

  return score;
}