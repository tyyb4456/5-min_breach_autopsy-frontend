import { ShieldAlert } from 'lucide-react'
import { Link } from 'wouter'

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-border bg-bg-2">
      {/* Top crimson gradient line */}
      <div className="absolute top-0 left-0 right-0 h-px line-gradient-center" />

      {/* Subtle bg glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-96 h-48 rounded-full bg-crimson/5 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 py-14 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-start gap-10">

          {/* Brand block */}
          <div className="flex flex-col gap-3">
            <Link href="/" className="flex items-center gap-3 group">
              <ShieldAlert className="w-6 h-6 text-crimson transition-all duration-300" />
              <span className="font-display text-2xl tracking-widest text-text">
                BREACH<span className="text-crimson">.</span>AUTOPSY
              </span>
            </Link>
            <p className="font-mono text-xs tracking-[0.15em] text-text-muted max-w-xs leading-relaxed">
              // TERMINAL FORENSICS SUB-ROUTINE<br />
              // AI-POWERED INCIDENT RESPONSE
            </p>
          </div>

          {/* Nav columns */}
          <div className="flex gap-16">
            <div className="flex flex-col gap-3">
              <span className="font-mono text-[0.65rem] tracking-[0.22em] text-crimson">SYSTEM</span>
              {[
                { href: '#features',     label: 'AGENTS'       },
                { href: '#how-it-works', label: 'PIPELINE'     },
                { href: '#architecture', label: 'ARCHITECTURE' },
              ].map(({ href, label }) => (
                <a
                  key={href}
                  href={href}
                  className="font-mono text-xs tracking-[0.15em] text-text-muted hover:text-crimson transition-colors duration-200"
                >
                  {label}
                </a>
              ))}
            </div>
            <div className="flex flex-col gap-3">
              <span className="font-mono text-[0.65rem] tracking-[0.22em] text-crimson">ACCESS</span>
              {[
                { href: '/login',    label: 'CONSOLE' },
                { href: '/register', label: 'DEPLOY'  },
              ].map(({ href, label }) => (
                <Link
                  key={href}
                  href={href}
                  className="font-mono text-xs tracking-[0.15em] text-text-muted hover:text-crimson transition-colors duration-200"
                >
                  {label}
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="my-8 h-px bg-border" />

        {/* Bottom row */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="font-mono text-xs tracking-widest text-text-muted">
            &copy; {new Date().getFullYear()} FORENSIC SYSTEMS INC. ALL SECRETS SECURED.
          </p>
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-crimson animate-pulse" />
            <span className="font-mono text-xs tracking-widest text-text-muted">SYSTEM ONLINE</span>
          </div>
        </div>
      </div>
    </footer>
  )
}