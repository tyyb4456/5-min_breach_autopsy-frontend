import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { motion } from "framer-motion"
import { Link, useLocation } from "wouter"
import { Terminal, ShieldAlert } from "lucide-react"

const schema = z.object({
  email: z.string().email("INVALID PROTOCOL: EMAIL MALFORMED"),
  password: z.string().min(1, "PASSWORD REQUIRED FOR DECRYPTION"),
})

export default function Login() {
  const [, setLocation] = useLocation()

  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: zodResolver(schema)
  })

  const onSubmit = (data) => {
    localStorage.setItem("token", "simulated_token_" + Date.now())
    setLocation("/dashboard")
  }

  return (
    <div className="min-h-screen bg-bg flex items-center justify-center p-6 relative overflow-hidden">
      {/* Scanline glitch bg */}
      <div className="absolute inset-0 pointer-events-none opacity-20 bg-[linear-gradient(rgba(255,0,51,0.05)_1px,transparent_1px)] bg-[length:100%_4px]" />

      <Link href="/" className="absolute top-6 left-6 flex items-center gap-2 group z-20">
        <ShieldAlert className="w-6 h-6 text-accent group-hover:animate-pulse" />
        <span className="font-display text-2xl tracking-widest text-text mt-1">BREACH AUTOPSY</span>
      </Link>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md bg-bg-2 border border-border p-8 relative z-10 shadow-[0_0_40px_theme(colors.accent-glow)]"
      >
        <div className="flex justify-center mb-6">
          <Terminal className="w-12 h-12 text-accent" />
        </div>

        <h1 className="font-display text-5xl text-center text-white mb-2 glow-red">
          AUTHENTICATE
        </h1>
        <div className="font-mono text-center text-text-muted text-sm mb-8 tracking-widest">
          // ENTER CREDENTIALS TO ACCESS WAR ROOM
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div>
            <label className="block font-mono text-xs text-accent-2 mb-2 tracking-widest">
              [ IDENTITY ]
            </label>
            <input
              type="email"
              {...register("email")}
              className="w-full bg-bg border border-border-2 text-white px-4 py-3 font-mono focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all"
              placeholder="operator@forensics.net"
            />
            {errors.email && (
              <p className="font-mono text-accent text-xs mt-2 uppercase">
                &gt; ERROR: {errors.email.message}
              </p>
            )}
          </div>

          <div>
            <label className="block font-mono text-xs text-accent-2 mb-2 tracking-widest">
              [ PASSPHRASE ]
            </label>
            <input
              type="password"
              {...register("password")}
              className="w-full bg-bg border border-border-2 text-white px-4 py-3 font-mono focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all"
              placeholder="••••••••••••"
            />
            {errors.password && (
              <p className="font-mono text-accent text-xs mt-2 uppercase">
                &gt; ERROR: {errors.password.message}
              </p>
            )}
          </div>

          <button
            type="submit"
            className="w-full py-4 mt-4 bg-accent text-white font-display text-2xl tracking-widest hover:bg-accent-dark transition-colors border border-accent hover:shadow-[0_0_20px_theme(colors.accent)]"
          >
            BREACH THE PERIMETER
          </button>
        </form>

        <div className="mt-8 text-center border-t border-border pt-6">
          <p className="font-mono text-xs text-text-muted tracking-widest">
            NEW OPERATOR?{' '}
            <Link href="/register" className="text-accent-2 hover:text-white transition-colors">
              REQUEST ACCESS //
            </Link>
          </p>
        </div>
      </motion.div>
    </div>
  )
}