import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Sparkles, Star, Heart } from 'lucide-react'

const cards = [
  { id: 1, title: 'SSR Celestial Groom', tag: 'BL Romance', color: 'from-rose-500 to-amber-400' },
  { id: 2, title: 'UR Starbound Idol', tag: 'Otome Dream', color: 'from-fuchsia-500 to-indigo-400' },
  { id: 3, title: 'SSR Windborne Ranger', tag: 'Genshin-esque', color: 'from-sky-500 to-emerald-400' },
  { id: 4, title: 'SR Café Date', tag: 'Slice of Life', color: 'from-amber-400 to-rose-400' },
]

export default function GachaCarousel() {
  const [index, setIndex] = React.useState(0)
  const next = () => setIndex((i) => (i + 1) % cards.length)
  const prev = () => setIndex((i) => (i - 1 + cards.length) % cards.length)

  React.useEffect(() => {
    const t = setInterval(next, 3500)
    return () => clearInterval(t)
  }, [])

  return (
    <section className="relative py-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-3xl font-bold text-white">Gacha Showcase</h2>
            <p className="text-slate-300">Spin through spotlight banners with soft, glossy motion.</p>
          </div>
          <div className="flex gap-2">
            <button onClick={prev} className="px-3 py-1.5 rounded-md bg-white/10 text-white/80 border border-white/10">Prev</button>
            <button onClick={next} className="px-3 py-1.5 rounded-md bg-white/10 text-white/80 border border-white/10">Next</button>
          </div>
        </div>

        <div className="relative h-[320px]">
          <AnimatePresence mode="popLayout">
            {cards.map((c, i) => (
              i === index && (
                <motion.div
                  key={c.id}
                  initial={{ opacity: 0, y: 20, rotate: -2 }}
                  animate={{ opacity: 1, y: 0, rotate: 0 }}
                  exit={{ opacity: 0, y: -20, rotate: 2 }}
                  transition={{ type: 'spring', stiffness: 120 }}
                  className="absolute inset-0"
                >
                  <div className="h-full rounded-3xl overflow-hidden bg-slate-800/60 border border-white/10 relative">
                    <div className={`absolute inset-0 bg-gradient-to-br ${c.color} opacity-50`} />
                    <div className="absolute inset-0 p-8 flex flex-col justify-end">
                      <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/15 text-white/90 border border-white/20 w-max">
                        <Sparkles size={16} /> {c.tag}
                      </div>
                      <h3 className="mt-3 text-white text-3xl font-extrabold drop-shadow-[0_10px_30px_rgba(0,0,0,0.35)]">{c.title}</h3>
                      <p className="text-slate-100/90 max-w-lg">Limited-time banner with special animations and voice lines. Collect memories, not just items.</p>
                    </div>
                  </div>
                </motion.div>
              )
            ))}
          </AnimatePresence>
        </div>

        <div className="mt-4 flex items-center justify-center gap-2">
          {cards.map((_, i) => (
            <span key={i} className={`h-1.5 rounded-full transition-all ${i === index ? 'w-8 bg-white/80' : 'w-3 bg-white/30'}`} />
          ))}
        </div>
      </div>
    </section>
  )
}
