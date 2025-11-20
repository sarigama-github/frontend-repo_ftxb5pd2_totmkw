import React from 'react'
import { motion } from 'framer-motion'

const regions = [
  { id: 'anemo', name: 'Anemo Isles', desc: 'Soft winds and skywhales.', x: 10, y: 40, color: 'from-sky-400 to-emerald-400' },
  { id: 'rose', name: 'Rose Citadel', desc: 'BL vows and crimson ribbons.', x: 55, y: 30, color: 'from-rose-400 to-amber-400' },
  { id: 'neon', name: 'Neon Harbor', desc: 'Otome dates under starlight.', x: 75, y: 60, color: 'from-fuchsia-400 to-indigo-400' },
]

export default function InteractiveMap() {
  const [active, setActive] = React.useState(regions[0])

  return (
    <section className="relative py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 relative h-[420px] rounded-2xl overflow-hidden border border-white/10 bg-slate-800/60">
            <div className="absolute inset-0 bg-[radial-gradient(60%_60%_at_50%_50%,rgba(236,72,153,0.12),transparent)]" />
            {regions.map((r) => (
              <motion.button
                key={r.id}
                whileHover={{ scale: 1.06 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setActive(r)}
                className="absolute -translate-x-1/2 -translate-y-1/2"
                style={{ left: `${r.x}%`, top: `${r.y}%` }}
              >
                <span className={`inline-flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-br ${r.color} text-white shadow-lg shadow-pink-500/20`}>
                  •
                </span>
              </motion.button>
            ))}
          </div>
          <div className="rounded-2xl border border-white/10 bg-slate-800/60 p-6">
            <div className="text-white/70 text-sm">Region</div>
            <div className="text-white text-2xl font-extrabold mt-1">{active.name}</div>
            <div className="text-slate-300 mt-2">{active.desc}</div>
            <div className="mt-6 text-slate-400 text-sm">Tap a glowing orb on the map to travel.</div>
          </div>
        </div>
      </div>
    </section>
  )
}
