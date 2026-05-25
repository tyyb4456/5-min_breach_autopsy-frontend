import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { motion } from "framer-motion"
import { Link, useLocation } from "wouter"
import { ShieldAlert, Terminal, ChevronRight } from "lucide-react"

const schema = z.object({
  email: z.string().email("INVALID PROTOCOL: EMAIL MALFORMED"),
  password: z.string().min(1, "PASSPHRASE REQUIRED FOR DECRYPTION"),
})

export default function Login() {
  const [, setLocation] = useLocation()

  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: zodResolver(schema)
  })

  const onSubmit = () => {
    localStorage.setItem("token", "simulated_token_" + Date.now())
    setLocation("/dashboard")
  }

  return (
    <div className="min-h-screen bg-bg text-text flex items-center justify-center p-6 relative overflow-hidden">

      {/* Background layers — identical to Landing hero */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 hero-bg" />
        <div className="absolute inset-0 grid-crimson opacity-[0.07]" />
        <div className="absolute inset-0 scanlines opacity-60" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_100%_100%_at_50%_50%,transparent_30%,#100C08_100%)]" />
      </div>

      {/* Logo — same as Navbar */}
      <Link href="/" className="absolute top-6 left-6 flex items-center gap-3 group z-20">
        <div className="relative">
          <ShieldAlert className="w-7 h-7 text-crimson drop-shadow-[0_0_8px_#95122c80] transition-all duration-300" />
          <span className="absolute inset-0 rounded-full animate-ping bg-crimson/20" style={{ animationDuration: '2s' }} />
        </div>
        <span className="font-display text-xl tracking-widest text-text">
          BREACH<span className="text-crimson">.</span>AUTOPSY
        </span>
      </Link>

      <motion.div
        initial={{ opacity: 0, scale: 0.97, y: 16 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="w-full max-w-md bg-bg-2 border border-border-hot relative z-10 p-10 rounded-2xl shadow-[0_0_60px_#95122c30,0_0_120px_#95122c10]"
      >
        {/* Top accent line */}
        <div className="absolute top-0 left-0 right-0 h-px line-gradient-crimson rounded-t-2xl" />

        {/* Icon */}
        <div className="flex justify-center mb-6">
          <div className="p-3 border border-border-hot rounded-xl bg-crimson/10">
            <Terminal className="w-8 h-8 text-crimson drop-shadow-[0_0_8px_#95122c]" />
          </div>
        </div>

        <h1 className="font-display text-5xl text-center text-text mb-2 glow-crimson-sm">
          AUTHENTICATE
        </h1>
        <p className="font-mono text-center text-text-muted text-xs mb-10 tracking-[0.2em]">
          // ENTER CREDENTIALS TO ACCESS WAR ROOM
        </p>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">

          {/* Email */}
          <div>
            <label className="block font-mono text-xs text-crimson mb-2 tracking-[0.2em]">
              [ IDENTITY ]
            </label>
            <input
              type="email"
              {...register("email")}
              className="w-full bg-bg border border-border hover:border-border-hot text-text px-4 py-3 font-mono text-sm focus:outline-none focus:border-crimson focus:ring-1 focus:ring-crimson/50 transition-all duration-200 rounded-xl placeholder:text-text-faint"
              placeholder="operator@forensics.net"
            />
            {errors.email && (
              <p className="font-mono text-crimson text-xs mt-2 tracking-widest flex items-center gap-1">
                <ChevronRight className="w-3 h-3" /> {errors.email.message}
              </p>
            )}
          </div>

          {/* Password */}
          <div>
            <label className="block font-mono text-xs text-crimson mb-2 tracking-[0.2em]">
              [ PASSPHRASE ]
            </label>
            <input
              type="password"
              {...register("password")}
              className="w-full bg-bg border border-border hover:border-border-hot text-text px-4 py-3 font-mono text-sm focus:outline-none focus:border-crimson focus:ring-1 focus:ring-crimson/50 transition-all duration-200 rounded-xl placeholder:text-text-faint"
              placeholder="••••••••••••"
            />
            {errors.password && (
              <p className="font-mono text-crimson text-xs mt-2 tracking-widest flex items-center gap-1">
                <ChevronRight className="w-3 h-3" /> {errors.password.message}
              </p>
            )}
          </div>

          <button
            type="submit"
            className="btn-primary w-full py-4 mt-2 text-white font-display text-2xl tracking-[0.15em] rounded-2xl cursor-pointer"
          >
            BREACH THE PERIMETER
          </button>
        </form>

        <div className="mt-8 text-center border-t border-border pt-6">
          <p className="font-mono text-xs text-text-muted tracking-[0.18em]">
            NEW OPERATOR?{' '}
            <Link href="/register" className="text-crimson hover:text-text transition-colors duration-200">
              REQUEST ACCESS //
            </Link>
          </p>
        </div>

        {/* Bottom accent line */}
        <div className="absolute bottom-0 left-0 right-0 h-px line-gradient-crimson rounded-b-2xl" />
      </motion.div>
    </div>
  )
}