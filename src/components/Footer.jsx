import React from 'react'

export default function Footer() {
  return (
    <footer id="contact" className="relative border-t border-white/10 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 items-center">
          <div className="text-white/90">
            <div className="text-lg font-semibold">Let’s create a world together</div>
            <p className="text-slate-400 text-sm mt-1">Romance, adventure, and cozy storytelling for your brand or project.</p>
          </div>
          <div className="text-center">
            <a href="mailto:hello@yourname.dev" className="inline-flex items-center justify-center px-4 py-2 rounded-lg bg-gradient-to-r from-pink-500 to-indigo-500 text-white shadow-lg shadow-pink-500/30">
              Email Me
            </a>
          </div>
          <div className="text-right text-slate-400 text-sm">
            © {new Date().getFullYear()} Your Name. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  )
}
