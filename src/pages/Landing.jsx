import { useEffect, useState } from 'react'
import { Link } from 'wouter'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import {
  Activity, Shield, Key, Network,
  HardDrive, Cpu, Terminal, ChevronRight, ArrowRight,
} from 'lucide-react'

/* ─── Data ────────────────────────────────────────────────────── */

const agents = [
  { name: 'TRIAGE', icon: Activity, desc: 'Initial compromise assessment and blast-radius calculation.', num: '01' },
  { name: 'PERSISTENCE', icon: HardDrive, desc: 'Hunts unauthorized registry keys, scheduled tasks, and rogue services.', num: '02' },
  { name: 'LATERAL MOVEMENT', icon: Network, desc: 'Maps internal pivoting, RDP hijacks, and pass-the-hash vectors.', num: '03' },
  { name: 'EXFILTRATION', icon: Terminal, desc: 'Quantifies data egress, staging archives, and covert channels.', num: '04' },
  { name: 'CREDENTIAL ACCESS', icon: Key, desc: 'Identifies LSASS dumping, token theft, and brute-force anomalies.', num: '05' },
  { name: 'SYNTHESIS', icon: Cpu, desc: 'Correlates agent findings into a cohesive, chronological attack narrative.', num: '06' },
]

const metrics = [
  { val: '< 5 MIN', label: 'RESOLUTION' },
  { val: '96%+', label: 'ACCURACY' },
  { val: 'ATT&CK', label: 'MITRE MAP' },
  { val: '6', label: 'AI AGENTS' },
]

const stack = [
  { label: 'ORCHESTRATION', name: 'OpenCLAW' },
  { label: 'INTELLIGENCE', name: 'qwen-3-235b-a22b-instruct-2507' },
  { label: 'PROTOCOL', name: 'MCP SERVERS' },
  { label: 'FORENSICS', name: 'SIFT WORKSTATION' },
]

const pipeline = [
  { step: '01', icon: HardDrive, title: 'INGESTION', sub: 'DISK IMAGES / MEMORY DUMPS', hot: false },
  { step: '02', icon: Activity, title: 'SWARM ANALYSIS', sub: '6 CONCURRENT AI AGENTS', hot: true },
  { step: '03', icon: Shield, title: 'ATTACK TIMELINE', sub: 'CHRONOLOGICAL FORENSIC REPORT', hot: false },
]

/* ─── Component ─────────────────────────────────────────────── */

