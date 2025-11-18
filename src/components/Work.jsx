import { motion } from 'framer-motion'

const projects = [
  {
    title: 'Glow Studio Identity',
    tags: ['Brand', 'Motion', '3D'],
    image: 'https://images.unsplash.com/photo-1646206346896-14367dee001b?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxHbG93JTIwU3R1ZGlvJTIwSWRlbnRpdHl8ZW58MHwwfHx8MTc2MzQzNDU0Nnww&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
  },
  {
    title: 'Playful UI Kit',
    tags: ['UI', 'Illustration'],
    image: 'https://images.unsplash.com/photo-1614680376739-414d95ff43df?ixid=M3w3OTkxMTl8MHwxfHJhbmRvbXx8fHx8fHx8fDE3NjM0MzQ1NDd8&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
  },
  {
    title: 'Neon Poster Series',
    tags: ['Print', 'Type'],
    image: 'https://images.unsplash.com/photo-1545239351-1141bd82e8a6?q=80&w=1600&auto=format&fit=crop',
  },
  {
    title: 'Sonic Brand Pack',
    tags: ['Brand', 'Audio'],
    image: 'https://images.unsplash.com/photo-1512295767273-ac109ac3acfa?q=80&w=1600&auto=format&fit=crop',
  },
]

export default function Work() {
  return (
    <section id="work" className="relative py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mb-10 flex items-end justify-between">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Selected Work</h2>
          <a href="#contact" className="text-slate-300 hover:text-white transition-colors">Request full portfolio →</a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <motion.a
              key={p.title}
              href="#"
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-slate-900/40"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img src={p.image} alt={p.title} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
              </div>
              <div className="p-4">
                <h3 className="text-white font-semibold">{p.title}</h3>
                <div className="mt-2 flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <span key={t} className="text-xs text-slate-300/80 rounded-full border border-white/10 bg-white/5 px-2 py-1">{t}</span>
                  ))}
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}
