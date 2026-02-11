"use client";

import { motion } from "framer-motion";

const container = {
  hidden: { opacity: 0, y: 10 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" } }
};

function Shell({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-page">
      <div className="mx-auto w-full max-w-6xl px-6">{children}</div>
    </div>
  );
}

function SectionTitle({
  eyebrow,
  title,
  body
}: {
  eyebrow?: string;
  title: string;
  body?: string;
}) {
  return (
    <div>
      {eyebrow ? (
        <p className="text-sm text-textSecondary">{eyebrow}</p>
      ) : null}
      <h2 className="mt-3 font-[600] tracking-[-0.02em] text-3xl sm:text-4xl"
          style={{ fontFamily: "var(--font-space)" }}>
        {title}
      </h2>
      {body ? (
        <p className="mt-4 text-base leading-7 text-textSecondary max-w-xl">
          {body}
        </p>
      ) : null}
    </div>
  );
}

function ButtonPrimary({ children }: { children: React.ReactNode }) {
  return (
    <button
      className="inline-flex items-center justify-center rounded-xl px-5 py-3 text-sm font-[600] text-white shadow-glow
                 bg-cta hover:opacity-95 active:opacity-90 transition"
      aria-label="Book Diagnostic"
    >
      {children}
    </button>
  );
}

function ButtonGhost({ children }: { children: React.ReactNode }) {
  return (
    <button
      className="inline-flex items-center justify-center rounded-xl px-5 py-3 text-sm font-[600]
                 text-textPrimary border border-white/10 bg-white/5 hover:bg-white/7 transition"
      aria-label="View Audit Framework"
    >
      {children}
    </button>
  );
}

function GlassCard({
  children,
  className = ""
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={
        "rounded-xl2 border border-white/10 bg-white/[0.04] backdrop-blur-md " +
        "shadow-glowSoft " +
        className
      }
    >
      {children}
    </div>
  );
}

function RevenueSignalDashboardMock() {
  return (
    <GlassCard className="p-5 sm:p-6">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-xs text-textSecondary">Revenue Signal Dashboard</p>
          <p className="mt-1 text-sm text-textPrimary font-[600]">
            Shopify vs Meta reconciliation
          </p>
        </div>
        <div className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-textSecondary">
          Live
        </div>
      </div>

      <div className="mt-5 grid grid-cols-2 gap-3">
        <div className="rounded-xl border border-white/10 bg-white/5 p-4">
          <p className="text-xs text-textSecondary">Shopify revenue</p>
          <p className="mt-2 text-lg font-[650]">148,320</p>
          <p className="mt-1 text-xs text-textMuted">Last 7 days</p>
        </div>
        <div className="rounded-xl border border-white/10 bg-white/5 p-4">
          <p className="text-xs text-textSecondary">Meta attributed</p>
          <p className="mt-2 text-lg font-[650]">101,740</p>
          <p className="mt-1 text-xs text-textMuted">Last 7 days</p>
        </div>
      </div>

      <div className="mt-5 rounded-xl border border-white/10 bg-white/5 p-4">
        <div className="flex items-center justify-between">
          <p className="text-xs text-textSecondary">Mismatch</p>
          <p className="text-xs text-textSecondary">31.4%</p>
        </div>

        <div className="mt-3 h-2 w-full rounded-full bg-white/10 overflow-hidden">
          <div className="h-full w-[72%] bg-cta opacity-70" />
        </div>

        <div className="mt-4 grid grid-cols-2 gap-3">
          <div className="rounded-xl border border-white/10 bg-white/5 p-3">
            <p className="text-xs text-textSecondary">State</p>
            <div className="mt-2 flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-red-400" />
              <p className="text-sm text-textPrimary">Corrupted</p>
            </div>
          </div>
          <div className="rounded-xl border border-white/10 bg-white/5 p-3">
            <p className="text-xs text-textSecondary">Target</p>
            <div className="mt-2 flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-emerald-400" />
              <p className="text-sm text-textPrimary">Aligned</p>
            </div>
          </div>
        </div>

        <div className="mt-5">
          <svg viewBox="0 0 640 160" className="w-full h-auto">
            <defs>
              <linearGradient id="g" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0" stopColor="rgba(59,130,246,1)" />
                <stop offset="0.5" stopColor="rgba(99,102,241,1)" />
                <stop offset="1" stopColor="rgba(168,85,247,1)" />
              </linearGradient>
            </defs>

            <path
              d="M10 120 C 70 40, 140 140, 210 80 C 280 20, 340 120, 410 70 C 480 20, 540 110, 630 55"
              fill="none"
              stroke="url(#g)"
              strokeWidth="4"
              opacity="0.8"
            />
            <path
              d="M10 135 C 80 110, 150 120, 220 108 C 290 96, 360 120, 430 112 C 500 104, 560 118, 630 110"
              fill="none"
              stroke="rgba(248,250,252,0.25)"
              strokeWidth="3"
            />

            <circle cx="210" cy="80" r="6" fill="rgba(248,250,252,0.9)" />
            <circle cx="210" cy="80" r="12" fill="rgba(59,130,246,0.25)" />
            <text x="230" y="84" fill="rgba(248,250,252,0.75)" fontSize="12">
              divergence point
            </text>
          </svg>
        </div>
      </div>
    </GlassCard>
  );
}

function HoverCard({
  title,
  body
}: {
  title: string;
  body: string;
}) {
  return (
    <motion.div
      whileHover={{ y: -2 }}
      transition={{ duration: 0.18 }}
      className="rounded-xl2 border border-white/10 bg-white/[0.04] backdrop-blur-md p-5 shadow-glowSoft"
    >
      <div className="h-8 w-8 rounded-xl bg-white/5 border border-white/10 grid place-items-center">
        <span className="h-2 w-2 rounded-full bg-emerald-400/80" />
      </div>
      <p className="mt-4 text-sm font-[650] text-textPrimary">{title}</p>
      <p className="mt-2 text-sm leading-6 text-textSecondary">{body}</p>
    </motion.div>
  );
}

function StepBlock({
  step,
  title,
  body
}: {
  step: string;
  title: string;
  body: string;
}) {
  return (
    <motion.div
      whileHover={{ y: -2 }}
      transition={{ duration: 0.18 }}
      className="rounded-xl2 border border-white/10 bg-white/[0.04] p-5 shadow-glowSoft"
    >
      <div className="flex items-center gap-3">
        <div className="h-9 w-9 rounded-xl border border-white/10 bg-white/5 grid place-items-center text-xs text-textSecondary">
          {step}
        </div>
        <p className="text-sm font-[650] text-textPrimary">{title}</p>
      </div>
      <p className="mt-3 text-sm leading-6 text-textSecondary">{body}</p>
    </motion.div>
  );
}

function SignalArchitectureDiagram() {
  return (
    <GlassCard className="p-6">
      <p className="text-xs text-textSecondary">Signal Architecture Breakdown</p>
      <p className="mt-2 text-sm font-[650] text-textPrimary">
        Shopify to Meta optimization signal flow
      </p>

      <div className="mt-6 grid gap-4">
        <div className="rounded-xl border border-white/10 bg-white/5 p-4">
          <p className="text-xs text-textSecondary">Broken flow</p>
          <div className="mt-3 flex flex-wrap items-center gap-3">
            <Node label="Shopify" state="base" />
            <Arrow state="bad" />
            <Node label="Server side CAPI" state="bad" />
            <Arrow state="bad" />
            <Node label="Meta Events Manager" state="bad" />
            <Arrow state="bad" />
            <Node label="Optimization Engine" state="bad" />
          </div>
          <p className="mt-3 text-sm text-textSecondary">
            Duplicate events, mismatched value, unstable learning.
          </p>
        </div>

        <div className="rounded-xl border border-white/10 bg-white/5 p-4">
          <p className="text-xs text-textSecondary">Clean flow</p>
          <div className="mt-3 flex flex-wrap items-center gap-3">
            <Node label="Shopify" state="base" />
            <Arrow state="good" />
            <Node label="Server side CAPI" state="good" />
            <Arrow state="good" />
            <Node label="Meta Events Manager" state="good" />
            <Arrow state="good" />
            <Node label="Optimization Engine" state="good" />
          </div>
          <p className="mt-3 text-sm text-textSecondary">
            Deduplicated events, reconciled revenue, consistent optimization signals.
          </p>
        </div>
      </div>
    </GlassCard>
  );
}

function Node({
  label,
  state
}: {
  label: string;
  state: "base" | "bad" | "good";
}) {
  const ring =
    state === "bad"
      ? "border-red-400/30"
      : state === "good"
      ? "border-emerald-400/30"
      : "border-white/10";

  const dot =
    state === "bad"
      ? "bg-red-400"
      : state === "good"
      ? "bg-emerald-400"
      : "bg-white/30";

  return (
    <div className={`rounded-xl border ${ring} bg-white/[0.04] px-4 py-3`}>
      <div className="flex items-center gap-2">
        <span className={`h-2 w-2 rounded-full ${dot}`} />
        <span className="text-sm text-textPrimary">{label}</span>
      </div>
    </div>
  );
}

function Arrow({ state }: { state: "bad" | "good" }) {
  const c = state === "bad" ? "text-red-300/80" : "text-emerald-300/80";
  return (
    <div className={`text-sm ${c}`} aria-hidden="true">
      →
    </div>
  );
}

export default function Page() {
  return (
    <Shell>
      <main className="pb-24">
        {/* 1 Hero Section */}
        <section className="min-h-[92vh] flex items-center pt-14">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center w-full">
            <motion.div variants={container} initial="hidden" animate="show">
              <h1
                className="text-4xl sm:text-5xl lg:text-6xl font-[650] tracking-[-0.03em]"
                style={{ fontFamily: "var(--font-space)" }}
              >
                Your Meta Is Optimizing on Corrupted Revenue Signals.
              </h1>

              <p className="mt-5 text-base leading-7 text-textSecondary max-w-xl">
                If Shopify and Meta disagree on revenue, the algorithm learns from noise.
                We audit and repair signal infrastructure so optimization is based on clean inputs.
              </p>

              <div className="mt-8 flex flex-col sm:flex-row gap-3">
                <ButtonPrimary>Book Diagnostic</ButtonPrimary>
                <ButtonGhost>View Audit Framework</ButtonGhost>
              </div>

              <div className="mt-10 flex items-center gap-4 text-sm text-textSecondary">
                <div className="h-px w-10 bg-white/10" />
                <p>Infrastructure level fixes for Shopify brands running Meta.</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, ease: "easeOut", delay: 0.05 }}
            >
              <RevenueSignalDashboardMock />
            </motion.div>
          </div>
        </section>

        {/* 2 Social Proof Bar */}
        <section className="py-10">
          <div className="rounded-xl2 border border-white/10 bg-white/[0.03] backdrop-blur-md px-6 py-5">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs sm:text-sm text-textMuted">
              <div className="text-center">Shopify DTC Brands</div>
              <div className="text-center">Meta Advertisers</div>
              <div className="text-center">Founder Led Ecommerce</div>
              <div className="text-center">Scaling to 7 Figures</div>
            </div>
          </div>
        </section>

        {/* 3 Problem Section split layout */}
        <section className="py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
            <SectionTitle
              title="The Hidden Infrastructure Leak in Most Shopify Brands"
              body="Most performance issues are not creative or targeting. They start in the event pipeline. When revenue and events are inconsistent, optimization drifts and spend becomes less efficient."
            />

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <HoverCard
                title="Purchase Mismatch"
                body="Shopify revenue differs from Meta attributed value. Learning is anchored to the wrong number."
              />
              <HoverCard
                title="Duplicate Event Firing"
                body="Client side and server side events overlap without control. Volume inflates and quality drops."
              />
              <HoverCard
                title="Broken CAPI Deduplication"
                body="Event IDs and parameters are inconsistent. Meta cannot reliably deduplicate purchase signals."
              />
            </div>
          </div>
        </section>

        {/* 4 How It Works steps */}
        <section className="py-16">
          <SectionTitle
            eyebrow="Process"
            title="How It Works"
            body="A short cycle focused on accuracy, repair, and confirmation."
          />

          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-4">
            <StepBlock
              step="1"
              title="Audit"
              body="We map the full event path and reconcile Shopify revenue against Meta signals."
            />
            <StepBlock
              step="2"
              title="Repair"
              body="We correct event parameters, deduplication, and server side delivery to stabilize inputs."
            />
            <StepBlock
              step="3"
              title="Validation"
              body="We verify in Events Manager and confirm clean learning signals under real traffic."
            />
          </div>
        </section>

        {/* 5 Technical Depth section replaces any chat visuals */}
        <section className="py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
            <SectionTitle
              title="Signal Architecture Breakdown"
              body="We treat tracking like infrastructure. The goal is clean inputs that the optimization engine can trust."
            />
            <SignalArchitectureDiagram />
          </div>
        </section>

        {/* 6 Outcome Section */}
        <section className="py-16">
          <div className="rounded-xl2 border border-white/10 bg-white/[0.03] backdrop-blur-md px-8 py-12 text-center">
            <h3
              className="text-3xl sm:text-4xl font-[650] tracking-[-0.02em]"
              style={{ fontFamily: "var(--font-space)" }}
            >
              Clean Signal = Stable Learning = Lower CPA
            </h3>
            <p className="mt-4 text-base text-textSecondary max-w-2xl mx-auto">
              When revenue and events align, Meta optimizes on reality. You get steadier performance and clearer decisions.
            </p>
            <div className="mt-8 flex justify-center">
              <ButtonPrimary>Book Diagnostic</ButtonPrimary>
            </div>
          </div>
        </section>

        {/* 7 Pricing Section single card */}
        <section className="py-16">
          <div className="flex justify-center">
            <div className="w-full max-w-xl">
              <GlassCard className="p-8">
                <p className="text-xs text-textSecondary">Pricing</p>
                <h3
                  className="mt-3 text-2xl sm:text-3xl font-[650] tracking-[-0.02em]"
                  style={{ fontFamily: "var(--font-space)" }}
                >
                  Revenue Infrastructure Repair
                </h3>

                <div className="mt-6 flex items-baseline justify-between">
                  <p className="text-4xl font-[700]">$2,500</p>
                  <p className="text-sm text-textSecondary">Fixed</p>
                </div>

                <div className="mt-6 space-y-3 text-sm text-textSecondary">
                  <div className="flex items-center gap-3">
                    <span className="h-1.5 w-1.5 rounded-full bg-white/40" />
                    <span>Full audit</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="h-1.5 w-1.5 rounded-full bg-white/40" />
                    <span>Signal repair</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="h-1.5 w-1.5 rounded-full bg-white/40" />
                    <span>Validation testing</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="h-1.5 w-1.5 rounded-full bg-white/40" />
                    <span>14 day monitoring</span>
                  </div>
                </div>

                <div className="mt-8">
                  <ButtonPrimary>Book Diagnostic</ButtonPrimary>
                </div>
              </GlassCard>
            </div>
          </div>
        </section>

        {/* 8 Final CTA */}
        <section className="pt-10">
          <div className="rounded-xl2 border border-white/10 bg-accentGlow px-8 py-14 text-center overflow-hidden relative">
            <div className="absolute inset-0 bg-white/[0.03] backdrop-blur-md" />
            <div className="relative">
              <h3
                className="text-3xl sm:text-4xl font-[650] tracking-[-0.02em]"
                style={{ fontFamily: "var(--font-space)" }}
              >
                If You’re Spending on Meta, Your Signal Should Be Perfect.
              </h3>
              <div className="mt-8 flex justify-center">
                <ButtonPrimary>Book 15 Min Diagnostic</ButtonPrimary>
              </div>
              <p className="mt-6 text-sm text-textMuted">
                Calm, technical, and focused on signal integrity.
              </p>
            </div>
          </div>
        </section>
      </main>
    </Shell>
  );
}
