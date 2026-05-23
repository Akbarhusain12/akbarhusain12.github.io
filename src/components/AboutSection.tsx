import FadeIn from './FadeIn'
import AnimatedText from './AnimatedText'

const aboutText =
  "I am a results-oriented AI/ML Engineer and Product Builder currently pursuing my MCA in Data Science at Alliance University. My work bridges the gap between machine learning models and production-ready applications, with a special emphasis on data automation, visual search engines, predictive analytics, and automated retail operations. I am driven by building high-impact, intelligent systems that translate complex e-commerce and business data into actionable decision engines."

export default function AboutSection() {
  return (
    <section
      id="about"
      className="min-h-[80vh] flex items-center justify-center px-6 sm:px-8 md:px-10 py-24 relative overflow-hidden"
    >
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-orange-500/5 blur-3xl pointer-events-none" />

      {/* Content */}
      <div className="flex flex-col items-center max-w-4xl z-10">
        <div className="flex flex-col items-center gap-10 sm:gap-14">
          <FadeIn delay={0.1} y={30}>
            <h2
              className="hero-heading font-black uppercase leading-none tracking-tight text-center"
              style={{ fontSize: 'clamp(2.5rem, 8vw, 100px)' }}
            >
              About me
            </h2>
          </FadeIn>

          <AnimatedText
            text={aboutText}
            className="text-gray-300 font-normal text-center leading-relaxed max-w-[720px] text-lg sm:text-xl md:text-2xl"
            style={{ fontSize: 'clamp(1rem, 1.8vw, 1.4rem)' }}
          />
        </div>
      </div>
    </section>
  )
}
