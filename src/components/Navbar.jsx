import { useState, useEffect } from 'react'
import { Link } from 'wouter'
import { useTheme } from '../context/ThemeContext'
import { Sun, Moon, ShieldAlert, Menu, X } from 'lucide-react'

export default function Navbar() {
  const { theme, toggleTheme } = useTheme()
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobile] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const links = [
    { href: '#features',     label: 'AGENTS'       },
    { href: '#how-it-works', label: 'PIPELINE'     },
    { href: '#architecture', label: 'ARCHITECTURE' },
  ]

  return (
    <>
      <nav className={`
        fixed top-0 left-0 right-0 z-50 transition-all duration-500
        ${scrolled
          ? 'bg-bg/90 backdrop-blur-md border-b border-border shadow-navbar'
          : 'bg-transparent border-b border-transparent'}
      `}>
        {/* Top accent line */}
        <div className="absolute top-0 left-0 right-0 h-0.5 nav-accent-line" />

        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative">
              <ShieldAlert className="w-7 h-7 text-crimson drop-shadow-[0_0_8px_#95122c80] transition-all duration-300" />
              <span className="absolute inset-0 rounded-full animate-ping bg-crimson/20" style={{ animationDuration: '2s' }} />
            </div>
            <span className="font-display text-xl tracking-widest text-text">
              BREACH<span className="text-crimson">.</span>AUTOPSY
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {links.map(({ href, label }) => (
              <a
                key={href}
                href={href}
                className="nav-link-line font-mono text-[0.72rem] tracking-[0.12em] text-text-muted hover:text-crimson transition-colors duration-200 py-1"
              >
                {label}
              </a>
            ))}
          </div>

          {/* Right Controls */}
          <div className="flex items-center gap-3">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-sm text-text-muted hover:text-crimson hover:bg-crimson/10 transition-all duration-200 cursor-pointer"
            >
              {theme === 'dark' ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>

            <Link
              href="/login"
              className="hidden md:inline-flex items-center px-5 py-2 font-mono text-xs tracking-[0.2em] text-crimson border border-crimson hover:bg-crimson hover:text-white hover:shadow-[0_0_20px_#95122c50] transition-all duration-300 rounded-xl"
            >
              INITIATE
            </Link>

            <button
              className="md:hidden p-2 text-text-muted cursor-pointer"
              onClick={() => setMobile(o => !o)}
            >
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu — CSS height transition, no framer-motion */}
      <div className={`
        fixed top-16 left-0 right-0 z-40 bg-bg border-b border-border backdrop-blur-md
        overflow-hidden transition-all duration-300
        ${mobileOpen ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0'}
      `}>
        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col gap-4">
          {links.map(({ href, label }) => (
            <a
              key={href}
              href={href}
              onClick={() => setMobile(false)}
              className="py-3 border-b border-border font-mono text-[0.8rem] tracking-[0.15em] text-text-muted hover:text-crimson transition-colors"
            >
              &gt; {label}
            </a>
          ))}
          <Link href="/login" onClick={() => setMobile(false)}>
            <span className="block text-center py-3 mt-2 font-mono text-xs tracking-[0.2em] bg-crimson text-white rounded-xl">
              INITIATE SESSION
            </span>
          </Link>
        </div>
      </div>
    </>
  )
}