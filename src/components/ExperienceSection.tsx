import FadeIn from './FadeIn'

const experiences = [
  {
    role: 'Data Automation Intern',
    company: 'Craloft',
    location: 'Sidhpur, Gujarat',
    period: 'Dec 2023 – Apr 2024',
    icon: '⚙️',
    bullets: [
      'Automated Amazon & Flipkart seller operations with n8n + Python — 400+ listings daily',
      'Built ETL pipelines to extract, clean, and transform marketplace data',
      'Reduced manual workload by 30% through intelligent workflow automation',
      'Implemented data validation and monitoring workflows for seller accuracy',
      'Improved marketplace reporting reliability with cross-team collaboration'
    ]
  },
  {
    role: 'E-Commerce Operations Executive',
    company: 'United E-Commerce',
    location: 'Sidhpur, Gujarat (Part-time)',
    period: 'May 2021 – Feb 2022',
    icon: '📦',
    bullets: [
      'Streamlined shipment data, boosting route efficiency by 12%',
      'Maintained 200+ product listings on Amazon & Flipkart',
      'Implemented SEO-driven listings — 15% increase in sales'
    ]
  }
]

export default function ExperienceSection() {
  return (
    <section
      id="experience"
      className="bg-[#0C0C0C] border-t border-white/5 px-6 sm:px-8 md:px-10 py-24 relative overflow-hidden"
    >
      <div className="absolute top-[40%] left-[-10%] w-[500px] h-[500px] rounded-full bg-orange-500/[0.03] blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto z-10 relative">
        <FadeIn delay={0} y={40} className="text-center mb-16 sm:mb-20">
          <span className="text-xs uppercase tracking-widest text-orange-400 font-bold mb-2 block">Career Milestones</span>
          <h2
            className="hero-heading font-black uppercase leading-none tracking-tight text-center"
            style={{ fontSize: 'clamp(2.5rem, 8vw, 100px)' }}
          >
            Experience
          </h2>
        </FadeIn>

        <div className="flex flex-col gap-10">
          {experiences.map((exp, i) => (
            <FadeIn key={exp.company + i} delay={i * 0.15} y={30}>
              <div className="p-6 sm:p-8 rounded-3xl border border-white/5 bg-white/[0.01] hover:border-orange-500/20 transition-all duration-300 relative group">
                {/* Glowing Left Indicator Line */}
                <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-gradient-to-b from-orange-500 to-amber-400 rounded-r-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                <div className="flex flex-col sm:flex-row justify-between items-start gap-4 mb-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl border border-orange-500/20 bg-orange-500/5 flex items-center justify-center text-xl">
                      {exp.icon}
                    </div>
                    <div>
                      <h3 className="text-gray-100 text-lg sm:text-xl font-bold uppercase tracking-tight">
                        {exp.role}
                      </h3>
                      <p className="text-orange-400 text-sm font-semibold mt-0.5">
                        {exp.company} &middot; <span className="text-gray-500 font-normal">{exp.location}</span>
                      </p>
                    </div>
                  </div>
                  <span className="px-3.5 py-1 rounded-full border border-white/5 bg-white/5 text-[10px] sm:text-xs text-gray-400 font-semibold tracking-wider self-start sm:self-center">
                    {exp.period}
                  </span>
                </div>

                <ul className="flex flex-col gap-3 pl-2 sm:pl-4">
                  {exp.bullets.map((bullet, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-gray-400 text-xs sm:text-sm leading-relaxed">
                      <span className="text-orange-500 mt-1 select-none text-[10px]">▶</span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
