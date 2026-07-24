import { calculateScore, generateOpportunities } from "@/lib/scoring";
import { businesses } from "@/lib/businesses";

export default function Dashboard() {
  const business = businesses[0];

  const score = calculateScore(business);
  const opportunities = generateOpportunities(business);

  return (
    <main>
      <h1>Cedrus Lead Engine</h1>

      <section>
        <h2>{business.name}</h2>

        <p>Location: {business.city}</p>

        <p>Digital Score: {score}/100</p>

        <ul>
          {opportunities.map((item) => (
            <li key={item.title}>
              {item.title} ({item.impact})
            </li>
          ))}
        </ul>

        <button>Generate Audit</button>
      </section>
    </main>
  );
}