import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { motion } from "framer-motion"
import { Link, useLocation } from "wouter"
import { ShieldAlert, Cpu } from "lucide-react"

const schema = z.object({
  name: z.string().min(2, "CODENAME TOO SHORT"),
  email: z.string().email("INVALID PROTOCOL: EMAIL MALFORMED"),
  password: z.string().min(8, "PASSPHRASE MUST BE >= 8 CHARACTERS"),
  confirmPassword: z.string()
}).refine((data) => data.password === data.confirmPassword, {
  message: "PASSPHRASE MISMATCH DETECTED",
  path: ["confirmPassword"],
})

const inputClass = "w-full bg-bg border border-border-2 text-white px-4 py-3 font-mono focus:outline-none focus:border-accent-2 focus:ring-1 focus:ring-accent-2 transition-all"

export default function Register() {
  const [, setLocation] = useLocation()

  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: zodResolver(schema)
  })

  const onSubmit = () => setLocation("/login")

  const fields = [
    { id: "name",            label: "[ CODENAME / NAME ]",             type: "text",     placeholder: "GHOST_LEAD"             },
    { id: "email",           label: "[ SECURE COMM CHANNEL / EMAIL ]", type: "email",    placeholder: "operator@forensics.net" },
    { id: "password",        label: "[ ENCRYPTION KEY / PASSPHRASE ]", type: "password", placeholder: "••••••••••••"           },
    { id: "confirmPassword", label: "[ VERIFY ENCRYPTION KEY ]",       type: "password", placeholder: "••••••••••••"           },
  ]

  return (
    <div className="min-h-screen bg-bg flex items-center justify-center p-6 relative overflow-hidden">
      {/* Scanline glitch bg */}
      <div className="absolute inset-0 pointer-events-none opacity-20 bg-[linear-gradient(rgba(0,245,255,0.05)_1px,transparent_1px)] bg-[length:100%_4px]" />

      <Link href="/" className="absolute top-6 left-6 flex items-center gap-2 group z-20">
        <ShieldAlert className="w-6 h-6 text-accent group-hover:animate-pulse" />
        <span className="font-display text-2xl tracking-widest text-text mt-1">BREACH AUTOPSY</span>
      </Link>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md bg-bg-2 border border-border-2 p-8 relative z-10 shadow-[0_0_40px_theme(colors.accent-2-glow)]"
      >
        <div className="flex justify-center mb-6">
          <Cpu className="w-12 h-12 text-accent-2" />
        </div>

        <h1 className="font-display text-5xl text-center text-white mb-2 glow-cyan">
          INITIALIZE OPERATOR
        </h1>
        <div className="font-mono text-center text-text-muted text-sm mb-8 tracking-widest">
          // PROVISION NEW FORENSIC CLEARANCE
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
          {fields.map(({ id, label, type, placeholder }) => (
            <div key={id}>
              <label className="block font-mono text-xs text-accent-2 mb-2 tracking-widest">
                {label}
              </label>
              <input
                type={type}
                {...register(id)}
                className={inputClass}
                placeholder={placeholder}
              />
              {errors[id] && (
                <p className="font-mono text-accent text-xs mt-1 uppercase">
                  &gt; {errors[id].message}
                </p>
              )}
            </div>
          ))}

          <button
            type="submit"
            className="w-full py-4 mt-6 bg-accent-2 text-black font-display text-2xl tracking-widest hover:bg-white transition-colors border border-accent-2 hover:shadow-[0_0_20px_theme(colors.accent-2)]"
          >
            PROVISION CLEARANCE
          </button>
        </form>

        <div className="mt-8 text-center border-t border-border-2 pt-6">
          <p className="font-mono text-xs text-text-muted tracking-widest">
            ALREADY PROVISIONED?{' '}
            <Link href="/login" className="text-accent hover:text-white transition-colors">
              AUTHENTICATE //
            </Link>
          </p>
        </div>
      </motion.div>
    </div>
  )
}