export default function About() {
  return (
    <section id="about" className="relative py-24">
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">About</h2>
        <div className="rounded-2xl border border-white/10 bg-slate-900/40 p-6">
          <p className="text-slate-300/90 leading-relaxed">
            I’m Nova, a multidisciplinary graphics designer focused on brand systems, motion
            design, and playful interfaces. Over the last 6+ years I’ve worked with startups and
            cultural initiatives to craft visual languages that feel modern, expressive, and
            technically crisp. I love mixing 3D, bold color, and delightful micro-interactions.
          </p>
          <div className="mt-6 grid grid-cols-2 gap-4 text-sm text-slate-300/80">
            <ul className="space-y-2">
              <li>• Brand Identity</li>
              <li>• Motion & Micro-Interactions</li>
              <li>• 3D & Illustration</li>
            </ul>
            <ul className="space-y-2">
              <li>• UI for Web & Mobile</li>
              <li>• Social Content Design</li>
              <li>• Campaign Art Direction</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
