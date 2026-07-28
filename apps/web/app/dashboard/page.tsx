import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";

import { businesses } from "@/lib/businesses";
import {
  calculateScore,
  generateOpportunities,
} from "@/lib/scoring";

export default function Dashboard() {
  const business = businesses[0];

  const score = calculateScore(business);
  const opportunities = generateOpportunities(business);

  return (
    <main className="min-h-screen bg-gray-100 p-10">
      <div className="mx-auto max-w-4xl">
        <h1 className="mb-8 text-4xl font-bold">
          Cedrus Lead Engine
        </h1>

        <Card>
          <h2 className="text-2xl font-bold">
            {business.name}
          </h2>

          <p className="mt-2 text-gray-600">
            {business.city}
          </p>

          <div className="mt-6">
            <p className="text-5xl font-bold">
              {score}/100
            </p>

            <div className="mt-4 h-3 w-full rounded-full bg-gray-200">
              <div
                className="h-3 rounded-full bg-green-600 transition-all"
                style={{
                  width: `${score}%`,
                }}
              />
            </div>
          </div>

          <div className="mt-8">
            <h3 className="mb-3 text-lg font-semibold">
              Opportunities
            </h3>

            <ul className="space-y-2">
              {opportunities.map((item) => (
                <li
                  key={item.title}
                  className="flex justify-between rounded-lg border p-3"
                >
                  <span>{item.title}</span>

                  <span className="font-semibold">
                    {item.impact}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-8">
            <Button>
              Generate Audit
            </Button>
          </div>
        </Card>

        <Card className="mt-8">
          <h2 className="mb-6 text-2xl font-bold">
            Metrics
          </h2>

          <div className="space-y-4">
            <div className="flex justify-between">
              <span>⭐ Google Rating</span>
              <span>{business.googleRating}</span>
            </div>

            <div className="flex justify-between">
              <span>💬 Google Reviews</span>
              <span>{business.googleReviews}</span>
            </div>

            <div className="flex justify-between">
              <span>🌐 Website</span>
              <span>{business.website ? "Yes" : "No"}</span>
            </div>

            <div className="flex justify-between">
              <span>📸 Instagram</span>
              <span>{business.instagram ? "Yes" : "No"}</span>
            </div>

            <div className="flex justify-between">
              <span>📘 Facebook</span>
              <span>{business.facebook ? "Yes" : "No"}</span>
            </div>
          </div>
        </Card>
      </div>
    </main>
  );
}