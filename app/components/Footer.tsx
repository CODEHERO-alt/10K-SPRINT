export default function Footer() {
  return (
    <footer className="border-t border-white/10 mt-24">
      <div className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-4 gap-10 text-sm text-slate-400">
        <div>
          <h4 className="text-white font-medium mb-4">Platform</h4>
          <ul className="space-y-2">
            <li>Audit</li>
            <li>Repair</li>
            <li>Validation</li>
            <li>Monitoring</li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-medium mb-4">Use Cases</h4>
          <ul className="space-y-2">
            <li>Shopify DTC</li>
            <li>Meta Ads</li>
            <li>CAPI Alignment</li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-medium mb-4">Resources</h4>
          <ul className="space-y-2">
            <li>Audit Framework</li>
            <li>FAQ</li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-medium mb-4">Company</h4>
          <ul className="space-y-2">
            <li>Contact</li>
            <li>Privacy</li>
            <li>Terms</li>
          </ul>
        </div>
      </div>

      <div className="text-center text-xs text-slate-500 pb-8">
        © {new Date().getFullYear()} 10K Sprint. All rights reserved.
      </div>
    </footer>
  );
}
