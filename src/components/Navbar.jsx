import { useState } from 'react'
import { Menu, X } from 'lucide-react'

function NavLink({ href, children, onClick }) {
  return (
    <a
      href={href}
      onClick={onClick}
      className="text-slate-200/90 hover:text-white transition-colors px-3 py-2"
    >
      {children}
    </a>
  )
}

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const close = () => setOpen(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mt-6 backdrop-blur supports-[backdrop-filter]:bg-slate-900/40 bg-slate-900/70 border border-white/10 rounded-2xl shadow-lg">
          <div className="flex items-center justify-between h-16 px-4">
            <a href="#hero" className="flex items-center gap-3 group">
              <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-fuchsia-500 via-indigo-500 to-blue-500 shadow-[0_0_25px_rgba(99,102,241,0.6)]" />
              <span className="text-white font-semibold tracking-tight group-hover:opacity-90">Nova Studio</span>
            </a>

            <nav className="hidden md:flex items-center">
              <NavLink href="#work">Work</NavLink>
              <NavLink href="#about">About</NavLink>
              <NavLink href="#contact">Contact</NavLink>
              <a href="#contact" className="ml-2 inline-flex items-center gap-2 rounded-lg bg-white/10 hover:bg-white/20 text-white px-4 py-2 transition-colors">
                Hire me
              </a>
            </nav>

            <button
              className="md:hidden text-slate-200 hover:text-white p-2"
              aria-label="Toggle Menu"
              onClick={() => setOpen((v) => !v)}
            >
              {open ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>

          {open && (
            <div className="md:hidden px-4 pb-4">
              <div className="flex flex-col rounded-xl border border-white/10 bg-slate-900/60">
                <NavLink href="#work" onClick={close}>Work</NavLink>
                <NavLink href="#about" onClick={close}>About</NavLink>
                <NavLink href="#contact" onClick={close}>Contact</NavLink>
                <a href="#contact" onClick={close} className="m-3 text-center rounded-lg bg-white/10 hover:bg-white/20 text-white px-4 py-2 transition-colors">
                  Hire me
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  )
}
