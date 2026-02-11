import Link from "next/link";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur border-b border-white/10 bg-[#0f172a]/80">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
        <Link href="/" className="font-semibold text-lg">
          10K Sprint
        </Link>

        <nav className="hidden md:flex gap-8 text-sm text-slate-300">
          <Link href="#problem">Problem</Link>
          <Link href="#process">Process</Link>
          <Link href="#pricing">Pricing</Link>
        </nav>

        <Link href="/book" className="btn-primary text-sm">
          Book Diagnostic
        </Link>
      </div>
    </header>
  );
}
