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
export function generateOpportunities(business: Business) {
  const opportunities = [];

  if (!business.hasWebsite) {
    opportunities.push({
      title: "Create a website",
      impact: "+25 points",
    });
  }

  if (business.rating < 4) {
    opportunities.push({
      title: "Improve Google rating",
      impact: "+25 points",
    });
  }

  if (business.reviews < 100) {
    opportunities.push({
      title: "Get more reviews",
      impact: "+25 points",
    });
  }

  if (!business.hasWhatsapp) {
    opportunities.push({
      title: "Add WhatsApp ordering",
      impact: "+25 points",
    });
  }

  return opportunities;
}