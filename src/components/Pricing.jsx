export default function Pricing() {
  return (
    <section id="pricing" className="relative mx-auto w-full max-w-7xl px-6 py-20">
      <div className="mb-12 text-center">
        <h2 className="bg-gradient-to-b from-white to-white/70 bg-clip-text text-3xl font-semibold text-transparent md:text-4xl">
          Flexible pricing that scales with you
        </h2>
        <p className="mt-3 text-white/60">Start free. Upgrade when you need more throughput and features.</p>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        {/* Starter */}
        <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
          <h3 className="text-lg font-semibold">Starter</h3>
          <p className="mt-2 text-sm text-white/60">For trying things out and small projects.</p>
          <div className="mt-6 flex items-end gap-1">
            <span className="text-3xl font-bold">$0</span>
            <span className="text-white/50">/mo</span>
          </div>
          <ul className="mt-6 space-y-2 text-sm text-white/70">
            <li>5,000 events / month</li>
            <li>2 connectors</li>
            <li>Community support</li>
          </ul>
          <button className="mt-6 w-full rounded-md bg-white px-4 py-2 text-sm font-medium text-black transition hover:bg-white/90">Get started</button>
        </div>

        {/* Growth */}
        <div className="relative rounded-2xl border border-emerald-500/40 bg-gradient-to-b from-emerald-500/10 to-emerald-500/0 p-6 ring-1 ring-inset ring-emerald-500/20">
          <div className="absolute right-4 top-4 rounded-full bg-emerald-500 px-2 py-1 text-xs font-medium text-black">Popular</div>
          <h3 className="text-lg font-semibold">Growth</h3>
          <p className="mt-2 text-sm text-white/60">For startups and teams going to production.</p>
          <div className="mt-6 flex items-end gap-1">
            <span className="text-3xl font-bold">$99</span>
            <span className="text-white/50">/mo</span>
          </div>
          <ul className="mt-6 space-y-2 text-sm text-white/70">
            <li>1M events / month</li>
            <li>All connectors</li>
            <li>Retries & dead-letter queues</li>
            <li>Role-based access</li>
          </ul>
          <button className="mt-6 w-full rounded-md bg-emerald-500 px-4 py-2 text-sm font-medium text-black transition hover:bg-emerald-400">Start trial</button>
        </div>

        {/* Enterprise */}
        <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
          <h3 className="text-lg font-semibold">Enterprise</h3>
          <p className="mt-2 text-sm text-white/60">For orgs with custom needs and SLAs.</p>
          <div className="mt-6 flex items-end gap-1">
            <span className="text-3xl font-bold">Custom</span>
          </div>
          <ul className="mt-6 space-y-2 text-sm text-white/70">
            <li>Unlimited events</li>
            <li>Private cloud / on-prem</li>
            <li>Dedicated support</li>
            <li>Custom contracts</li>
          </ul>
          <button className="mt-6 w-full rounded-md border border-white/20 px-4 py-2 text-sm font-medium text-white transition hover:bg-white/10">Contact sales</button>
        </div>
      </div>
    </section>
  );
}
