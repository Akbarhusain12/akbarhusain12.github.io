import FadeIn from './FadeIn'

const educations = [
  {
    type: 'Post Graduate',
    degree: 'MCA — Data Science',
    university: 'Alliance University',
    location: 'Bangalore, KA',
    gpa: '9.5 / 10',
    period: 'Expected May 2026',
    courses: ['ML', 'Deep Learning', 'Statistical Analysis', 'Big Data Analytics']
  },
  {
    type: 'Under Graduate',
    degree: 'BCA — Computer Applications',
    university: 'HNG University',
    location: 'Patan, Gujarat',
    gpa: '8.47 / 10',
    period: 'Mar 2024',
    courses: ['Data Structures', 'Algorithms', 'DBMS', 'OOP', 'Web Development']
  }
]

const achievements = [
  {
    icon: '🏆',
    title: 'Academic Excellence',
    desc: 'Consistently ranked top performer in MCA Semesters 1 & 2 with a 9.5 CGPA at Alliance University.'
  },
  {
    icon: '📓',
    title: 'Kaggle Contributor',
    desc: 'Published reproducible ML notebooks earning community upvotes and forks on Kaggle datasets.'
  }
]

export default function EducationSection() {
  return (
    <section
      id="education"
      className="bg-[#0C0C0C] border-t border-white/5 px-6 sm:px-8 md:px-10 py-24 relative overflow-hidden"
    >
      <div className="absolute top-[20%] right-[-10%] w-[500px] h-[500px] rounded-full bg-orange-500/[0.02] blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto z-10 relative">
        <FadeIn delay={0} y={40} className="text-center mb-16 sm:mb-20">
          <span className="text-xs uppercase tracking-widest text-orange-400 font-bold mb-2 block">Academic Background</span>
          <h2
            className="hero-heading font-black uppercase leading-none tracking-tight text-center"
            style={{ fontSize: 'clamp(2.5rem, 8vw, 100px)' }}
          >
            Education
          </h2>
        </FadeIn>

        {/* Education Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {educations.map((edu, i) => (
            <FadeIn key={edu.degree + i} delay={i * 0.1} y={30}>
              <div className="p-6 sm:p-8 rounded-3xl border border-white/5 bg-white/[0.01] hover:border-orange-500/20 transition-all duration-300 h-full flex flex-col justify-between">
                <div>
                  <div className="flex justify-between items-start gap-4 mb-4">
                    <div>
                      <span className="text-[10px] text-gray-500 uppercase tracking-widest font-semibold block">
                        {edu.type}
                      </span>
                      <h3 className="text-gray-100 text-lg sm:text-xl font-bold uppercase tracking-tight mt-1">
                        {edu.degree}
                      </h3>
                      <p className="text-orange-400 text-sm mt-0.5 font-medium">
                        {edu.university} &middot; <span className="text-gray-500 font-normal">{edu.location}</span>
                      </p>
                    </div>
                    <div className="px-3.5 py-1.5 rounded-xl border border-orange-500/25 bg-orange-500/10 text-orange-400 font-extrabold text-xs sm:text-sm">
                      {edu.gpa}
                    </div>
                  </div>
                  <span className="text-[10px] sm:text-xs text-gray-500 font-medium">
                    {edu.period}
                  </span>
                </div>

                <div className="border-t border-white/5 mt-6 pt-4 flex flex-wrap gap-1.5">
                  {edu.courses.map((c) => (
                    <span
                      key={c}
                      className="px-2.5 py-1 rounded bg-white/5 text-[10px] text-gray-400 font-medium"
                    >
                      {c}
                    </span>
                  ))}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* Achievements Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {achievements.map((ach, i) => (
            <FadeIn key={ach.title + i} delay={i * 0.1 + 0.2} y={30}>
              <div className="p-6 rounded-3xl border border-white/5 bg-white/[0.01] hover:border-orange-500/20 transition-all duration-300 flex items-start gap-5">
                <div className="w-12 h-12 rounded-2xl border border-orange-500/20 bg-orange-500/5 flex items-center justify-center text-xl flex-shrink-0">
                  {ach.icon}
                </div>
                <div>
                  <h4 className="text-gray-100 text-sm sm:text-base font-bold uppercase tracking-tight mb-2">
                    {ach.title}
                  </h4>
                  <p className="text-gray-400 text-xs sm:text-sm leading-relaxed font-light">
                    {ach.desc}
                  </p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
