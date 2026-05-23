import { motion } from 'framer-motion'
import FadeIn from './FadeIn'
import Magnet from './Magnet'

const navLinks = [
  { name: 'Home', href: '#hero-section' },
  { name: 'Skills', href: '#skills' },
  { name: 'Experience', href: '#experience' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' },
  { name: 'Resume ↗', href: 'https://drive.google.com/file/d/1aEcZv1qWxiQX7lw7cuc9JpKjy1Pl8Sv2/view?usp=sharing', external: true }
]

export default function HeroSection() {
  return (
    <section id="hero-section" className="min-h-screen flex flex-col justify-between overflow-x-clip relative pb-6 sm:pb-8 md:pb-10">
      {/* Navbar */}
      <FadeIn delay={0} y={-20} className="w-full px-6 md:px-10 pt-6 md:pt-8 z-50">
        <nav className="flex flex-wrap items-center justify-between gap-4 max-w-7xl mx-auto">
          <a href="#hero-section" className="text-[#D7E2EA] font-extrabold tracking-tight text-xl sm:text-2xl uppercase hover:opacity-85 transition-opacity">
            Akbar Husain
          </a>
          <div className="flex flex-wrap items-center gap-x-5 sm:gap-x-8 gap-y-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                target={link.external ? '_blank' : undefined}
                rel={link.external ? 'noopener noreferrer' : undefined}
                className="text-[#D7E2EA] font-medium uppercase tracking-wider text-xs sm:text-sm md:text-base opacity-75 hover:opacity-100 transition-opacity duration-200"
              >
                {link.name}
              </a>
            ))}
          </div>
        </nav>
      </FadeIn>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col justify-center items-center px-6 md:px-10 z-10 max-w-7xl w-full mx-auto mt-6 md:mt-10 mb-10">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_420px] gap-10 md:gap-14 w-full items-center">
          
          {/* Left Column: Heading and Details */}
          <div className="flex flex-col items-start text-left z-20">
            <FadeIn delay={0.2} y={35}>
              <h1 className="hero-heading font-black uppercase tracking-tighter leading-[0.9] text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl mb-6">
                AI Engineer<br />
                &amp; <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-orange-400 to-amber-300">Product</span><br />
                Builder
              </h1>
            </FadeIn>

            <FadeIn delay={0.3} y={40}>
              <p className="text-gray-400 text-base sm:text-lg leading-relaxed max-w-[520px] mb-8 font-light">
                Building intelligent systems that turn raw e-commerce data into real business decisions — from SaaS analytics platforms to fashion AI and marketplace automation.
              </p>
            </FadeIn>

            {/* Quick Facts Card */}
            <FadeIn delay={0.4} y={30} className="w-full max-w-[500px]">
              <div className="grid grid-cols-3 divide-x divide-white/10 p-5 rounded-2xl border border-white/5 bg-white/[0.02] backdrop-blur-md">
                <div className="flex flex-col items-center justify-center text-center px-2">
                  <span className="text-2xl mb-1">🎓</span>
                  <span className="text-[10px] text-gray-500 uppercase tracking-widest font-semibold">University</span>
                  <span className="text-xs sm:text-sm text-gray-200 font-bold mt-1">Alliance Univ · MCA</span>
                </div>
                <div className="flex flex-col items-center justify-center text-center px-2">
                  <span className="text-2xl mb-1">📍</span>
                  <span className="text-[10px] text-gray-500 uppercase tracking-widest font-semibold">Location</span>
                  <span className="text-xs sm:text-sm text-gray-200 font-bold mt-1">Bangalore, India</span>
                </div>
                <div className="flex flex-col items-center justify-center text-center px-2">
                  <span className="text-2xl mb-1">⭐</span>
                  <span className="text-[10px] text-gray-500 uppercase tracking-widest font-semibold">CGPA</span>
                  <span className="text-xs sm:text-sm text-orange-400 font-black mt-1">9.5 / 10</span>
                </div>
              </div>
            </FadeIn>
          </div>

          {/* Right Column: Interactive Profile Portrait with badges */}
          <div className="flex justify-center items-center relative h-[380px] sm:h-[450px]">
            {/* Floating badges */}
            <motion.div 
              animate={{ y: [0, -8, 0] }}
              transition={{ repeat: Infinity, duration: 3, ease: 'easeInOut' }}
              className="absolute top-12 left-2 sm:-left-6 z-30 px-3.5 py-2 rounded-xl border border-orange-500/30 bg-black/85 backdrop-blur-sm text-xs sm:text-sm font-bold text-gray-200 shadow-xl flex items-center gap-1.5"
            >
              <span>🤖</span> LLM / AI
            </motion.div>

            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 3, delay: 0.8, ease: 'easeInOut' }}
              className="absolute top-28 right-0 sm:-right-6 z-30 px-3.5 py-2 rounded-xl border border-orange-500/30 bg-black/85 backdrop-blur-sm text-xs sm:text-sm font-bold text-gray-200 shadow-xl flex items-center gap-1.5"
            >
              <span>📊</span> Analytics
            </motion.div>

            <motion.div 
              animate={{ y: [0, -6, 0] }}
              transition={{ repeat: Infinity, duration: 3, delay: 1.4, ease: 'easeInOut' }}
              className="absolute bottom-28 left-0 sm:-left-4 z-30 px-3.5 py-2 rounded-xl border border-orange-500/30 bg-black/85 backdrop-blur-sm text-xs sm:text-sm font-bold text-gray-200 shadow-xl flex items-center gap-1.5"
            >
              <span>🐍</span> Python
            </motion.div>

            <motion.div 
              animate={{ y: [0, -8, 0] }}
              transition={{ repeat: Infinity, duration: 3, delay: 0.4, ease: 'easeInOut' }}
              className="absolute bottom-16 right-2 sm:-right-4 z-30 px-3.5 py-2 rounded-xl border border-orange-500/30 bg-black/85 backdrop-blur-sm text-xs sm:text-sm font-bold text-gray-200 shadow-xl flex items-center gap-1.5"
            >
              <span>⚡</span> Automation
            </motion.div>

            {/* Profile image with glow effect and rotating ring */}
            <FadeIn delay={0.5} y={30} className="w-[280px] sm:w-[320px] h-[280px] sm:h-[320px] relative z-10">
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-orange-500 to-amber-500 blur-2xl opacity-25 animate-pulse" />
              
              <div className="absolute -inset-1 rounded-full bg-gradient-to-tr from-orange-500 via-amber-400 to-orange-600 animate-spin" style={{ animationDuration: '8s' }} />
              
              <div className="absolute inset-1 rounded-full bg-[#0C0C0C]" />
              
              <Magnet
                padding={120}
                strength={4}
                activeTransition="transform 0.2s ease-out"
                inactiveTransition="transform 0.5s ease-in-out"
                className="w-full h-full relative z-20"
              >
                <img
                  src={`${import.meta.env.BASE_URL}profile.png`}
                  alt="Akbar Husain Portrait"
                  className="absolute inset-[6px] w-[calc(100%-12px)] h-[calc(100%-12px)] object-cover rounded-full z-20 border border-white/10"
                />
              </Magnet>
            </FadeIn>
          </div>

        </div>
      </div>

      {/* Tagline footer */}
      <div className="w-full flex flex-col sm:flex-row justify-between items-center px-6 md:px-10 max-w-7xl mx-auto gap-4 z-10">
        <FadeIn delay={0.6} y={15}>
          <p
            className="text-gray-400 font-light uppercase tracking-widest text-center sm:text-left"
            style={{ fontSize: 'clamp(0.75rem, 1.2vw, 1.25rem)' }}
          >
            an ai engineer driven by crafting intelligent and impactful products
          </p>
        </FadeIn>
        
        <FadeIn delay={0.7} y={15}>
          <div className="flex gap-4">
            <a href="#contact" className="px-6 py-2.5 rounded-full border border-orange-500/20 bg-orange-500/10 text-orange-400 text-sm font-semibold tracking-wide hover:bg-orange-500/20 hover:border-orange-500/30 transition-all duration-200">
              Let&apos;s Talk
            </a>
            <a href="#projects" className="px-6 py-2.5 rounded-full bg-gradient-to-r from-orange-500 to-orange-600 text-white text-sm font-semibold tracking-wide shadow-lg shadow-orange-500/20 hover:shadow-orange-500/30 hover:scale-[1.02] transition-all duration-200">
              View Projects ↗
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}

