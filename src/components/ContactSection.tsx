import { useState, type FormEvent } from 'react'
import FadeIn from './FadeIn'

const socialLinks = [
  { name: 'LinkedIn', url: 'https://www.linkedin.com/in/akbar-kadiwala', label: 'in' },
  { name: 'GitHub', url: 'https://github.com/Akbarhusain12', label: 'git' },
  { name: 'Kaggle', url: 'https://www.kaggle.com/akbarhusain12', label: 'k' },
  { name: 'LeetCode', url: 'https://leetcode.com/u/Akbarhusain12/', label: 'lc' }
]

export default function ContactSection() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState('')

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    // Simulated contact submit
    setStatus('Sending...')
    setTimeout(() => {
      setStatus('Message sent successfully!')
      setFormData({ name: '', email: '', message: '' })
    }, 1000)
  }

  return (
    <section
      id="contact"
      className="bg-[#0C0C0C] border-t border-white/5 px-6 sm:px-8 md:px-10 py-24 relative overflow-hidden"
    >
      <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] rounded-full bg-orange-500/[0.03] blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto z-10 relative">
        <FadeIn delay={0} y={40} className="text-center mb-16 sm:mb-20">
          <span className="text-xs uppercase tracking-widest text-orange-400 font-bold mb-2 block">Get In Touch</span>
          <h2
            className="hero-heading font-black uppercase leading-none tracking-tight text-center"
            style={{ fontSize: 'clamp(2.5rem, 8vw, 100px)' }}
          >
            Let&apos;s Build Something <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-400">Impactful</span>
          </h2>
          <p className="text-gray-400 font-light mt-4 max-w-xl mx-auto text-base sm:text-lg">
            Open to full-time roles in AI/ML, E-commerce Tech, FashionTech &amp; Retail AI.
          </p>
        </FadeIn>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.5fr] gap-12">
          {/* Left Column: Info Cards */}
          <div className="flex flex-col gap-5">
            {/* Email Card */}
            <FadeIn delay={0.1} y={20}>
              <div className="p-5 rounded-2xl border border-white/5 bg-white/[0.01] hover:border-orange-500/20 transition-all duration-300 flex items-center gap-5">
                <div className="w-12 h-12 rounded-xl border border-orange-500/20 bg-orange-500/5 flex items-center justify-center text-xl">
                  ✉️
                </div>
                <div>
                  <span className="text-[10px] text-gray-500 uppercase tracking-widest block">Email</span>
                  <a
                    href="mailto:akbarhusainkadiwala32@gmail.com"
                    className="text-gray-200 hover:text-orange-400 text-sm font-semibold transition-colors mt-1 block"
                  >
                    akbarhusainkadiwala32@gmail.com
                  </a>
                </div>
              </div>
            </FadeIn>

            {/* Phone Card */}
            <FadeIn delay={0.2} y={20}>
              <div className="p-5 rounded-2xl border border-white/5 bg-white/[0.01] hover:border-orange-500/20 transition-all duration-300 flex items-center gap-5">
                <div className="w-12 h-12 rounded-xl border border-orange-500/20 bg-orange-500/5 flex items-center justify-center text-xl">
                  📱
                </div>
                <div>
                  <span className="text-[10px] text-gray-500 uppercase tracking-widest block">Phone</span>
                  <a
                    href="tel:+919724294786"
                    className="text-gray-200 hover:text-orange-400 text-sm font-semibold transition-colors mt-1 block"
                  >
                    +91 9724294786
                  </a>
                </div>
              </div>
            </FadeIn>

            {/* Location Card */}
            <FadeIn delay={0.3} y={20}>
              <div className="p-5 rounded-2xl border border-white/5 bg-white/[0.01] hover:border-orange-500/20 transition-all duration-300 flex items-center gap-5">
                <div className="w-12 h-12 rounded-xl border border-orange-500/20 bg-orange-500/5 flex items-center justify-center text-xl">
                  📍
                </div>
                <div>
                  <span className="text-[10px] text-gray-500 uppercase tracking-widest block">Location</span>
                  <span className="text-gray-200 text-sm font-semibold mt-1 block">
                    Bangalore, Karnataka, India
                  </span>
                </div>
              </div>
            </FadeIn>

            {/* Socials Card */}
            <FadeIn delay={0.4} y={20}>
              <div className="p-5 rounded-2xl border border-white/5 bg-white/[0.01] hover:border-orange-500/20 transition-all duration-300">
                <span className="text-[10px] text-gray-500 uppercase tracking-widest block mb-4">Connect Socially</span>
                <div className="flex flex-wrap gap-2.5">
                  {socialLinks.map((soc) => (
                    <a
                      key={soc.name}
                      href={soc.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 rounded-xl border border-white/5 bg-white/5 text-gray-400 hover:border-orange-500/30 hover:text-orange-400 hover:bg-orange-500/5 text-xs font-semibold tracking-wide uppercase transition-all duration-200"
                    >
                      <span className="text-[10px] font-bold text-gray-600 mr-1 select-none">/</span>
                      {soc.name}
                    </a>
                  ))}
                </div>
              </div>
            </FadeIn>
          </div>

          {/* Right Column: Contact Form */}
          <FadeIn delay={0.2} y={30}>
            <form onSubmit={handleSubmit} className="p-6 sm:p-8 rounded-3xl border border-white/5 bg-white/[0.01] flex flex-col gap-5 h-full justify-between">
              <div className="flex flex-col gap-5">
                <div className="flex flex-col gap-2">
                  <label htmlFor="name" className="text-xs uppercase tracking-widest text-gray-500 font-semibold">Your Name</label>
                  <input
                    type="text"
                    id="name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Enter your name"
                    className="w-full px-4 py-3 rounded-xl border border-white/5 bg-white/[0.02] text-sm text-gray-200 placeholder-gray-600 focus:outline-none focus:border-orange-500 focus:bg-orange-500/[0.01] transition-all"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label htmlFor="email" className="text-xs uppercase tracking-widest text-gray-500 font-semibold">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="Enter your email address"
                    className="w-full px-4 py-3 rounded-xl border border-white/5 bg-white/[0.02] text-sm text-gray-200 placeholder-gray-600 focus:outline-none focus:border-orange-500 focus:bg-orange-500/[0.01] transition-all"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label htmlFor="message" className="text-xs uppercase tracking-widest text-gray-500 font-semibold">Message</label>
                  <textarea
                    id="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell me about your project or opportunity..."
                    className="w-full px-4 py-3 rounded-xl border border-white/5 bg-white/[0.02] text-sm text-gray-200 placeholder-gray-600 focus:outline-none focus:border-orange-500 focus:bg-orange-500/[0.01] transition-all resize-none"
                  />
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mt-4">
                <button
                  type="submit"
                  className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-gradient-to-r from-orange-500 to-orange-600 text-white text-sm font-semibold tracking-wide shadow-lg shadow-orange-500/20 hover:scale-[1.02] transition-all duration-200"
                >
                  Send Message ↗
                </button>
                {status && (
                  <span className={`text-xs font-semibold ${status.includes('success') ? 'text-emerald-500' : 'text-orange-400'} animate-fade-in`}>
                    {status}
                  </span>
                )}
              </div>
            </form>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}
