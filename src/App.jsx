import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Work from './components/Work'
import About from './components/About'
import Contact from './components/Contact'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-slate-200">
      {/* subtle pattern overlay */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(168,85,247,0.08),transparent_40%),radial-gradient(circle_at_80%_0%,rgba(99,102,241,0.07),transparent_35%),radial-gradient(circle_at_50%_80%,rgba(34,211,238,0.06),transparent_40%)]" />

      <Navbar />
      <main className="relative">
        <Hero />
        <Work />
        <About />
        <Contact />
      </main>

      <footer className="relative border-t border-white/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 py-10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-slate-400 text-sm">© {new Date().getFullYear()} Nova Studio — All rights reserved.</p>
          <div className="flex items-center gap-4 text-sm">
            <a href="#" className="hover:text-white">Instagram</a>
            <a href="#" className="hover:text-white">Dribbble</a>
            <a href="#" className="hover:text-white">Behance</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
