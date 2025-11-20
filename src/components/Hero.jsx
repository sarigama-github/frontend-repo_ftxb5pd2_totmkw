import React from 'react'
import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section id="home" className="relative w-full h-[90vh] min-h-[600px] overflow-hidden">
      {/* 3D Spline cover */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/atN3lqky4IzF-KEP/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Gradient bloom overlay to match anime/otome vibes */}
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-slate-950/70 via-fuchsia-900/20 to-transparent"></div>

      {/* Headline content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-end pb-10">
        <div className="max-w-2xl">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight text-white drop-shadow-[0_5px_35px_rgba(236,72,153,0.35)]"
          >
            Dreamy Anime Portfolio
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="mt-4 text-base sm:text-lg text-fuchsia-100/90"
          >
            Inspired by the worlds of Genshin, Love & Deepspace, and BL epics like Heaven Official's Blessing — with chibi charm sprinkled everywhere.
          </motion.p>

          <div className="mt-8 flex flex-wrap gap-3">
            {['Genshin-esque', 'Otome romance', 'BL aesthetic', 'Chibi cuteness'].map((chip, i) => (
              <motion.span
                key={chip}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + i * 0.08 }}
                className="px-3 py-1.5 rounded-full text-sm bg-white/10 text-white/90 border border-white/20 backdrop-blur"
              >
                {chip}
              </motion.span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
