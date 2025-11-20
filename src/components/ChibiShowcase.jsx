import React from 'react'
import { motion } from 'framer-motion'

const chibis = [
  { id: 1, color: 'from-pink-400 to-rose-400', name: 'Lovestruck Mage' },
  { id: 2, color: 'from-violet-400 to-fuchsia-400', name: 'Starry Idol' },
  { id: 3, color: 'from-sky-400 to-cyan-400', name: 'Wind Adventurer' },
  { id: 4, color: 'from-amber-400 to-rose-400', name: 'Blessed Prince' },
]

export default function ChibiShowcase() {
  return (
    <section className="relative py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Chibi Showcase</h2>
          <p className="mt-2 text-slate-300">Cute companions to add sparkle and smiles.</p>
        </div>

        <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-4">
          {chibis.map((c, i) => (
            <motion.div
              key={c.id}
              initial={{ opacity: 0, scale: 0.9, y: 8 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05, type: 'spring', stiffness: 140 }}
              className="aspect-square rounded-2xl relative overflow-hidden bg-slate-800/60 border border-white/10"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${c.color} opacity-60`} />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-20 h-24 rounded-[12px] bg-white/90 shadow-xl" />
              </div>
              <div className="absolute bottom-2 inset-x-2 text-center text-white/90 text-sm font-medium">
                {c.name}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
