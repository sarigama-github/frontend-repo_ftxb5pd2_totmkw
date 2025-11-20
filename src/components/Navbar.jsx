import React from 'react'
import { Heart, Sparkles, Star, Gamepad2 } from 'lucide-react'
import { motion } from 'framer-motion'

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'Themes', href: '#themes' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' }
]

export default function Navbar() {
  return (
    <div className="sticky top-0 z-40 backdrop-blur-xl bg-slate-900/50 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="#home" className="inline-flex items-center gap-2">
          <motion.span
            initial={{ rotate: -15, scale: 0.9 }}
            animate={{ rotate: 0, scale: 1 }}
            transition={{ type: 'spring', stiffness: 150 }}
            className="p-2 rounded-xl bg-gradient-to-tr from-pink-500 via-fuchsia-500 to-indigo-500 text-white shadow-lg shadow-pink-500/30"
          >
            <Gamepad2 size={18} />
          </motion.span>
          <span className="text-white font-extrabold tracking-tight text-lg">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-300 via-fuchsia-200 to-indigo-300">
              Vibe Portfolio
            </span>
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a key={item.label} href={item.href} className="text-slate-200/90 hover:text-white transition-colors">
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <motion.div
            initial={{ y: -4 }}
            animate={{ y: [0, -4, 0] }}
            transition={{ repeat: Infinity, duration: 3 }}
            className="hidden sm:flex items-center gap-1 px-3 py-1 rounded-full bg-white/10 text-white text-sm border border-white/10"
          >
            <Sparkles size={16} className="text-pink-300" />
            <span>anime vibes</span>
          </motion.div>
          <motion.button
            whileTap={{ scale: 0.96 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-gradient-to-r from-pink-500 to-indigo-500 text-white text-sm shadow-lg shadow-pink-500/30"
            onClick={() => {
              const el = document.querySelector('#contact')
              el?.scrollIntoView({ behavior: 'smooth' })
            }}
          >
            <Heart size={16} className="fill-white/20" /> Hire Me
          </motion.button>
        </div>
      </div>

      {/* Cute chibi chips */}
      <div className="overflow-x-hidden border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2 flex items-center gap-3 text-xs">
          {[
            { label: 'chibi', icon: <Star size={14} /> },
            { label: 'romance', icon: <Heart size={14} /> },
            { label: 'fantasy', icon: <Sparkles size={14} /> },
            { label: 'otome', icon: <Heart size={14} /> },
            { label: 'adventure', icon: <Star size={14} /> }
          ].map((tag, idx) => (
            <motion.span
              key={idx}
              initial={{ opacity: 0, y: 6 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05 }}
              className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-white/5 text-white/80 border border-white/10"
            >
              <span className="text-pink-300">{tag.icon}</span>
              {tag.label}
            </motion.span>
          ))}
        </div>
      </div>
    </div>
  )
}
