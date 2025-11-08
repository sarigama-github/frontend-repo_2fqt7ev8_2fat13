import { Shield, Workflow, Radio, Database } from 'lucide-react';

const features = [
  {
    icon: Workflow,
    title: 'Unified Integrations',
    desc: 'Connect CRMs, data warehouses, and internal services with a single, resilient layer.',
  },
  {
    icon: Radio,
    title: 'Real-time Streaming',
    desc: 'Low-latency, event-driven sync so updates propagate instantly across systems.',
  },
  {
    icon: Shield,
    title: 'Security First',
    desc: 'Encryption in transit and at rest, role-based access, and audit trails out of the box.',
  },
  {
    icon: Database,
    title: 'Schema-aware',
    desc: 'Automatic schema detection and validation keep your pipelines stable as you scale.',
  },
];

export default function Features() {
  return (
    <section id="features" className="relative mx-auto w-full max-w-7xl px-6 py-20">
      <div className="mb-12 text-center">
        <h2 className="bg-gradient-to-b from-white to-white/70 bg-clip-text text-3xl font-semibold text-transparent md:text-4xl">
          Built for modern data teams
        </h2>
        <p className="mt-3 text-white/60">
          Everything you need to build reliable, observable, and secure sync.
        </p>
      </div>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
        {features.map(({ icon: Icon, title, desc }) => (
          <div key={title} className="group rounded-xl border border-white/10 bg-white/5 p-5 backdrop-blur transition hover:bg-white/10">
            <div className="mb-4 inline-flex rounded-lg bg-emerald-500/20 p-2 text-emerald-300">
              <Icon className="h-5 w-5" />
            </div>
            <h3 className="text-lg font-medium">{title}</h3>
            <p className="mt-2 text-sm text-white/60">{desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
