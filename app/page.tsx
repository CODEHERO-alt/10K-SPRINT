import Header from "./components/Header";
import Footer from "./components/Footer";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Header />

      <main className="max-w-6xl mx-auto px-6">

        {/* Hero */}
        <section className="py-32 text-center">
          <h1 className="text-4xl md:text-6xl font-semibold leading-tight mb-6">
            Your Meta Is Optimizing on Corrupted Revenue Signals.
          </h1>

          <p className="text-slate-400 max-w-2xl mx-auto mb-8">
            We audit and repair Shopify–Meta revenue signals so your ad account optimizes for real buyers again.
          </p>

          <div className="flex justify-center gap-4">
            <Link href="/book" className="btn-primary">
              Book Diagnostic
            </Link>
            <Link href="/audit-framework" className="btn-secondary">
              View Audit Framework
            </Link>
          </div>
        </section>

        {/* Problem */}
        <section id="problem" className="py-24">
          <h2 className="text-3xl font-semibold mb-10">
            The Hidden Infrastructure Leak
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              "Purchase mismatch between Shopify & Meta",
              "Duplicate Purchase event firing",
              "Broken CAPI deduplication logic",
            ].map((item) => (
              <div
                key={item}
                className="border border-white/10 rounded-xl p-6 bg-white/5"
              >
                {item}
              </div>
            ))}
          </div>
        </section>

        {/* Process */}
        <section id="process" className="py-24">
          <h2 className="text-3xl font-semibold mb-10">
            72-Hour Repair Process
          </h2>

          <div className="grid md:grid-cols-3 gap-8 text-slate-300">
            <div>
              <h3 className="font-medium mb-2">Day 1 — Audit</h3>
              <p>Full reconciliation review across Shopify and Meta.</p>
            </div>

            <div>
              <h3 className="font-medium mb-2">Day 2 — Repair</h3>
              <p>Tracking rebuild and signal alignment implementation.</p>
            </div>

            <div>
              <h3 className="font-medium mb-2">Day 3 — Validation</h3>
              <p>Live testing and final signal confirmation.</p>
            </div>
          </div>
        </section>

        {/* Pricing */}
        <section id="pricing" className="py-24 text-center">
          <h2 className="text-3xl font-semibold mb-6">
            Revenue Infrastructure Repair
          </h2>

          <p className="text-4xl font-bold mb-6">$2,500 Fixed</p>

          <p className="text-slate-400 max-w-xl mx-auto mb-8">
            Full audit, repair, validation testing, and 14-day monitoring support.
          </p>

          <Link href="/book" className="btn-primary">
            Book 15-Min Diagnostic
          </Link>
        </section>

      </main>

      <Footer />
    </>
  );
}
