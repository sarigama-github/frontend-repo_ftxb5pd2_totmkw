import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Themes from './components/Themes'
import ChibiShowcase from './components/ChibiShowcase'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white">
      <Navbar />
      <Hero />
      <Themes />
      <ChibiShowcase />
      <Footer />
    </div>
  )
}

export default App
