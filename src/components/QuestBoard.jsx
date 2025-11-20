import React from 'react'
import { motion } from 'framer-motion'
import { Swords, HeartHandshake, Map, Stars } from 'lucide-react'

const quests = [
  { title: 'Celestial Wedding', type: 'Romance Quest', reward: 'Eternal Ribbon', color: 'from-rose-500/30 to-amber-400/30' },
  { title: 'Neon City Confession', type: 'Otome Quest', reward: 'Starlit Memory', color: 'from-fuchsia-500/30 to-indigo-400/30' },
  { title: 'Wind Temple Trial', type: 'Adventure Quest', reward: 'Anemo Crest', color: 'from-sky-500/30 to-emerald-400/30' },
]

export default function QuestBoard() {
  return (
    <section id="about" className="relative py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between gap-6 flex-wrap">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white">Quest Board</h2>
            <p className="mt-2 text-slate-300 max-w-2xl">Interactive prompts that reveal more about you and your creative path.</p>
          </div>
        </div>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
          {quests.map((q, i) => (
            <motion.div
              key={q.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
              className="relative rounded-2xl overflow-hidden border border-white/10 bg-slate-800/60"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${q.color}`} />
              <div className="relative p-6">
                <div className="text-white/80 text-sm">{q.type}</div>
                <div className="mt-1 text-white text-xl font-semibold">{q.title}</div>
                <div className="mt-6 text-slate-200/90 text-sm">Reward: {q.reward}</div>
                <motion.button
                  whileTap={{ scale: 0.96 }}
                  className="mt-6 inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/10 text-white border border-white/15"
                  onClick={() => alert(`Quest accepted: ${q.title}!`)}
                >
                  <Swords size={16} /> Accept
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
