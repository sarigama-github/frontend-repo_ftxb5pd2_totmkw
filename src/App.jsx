import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import ParallaxScene from './components/ParallaxScene'
import Themes from './components/Themes'
import GachaCarousel from './components/GachaCarousel'
import InteractiveMap from './components/InteractiveMap'
import QuestBoard from './components/QuestBoard'
import AudioPlayer from './components/AudioPlayer'
import ChibiShowcase from './components/ChibiShowcase'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white">
      <Navbar />
      <Hero />
      <ParallaxScene />
      <Themes />
      <GachaCarousel />
      <InteractiveMap />
      <QuestBoard />
      <AudioPlayer />
      <ChibiShowcase />
      <Footer />
    </div>
  )
}

export default App