export default function Landing() {
  /* Blinking cursor for terminal label */
  const [cursor, setCursor] = useState(true)
  useEffect(() => {
    const t = setInterval(() => setCursor(c => !c), 600)
    return () => clearInterval(t)
  }, [])

  return (
    <div className="min-h-screen bg-bg text-text">
      <Navbar />

  {/* ══════════════════════════════════════════
          HERO
      ══════════════════════════════════════════ */}
      <section className="relative min-h-screen flex items-center pt-16 overflow-hidden">

        {/* Background layers */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 hero-bg" />
          <div className="absolute inset-0 grid-crimson opacity-[0.07]" />
          <div className="absolute inset-0 scanlines opacity-60" />
          {/* Vignette */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_100%_100%_at_50%_50%,transparent_30%,#100C08_100%)]" />
        </div>

        {/* Content */}
        <div className="max-w-7xl mx-auto px-6 relative z-10 w-full py-24">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">

            {/* LEFT — Text */}
            <div className="flex-1 min-w-0">

              {/* Terminal status */}
              <div className="flex items-center gap-3 mb-8">
                <span className="w-2 h-2 rounded-full bg-crimson animate-pulse shadow-[0_0_8px_#95122c]" />
                <span className="font-mono text-sm tracking-[0.25em] text-amber-50">
                  SYSTEM COMPROMISED // INITIATING AUTOPSY{cursor ? '█' : '\u00a0'}
                </span>
              </div>

              <h1
                className="font-display leading-[0.85] tracking-normal mb-4 glow-hero-title text-hero-text"
                style={{ fontSize: 'clamp(2.8rem, 7vw, 7rem)' }}
              >
                5-MINUTE
              </h1>
              <h1
                className="font-display leading-[0.85] tracking-normal mb-8 text-gradient-hero"
                style={{ fontSize: 'clamp(2.8rem, 7vw, 7rem)' }}
              >
                BREACH AUTOPSY
              </h1>

              <p className="font-mono  text-lg md:text-xl text-amber-50 max-w-lg mb-12 leading-relaxed uppercase">
                The AI-powered forensic weapon. Feed it disk images and memory dumps.
                Get a complete, precise attack timeline in under 5 minutes.
              </p>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/register">
                  <span className="btn-primary inline-flex items-center gap-2 px-8 py-4 font-display text-lg tracking-[0.15em] text-white cursor-pointer rounded-2xl">
                    DEPLOY AGENTS <ArrowRight className="w-5 h-5" />
                  </span>
                </Link>
                <Link href="/login">
                  <span className="btn-outline inline-flex items-center px-8 py-4 font-display text-lg tracking-[0.15em] text-crimson border border-crimson cursor-pointer rounded-2xl">
                    ACCESS CONSOLE
                  </span>
                </Link>
              </div>
            </div>

            {/* RIGHT — removed */}

          </div>
        </div>

        {/* Bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-40 z-10 pointer-events-none bg-linear-to-b from-transparent to-bg" />
      </section>

      {/* ══════════════════════════════════════════
          PIPELINE
      ══════════════════════════════════════════ */}
      <section id="how-it-works" className="py-28 relative z-10 border-y border-border bg-bg-2 overflow-hidden">
        <div className="absolute inset-0 grid-crimson opacity-[0.04] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-20">
            <p className="font-mono text-xs tracking-[0.25em] text-crimson mb-3">// FROM EVIDENCE TO VERDICT</p>
            <h2 className="font-display leading-none tracking-tight text-text" style={{ fontSize: 'clamp(2.5rem, 7vw, 5.5rem)' }}>
              THE <span className="text-gradient-section">PIPELINE</span>
            </h2>
          </div>

          <div className="flex flex-col lg:flex-row items-center justify-center gap-6">
            {pipeline.map((p, i) => {
              const Icon = p.icon
              return (
                <div key={p.step} className="flex flex-col lg:flex-row items-center gap-6 w-full lg:w-auto">
                  <div className={`
                    group flex-1 p-8 border text-center w-full lg:w-auto relative overflow-hidden
                    transition-all duration-350 min-w-55 cursor-default rounded-2xl
                    ${p.hot
                      ? 'pipeline-hot border-crimson hover:shadow-[0_0_40px_#95122c40]'
                      : 'bg-bg border-border hover:border-crimson hover:shadow-[0_0_25px_#95122c20]'}
                  `}>
                    <span className={`
                      block font-display text-4xl mb-5 transition-all duration-300
                      ${p.hot ? 'text-crimson drop-shadow-[0_0_12px_#95122c70]' : 'text-text-faint group-hover:text-crimson'}
                    `}>
                      {p.step}
                    </span>
                    <Icon className={`
                      w-10 h-10 mx-auto mb-4 text-crimson transition-all duration-300
                      ${p.hot ? 'drop-shadow-[0_0_8px_#95122c]' : 'group-hover:drop-shadow-[0_0_8px_#95122c]'}
                    `} />
                    <h4 className="font-display text-xl tracking-wider text-text mb-2">{p.title}</h4>
                    <p className="font-mono text-xs tracking-[0.14em] text-text-muted">{p.sub}</p>
                  </div>

                  {i < pipeline.length - 1 && (
                    <ChevronRight className="w-10 h-10 shrink-0 hidden lg:block text-crimson opacity-60" />
                  )}
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          TECH STACK
      ══════════════════════════════════════════ */}
      <section id="architecture" className="py-28 relative z-10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-16">
            <p className="font-mono text-xs tracking-[0.25em] text-crimson mb-3">// ENGINE SPECIFICATIONS</p>
            <h2 className="font-display leading-none tracking-tight text-text" style={{ fontSize: 'clamp(2.5rem, 7vw, 5.5rem)' }}>
              TECH <span className="text-gradient-section">STACK</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {stack.map(({ label, name }) => (
              <div
                key={name}
                className="card-sweep-center group p-8 border border-border bg-bg-card hover:border-crimson hover:bg-bg-3 hover:shadow-[0_0_25px_#95122c20] transition-all duration-350 text-center cursor-default rounded-2xl"
              >
                <span className="block font-mono text-xs tracking-[0.22em] text-text-muted group-hover:text-crimson transition-colors duration-300 mb-4">
                  {label}
                </span>
                <span className="block font-display text-xl tracking-wider font-bold uppercase text-text">
                  {name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          FINAL CTA
      ══════════════════════════════════════════ */}
      <section className="relative py-40 overflow-hidden cta-bg">
        <div className="absolute inset-0 grid-crimson opacity-[0.05] pointer-events-none" />

        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <p className="font-mono text-xs tracking-[0.3em] text-crimson mb-6">// URGENT — ACTIVE INTRUSION DETECTED</p>

          <h2
            className="font-display leading-[0.88] tracking-tight text-hero-text glow-hero-title mb-4"
            style={{ fontSize: 'clamp(2.8rem, 8vw, 7rem)' }}
          >
            TIME IS
          </h2>
          <h2
            className="font-display leading-[0.88] tracking-tight text-gradient-cta mb-10"
            style={{ fontSize: 'clamp(2.8rem, 8vw, 7rem)' }}
          >
            RUNNING OUT.
          </h2>

          <p className="font-mono text-base tracking-[0.2em] text-hero-muted mb-12">
            THE ATTACKER IS STILL IN THE NETWORK.<br />EVERY SECOND MATTERS.
          </p>

          <Link href="/register">
            <span className="btn-cta inline-block px-14 py-5 font-display text-2xl tracking-[0.15em] text-white cursor-pointer rounded-2xl">
              INITIATE AUTOPSY
            </span>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  )
}