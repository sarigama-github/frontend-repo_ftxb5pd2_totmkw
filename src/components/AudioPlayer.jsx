import React from 'react'
import { motion } from 'framer-motion'
import { Play, Pause, Music } from 'lucide-react'

export default function AudioPlayer() {
  const [playing, setPlaying] = React.useState(false)
  const audioRef = React.useRef(null)

  const toggle = () => {
    const a = audioRef.current
    if (!a) return
    if (playing) {
      a.pause()
    } else {
      a.play()
    }
    setPlaying(!playing)
  }

  return (
    <section className="relative py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl border border-white/10 bg-slate-800/60 p-6 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-xl bg-gradient-to-tr from-pink-500 via-fuchsia-500 to-indigo-500 text-white shadow-lg shadow-pink-500/30">
              <Music size={18} />
            </div>
            <div>
              <div className="text-white font-semibold">Ambient Romance Mix</div>
              <div className="text-slate-300 text-sm">Lo-fi confessionals • Stardust walks • Café dates</div>
            </div>
          </div>
          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={toggle}
            className="px-3 py-1.5 rounded-lg bg-white/10 text-white border border-white/15"
          >
            {playing ? <Pause size={16} /> : <Play size={16} />} {playing ? 'Pause' : 'Play'}
          </motion.button>
          <audio ref={audioRef} src="https://cdn.pixabay.com/download/audio/2022/03/15/audio_4b7e16cf47.mp3?filename=lofi-study-112191.mp3" preload="none" />
        </div>
      </div>
    </section>
  )
}
