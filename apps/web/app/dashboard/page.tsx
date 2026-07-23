import { calculateScore } from "@/lib/scoring";

export default function Dashboard() {
  const business = {
    hasWebsite: false,
    rating: 3.8,
    reviews: 120,
    hasWhatsapp: true,
  };

  const score = calculateScore(business);

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
          <li>No website</li>
          <li>Weak Google presence</li>
          <li>No online ordering</li>
        </ul>

        <button>
          Generate Audit
        </button>
      </section>
    </main>
  );
}