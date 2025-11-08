import Spline from '@splinetool/react-spline';
import { ArrowRight, ShieldCheck, Zap } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative h-[88vh] w-full overflow-hidden">
      {/* 3D Background */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/Gt5HUob8aGDxOUep/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Overlay gradient for readability */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/40 via-black/50 to-black"></div>

      {/* Content */}
      <div className="relative z-10 mx-auto flex h-full max-w-7xl flex-col items-center justify-center px-6 text-center">
        <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1 text-xs text-white/80 backdrop-blur">
          <Zap className="h-4 w-4 text-emerald-400" />
          Introducing Matrix Sync Tech
        </span>
        <h1 className="max-w-4xl bg-gradient-to-b from-white to-white/70 bg-clip-text text-4xl font-semibold leading-tight text-transparent md:text-6xl">
          Seamless data sync across every matrix of your stack
        </h1>
        <p className="mt-4 max-w-2xl text-balance text-white/70">
          Orchestrate real-time pipelines, bi-directional integrations, and resilient webhooks with enterprise-grade reliability.
        </p>
        <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row">
          <a href="#pricing" className="inline-flex items-center justify-center rounded-md bg-emerald-500 px-6 py-3 text-sm font-medium text-black transition hover:bg-emerald-400">
            Start free trial
            <ArrowRight className="ml-2 h-4 w-4" />
          </a>
          <a href="#features" className="inline-flex items-center justify-center rounded-md border border-white/10 bg-white/5 px-6 py-3 text-sm font-medium text-white/90 transition hover:bg-white/10">
            Explore features
          </a>
        </div>
        <div className="mt-6 flex items-center gap-6 text-xs text-white/60">
          <div className="flex items-center gap-2">
            <ShieldCheck className="h-4 w-4 text-emerald-400" />
            SOC 2 & GDPR ready
          </div>
          <div className="hidden h-4 w-px bg-white/10 sm:block" />
          <div>Uptime 99.99%</div>
        </div>
      </div>
    </section>
  );
}
