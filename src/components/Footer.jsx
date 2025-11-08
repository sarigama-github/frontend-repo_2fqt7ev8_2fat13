import { Github, Twitter, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black/60">
      <div className="mx-auto flex w-full max-w-7xl flex-col items-center justify-between gap-6 px-6 py-10 md:flex-row">
        <div className="text-center md:text-left">
          <div className="text-lg font-semibold">Matrix Sync Tech</div>
          <p className="mt-1 text-sm text-white/60">Seamless sync. Enterprise-grade reliability.</p>
        </div>
        <div className="flex items-center gap-4 text-white/70">
          <a className="rounded p-2 hover:text-white" href="#" aria-label="GitHub">
            <Github className="h-5 w-5" />
          </a>
          <a className="rounded p-2 hover:text-white" href="#" aria-label="Twitter">
            <Twitter className="h-5 w-5" />
          </a>
          <a className="rounded p-2 hover:text-white" href="mailto:sales@matrixsync.tech" aria-label="Email">
            <Mail className="h-5 w-5" />
          </a>
        </div>
      </div>
    </footer>
  );
}
