import HeroSection from './components/HeroSection'
import AboutSection from './components/AboutSection'
import ServicesSection from './components/ServicesSection'
import ExperienceSection from './components/ExperienceSection'
import EducationSection from './components/EducationSection'
import ProjectsSection from './components/ProjectsSection'
import ContactSection from './components/ContactSection'

export default function App() {
  return (
    <div className="bg-[#0C0C0C] font-kanit min-h-screen text-[#D7E2EA]" style={{ overflowX: 'clip' }}>
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <ExperienceSection />
      <EducationSection />
      <ProjectsSection />
      <ContactSection />
    </div>
  )
}
