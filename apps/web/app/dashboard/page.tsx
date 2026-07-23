import { calculateScore, generateOpportunities } from "@/lib/scoring";

export default function Dashboard() {
  const business = {
    hasWebsite: false,
    rating: 3.8,
    reviews: 120,
    hasWhatsapp: true,
  };

  const score = calculateScore(business);
const opportunities = generateOpportunities(business); 
  return (
    <main>
      <h1>Cedrus Lead Engine</h1>

      <section>
        <h2>Burger Atlas</h2>

        <p>Location: Casablanca</p>

        <p>
          Digital Score: {score}/100
        </p>

        <ul>
  {opportunities.map((item) => (
    <li key={item.title}>
      {item.title} ({item.impact})
    </li>
  ))}
</ul>

        <button>
          Generate Audit
        </button>
      </section>
    </main>
  );
}