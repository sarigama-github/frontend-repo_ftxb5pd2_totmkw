import React from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

export default function ParallaxScene() {
  const { scrollYProgress } = useScroll()
  const y1 = useTransform(scrollYProgress, [0, 1], [0, 150])
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 300])
  const y3 = useTransform(scrollYProgress, [0, 1], [0, 450])

  return (
    <section aria-label="Parallax fantasy" className="relative h-[70vh] min-h-[520px] overflow-hidden bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      <div className="absolute inset-0 bg-[radial-gradient(60%_60%_at_50%_10%,rgba(147,51,234,0.15),transparent)]" />
      <div className="absolute inset-0 pointer-events-none mix-blend-screen">
        <motion.div style={{ y: y3 }} className="absolute -top-10 left-1/2 -translate-x-1/2 w-[1400px] h-[1400px] rounded-full bg-fuchsia-500/10 blur-3xl" />
        <motion.div style={{ y: y2 }} className="absolute -top-20 -left-20 w-[900px] h-[900px] rounded-full bg-indigo-500/10 blur-3xl" />
        <motion.div style={{ y: y1 }} className="absolute -bottom-32 -right-16 w-[700px] h-[700px] rounded-full bg-rose-500/10 blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
        <div className="w-full text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white"
          >
            Romance • Fantasy • Adventure
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15, duration: 0.6 }}
            className="mt-3 text-slate-300 max-w-2xl mx-auto"
          >
            Float through layered nebulae and soft light orbs as you scroll. The scene shifts with you for an immersive vibe.
          </motion.p>
        </div>
      </div>
    </section>
  )
}
