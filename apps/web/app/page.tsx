import Link from "next/link";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import { businesses } from "@/lib/businesses";
import { calculateScore } from "@/lib/scoring";

export default function Home() {
  const business = businesses[0];
  const score = calculateScore(business);

  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <section className="mx-auto max-w-6xl px-6 py-24">
        <h1 className="text-5xl font-bold">
          Cedrus Lead Engine
        </h1>

        <p className="mt-6 max-w-2xl text-lg text-slate-300">
          Turn Google Maps businesses into paying customers with
          AI-generated audits, digital scoring and automated outreach.
        </p>

        <div className="mt-10 flex gap-4">
          <Link href="/dashboard">
            <Button>
              Open Dashboard
            </Button>
          </Link>

          <Button>
            Generate Demo
          </Button>
        </div>

        <div className="mt-20 grid gap-6 md:grid-cols-3">
          <Card>
            <h2 className="text-xl font-bold">
              Businesses
            </h2>

            <p className="mt-3 text-4xl font-bold">
              {businesses.length}
            </p>
          </Card>

          <Card>
            <h2 className="text-xl font-bold">
              Average Score
            </h2>

            <p className="mt-3 text-4xl font-bold">
              {score}/100
            </p>
          </Card>

          <Card>
            <h2 className="text-xl font-bold">
              AI Audits
            </h2>

            <p className="mt-3 text-4xl font-bold">
              Ready
            </p>
          </Card>
        </div>
      </section>
    </main>
  );
}