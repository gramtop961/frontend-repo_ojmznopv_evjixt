import { useState } from 'react'

export default function Contact() {
  const [status, setStatus] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('Sending...')

    try {
      const res = await fetch(`${import.meta.env.VITE_BACKEND_URL || ''}/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: e.target.name.value,
          email: e.target.email.value,
          message: e.target.message.value,
        }),
      })

      if (!res.ok) throw new Error('Request failed')
      setStatus('Thanks! I will reply soon.')
      e.target.reset()
    } catch (err) {
      setStatus('Something went wrong. Please try again later.')
    }
  }

  return (
    <section id="contact" className="relative py-24">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">Let’s work together</h2>
        <form onSubmit={handleSubmit} className="rounded-2xl border border-white/10 bg-slate-900/40 p-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm text-slate-300/80 mb-2">Name</label>
              <input name="name" required className="w-full rounded-lg bg-slate-800/60 border border-white/10 px-3 py-2 text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500" placeholder="Your name" />
            </div>
            <div>
              <label className="block text-sm text-slate-300/80 mb-2">Email</label>
              <input type="email" name="email" required className="w-full rounded-lg bg-slate-800/60 border border-white/10 px-3 py-2 text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500" placeholder="you@domain.com" />
            </div>
          </div>
          <div className="mt-4">
            <label className="block text-sm text-slate-300/80 mb-2">Message</label>
            <textarea name="message" rows="5" required className="w-full rounded-lg bg-slate-800/60 border border-white/10 px-3 py-2 text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500" placeholder="Tell me about your project" />
          </div>

          <div className="mt-6 flex items-center gap-4">
            <button type="submit" className="rounded-lg bg-white text-slate-900 px-5 py-3 font-medium hover:bg-slate-100 transition-colors">Send message</button>
            <p className="text-sm text-slate-300/80">{status}</p>
          </div>
        </form>
      </div>
    </section>
  )
}
