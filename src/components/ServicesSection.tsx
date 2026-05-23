import FadeIn from './FadeIn'

const skillCategories = [
  {
    icon: '🤖',
    title: 'Machine Learning',
    skills: ['Scikit-learn', 'TensorFlow', 'Keras', 'CNNs', 'ResNet50', 'Classification', 'Clustering', 'ANN']
  },
  {
    icon: '🔧',
    title: 'Backend Dev',
    skills: ['Python', 'Flask', 'REST APIs', 'n8n', 'ETL', 'PostgreSQL', 'MongoDB', 'MySQL']
  },
  {
    icon: '🧬',
    title: 'AI & NLP',
    skills: ['LLMs', 'Groq API', 'LangChain', 'ChromaDB', 'RAG', 'spaCy', 'NLTK', 'Gemini']
  },
  {
    icon: '📊',
    title: 'Data Engineering',
    skills: ['Pandas', 'NumPy', 'Prophet', 'Matplotlib', 'Seaborn', 'Plotly', 'Power BI', 'SQL']
  },
  {
    icon: '🛍️',
    title: 'E-Commerce & Retail AI',
    skills: ['Recommendation Systems', 'Sentiment Analysis', 'Visual Search', 'Customer Analytics', 'Churn Prediction', 'Amazon Seller Ops', 'Inventory Forecasting', 'Flipkart Marketplace']
  },
  {
    icon: '☁️',
    title: 'Tools & Cloud',
    skills: ['Git / GitHub', 'Heroku', 'Jupyter', 'VS Code', 'Google Colab', 'R', 'Advanced Excel', 'Tailwind CSS']
  }
]

export default function ServicesSection() {
  return (
    <section
      id="skills"
      className="bg-[#0C0C0C] border-t border-white/5 px-6 sm:px-8 md:px-10 py-24 relative overflow-hidden"
    >
      {/* Background radial glow */}
      <div className="absolute top-[20%] right-[-10%] w-[400px] h-[400px] rounded-full bg-orange-500/5 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto z-10 relative">
        <FadeIn delay={0} y={40} className="text-center mb-16 sm:mb-20">
          <span className="text-xs uppercase tracking-widest text-orange-400 font-bold mb-2 block">Technical Expertise</span>
          <h2
            className="hero-heading font-black uppercase leading-none tracking-tight text-center"
            style={{ fontSize: 'clamp(2.5rem, 8vw, 100px)' }}
          >
            Skills &amp; Tech
          </h2>
          <p className="text-gray-400 font-light mt-4 max-w-xl mx-auto text-base sm:text-lg">
            End-to-end AI product capabilities — from raw data to deployed, revenue-generating systems.
          </p>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, i) => (
            <FadeIn key={category.title} delay={i * 0.08} y={30}>
              <div className="h-full p-6 rounded-3xl border border-white/5 bg-white/[0.01] hover:border-orange-500/30 hover:bg-orange-500/[0.01] transition-all duration-300 group flex flex-col justify-between">
                <div>
                  <div className="w-12 h-12 rounded-2xl border border-orange-500/25 bg-orange-500/10 flex items-center justify-center text-xl mb-5 group-hover:scale-105 transition-transform duration-200">
                    {category.icon}
                  </div>
                  <h3 className="text-gray-100 text-lg sm:text-xl font-bold uppercase tracking-tight mb-4">
                    {category.title}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-2 mt-4">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1.5 rounded-lg border border-white/5 bg-white/[0.02] text-xs text-gray-400 font-medium hover:border-orange-500/30 hover:text-orange-400 hover:bg-orange-500/5 transition-all duration-200 cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
