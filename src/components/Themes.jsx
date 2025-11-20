import React from 'react'
import { motion } from 'framer-motion'
import { Heart, Sparkles, Star, Crown, Feather } from 'lucide-react'

const cards = [
  {
    title: 'Genshin-esque Realm',
    desc: 'Floating islands, elemental magic, and sweeping vistas.',
    accent: 'from-sky-400 via-cyan-300 to-emerald-300',
    icon: <Star className="text-sky-200" size={18} />,
  },
  {
    title: 'Love & Deepspace',
    desc: 'Sci‑fi romance, neon glow, and starry confessions.',
    accent: 'from-fuchsia-400 via-pink-300 to-rose-300',
    icon: <Heart className="text-pink-200" size={18} />,
  },
  {
    title: "Heavenly Blessings",
    desc: 'Divine robes, red ribbons, and ethereal serenity.',
    accent: 'from-rose-400 via-red-300 to-amber-300',
    icon: <Feather className="text-rose-100" size={18} />,
  },
  {
    title: 'Chibi Corner',
    desc: 'Tiny adventurers, big sparkles, maximum kawaii.',
    accent: 'from-indigo-400 via-violet-300 to-fuchsia-300',
    icon: <Sparkles className="text-violet-200" size={18} />,
  },
]

export default function Themes() {
  return (
    <section id="themes" className="relative py-20 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      <div className="absolute inset-0 bg-[radial-gradient(50%_50%_at_50%_0%,rgba(236,72,153,0.08),transparent)]"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between gap-6 flex-wrap">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white">Signature Worlds</h2>
            <p className="mt-2 text-slate-300 max-w-2xl">
              A curated selection of styles blending adventure, romance, and BL visual poetry.
            </p>
          </div>
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 text-white/80 border border-white/10">
            <Crown size={16} className="text-amber-300" /> featured vibes
          </div>
        </div>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {cards.map((c, i) => (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ delay: i * 0.06 }}
              className="relative overflow-hidden rounded-2xl bg-slate-800/60 border border-white/10 p-5 group"
            >
              <div className={`absolute -inset-0.5 bg-gradient-to-br ${c.accent} opacity-0 group-hover:opacity-20 transition-opacity`} />
              <div className="relative">
                <div className="flex items-center justify-between">
                  <span className="inline-flex items-center gap-2 text-white/90 text-sm">
                    {c.icon}
                    vibe
                  </span>
                </div>
                <h3 className="mt-3 text-xl font-semibold text-white">{c.title}</h3>
                <p className="mt-2 text-slate-300 text-sm">{c.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
