import type { Business } from "./businesses";

export function calculateScore(business: Business) {
  let score = 0;

  if (business.website) score += 20;
  if (business.googleRating >= 4.5) score += 20;
  if (business.googleReviews >= 100) score += 20;
  if (business.instagram) score += 20;
  if (business.facebook) score += 20;

  return score;
}

export function generateOpportunities(business: Business) {
  const opportunities = [];

  if (!business.website) {
    opportunities.push({
      title: "Create a professional website",
      impact: "+20 points",
    });
  }

  if (business.googleRating < 4.5) {
    opportunities.push({
      title: "Improve Google rating",
      impact: "+20 points",
    });
  }

  if (business.googleReviews < 100) {
    opportunities.push({
      title: "Get more Google reviews",
      impact: "+20 points",
    });
  }

  if (!business.instagram) {
    opportunities.push({
      title: "Create an Instagram presence",
      impact: "+20 points",
    });
  }

  if (!business.facebook) {
    opportunities.push({
      title: "Create a Facebook page",
      impact: "+20 points",
    });
  }

  return opportunities;
}