import Spline from '@splinetool/react-spline'

export default function Hero() {
  return (
    <section id="hero" className="relative flex min-h-[92vh] items-center overflow-hidden pt-28 pb-24">
      {/* Background gradients */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-fuchsia-500/20 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-indigo-500/20 blur-3xl" />
        <div className="absolute top-1/3 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full bg-cyan-400/10 blur-3xl" />
      </div>

      <div className="mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-10 px-4 sm:px-6 md:grid-cols-2 lg:gap-14">
        <div className="relative z-10">
          <p className="mb-4 inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-200/80">
            Available for freelance projects
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white">
            Hi, I’m Nova — a visual designer crafting playful, modern brands
          </h1>
          <p className="mt-4 text-slate-300/90 text-lg">
            I blend motion, 3D, and thoughtful typography to build identities that move people.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a href="#work" className="rounded-lg bg-white text-slate-900 px-5 py-3 font-medium hover:bg-slate-100 transition-colors">
              See my work
            </a>
            <a href="#contact" className="rounded-lg bg-white/10 text-white px-5 py-3 font-medium hover:bg-white/20 transition-colors">
              Get in touch
            </a>
          </div>
        </div>

        <div className="relative z-10 h-[420px] sm:h-[520px] md:h-[560px] lg:h-[640px] rounded-2xl overflow-hidden border border-white/10 bg-slate-900/40">
          <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        </div>
      </div>
    </section>
  )
}
