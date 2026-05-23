import { useRef, useState } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import FadeIn from './FadeIn'

const projects = [
  {
    num: '01',
    category: 'E-Commerce Analytics',
    name: 'Sellmize Platform',
    tags: ['Python', 'Prophet', 'LLaMA 3.1', 'Flask', 'Power BI'],
    desc: 'Featured analytics & forecasting dashboard enabling online marketplace sellers to optimize listings, predict Q4 demand, and manage inventory automatically.',
    github: 'https://github.com/Akbarhusain12'
  },
  {
    num: '02',
    category: 'Fashion AI',
    name: 'FySense AI Visual Search',
    tags: ['TensorFlow', 'ResNet50', 'ChromaDB', 'Gemini', 'Flask'],
    desc: 'Visual search engine plus conversational RAG chatbot allowing aspect-based sentiment analysis and product matching across 40K+ fashion items.',
    github: 'https://github.com/Akbarhusain12/FySense-AI'
  },
  {
    num: '03',
    category: 'Predictive ML',
    name: 'Customer Churn Prediction',
    tags: ['Scikit-learn', 'Random Forest', 'SVC', 'Flask API'],
    desc: 'End-to-end classification system on 7,000+ subscriber records with real-time inference API for pro-active customer retention planning (95% accuracy).',
    github: 'https://github.com/Akbarhusain12/churn-project'
  },
  {
    num: '04',
    category: 'Backend & Automation',
    name: 'FileFlow ETL Pipelines',
    tags: ['Python', 'n8n Workflow', 'ETL', 'API Integration'],
    desc: 'Automated data pipelines processing 400+ daily listings on Amazon and Flipkart, streamlining seller store operations by reducing manual tasks by 30%.',
    github: 'https://github.com/Akbarhusain12'
  },
  {
    num: '05',
    category: 'Real Estate ML',
    name: 'Bangalore House Predictor',
    tags: ['Python', 'Regression', 'Feature Engineering', 'Flask'],
    desc: 'Price forecasting web application utilizing advanced regression models (R² = 0.82) to estimate properties valuation in real-time.',
    github: 'https://github.com/Akbarhusain12/Bangalore_house_prediction'
  }
]

function SellmizeDashboard() {
  const [hoveredBar, setHoveredBar] = useState<number | null>(null)
  
  const forecastData = [
    { day: 'Day 1-5', value: 45, revenue: '₹35,000' },
    { day: 'Day 6-10', value: 65, revenue: '₹48,000' },
    { day: 'Day 11-15', value: 50, revenue: '₹42,000' },
    { day: 'Day 16-20', value: 85, revenue: '₹62,000' },
    { day: 'Day 21-25', value: 70, revenue: '₹55,000' },
    { day: 'Day 26-30', value: 95, revenue: '₹75,000' },
  ]

  return (
    <div className="flex-1 min-h-0 bg-[#070502]/80 border border-orange-500/10 rounded-2xl p-4 sm:p-6 overflow-y-auto max-h-[360px] md:max-h-[420px] scrollbar-thin">
      {/* Dashboard Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
        
        {/* Left Area: Stats and Chart */}
        <div className="flex flex-col gap-4 sm:gap-6">
          {/* KPI Header */}
          <div className="grid grid-cols-3 gap-2">
            <div className="p-3 rounded-xl border border-white/5 bg-white/[0.01]">
              <span className="text-[9px] text-gray-500 uppercase tracking-widest font-semibold block">Revenue</span>
              <span className="text-sm font-black text-orange-400 mt-1 block">₹2,48,500</span>
              <span className="text-[9px] text-emerald-500 font-bold block mt-0.5">▲ 12.4%</span>
            </div>
            <div className="p-3 rounded-xl border border-white/5 bg-white/[0.01]">
              <span className="text-[9px] text-gray-500 uppercase tracking-widest font-semibold block">Orders</span>
              <span className="text-sm font-black text-gray-200 mt-1 block">1,420</span>
              <span className="text-[9px] text-emerald-500 font-bold block mt-0.5">▲ 8.6%</span>
            </div>
            <div className="p-3 rounded-xl border border-white/5 bg-white/[0.01]">
              <span className="text-[9px] text-gray-500 uppercase tracking-widest font-semibold block">Avg AOV</span>
              <span className="text-sm font-black text-gray-200 mt-1 block">₹175</span>
              <span className="text-[9px] text-gray-500 block mt-0.5">Steady</span>
            </div>
          </div>

          {/* Prophet Forecast Chart */}
          <div className="p-4 rounded-xl border border-white/5 bg-white/[0.01] flex flex-col gap-3">
            <div className="flex justify-between items-center">
              <span className="text-[10px] text-gray-400 font-semibold tracking-wide uppercase">30-Day Sales Forecast</span>
              <span className="text-[9px] text-orange-400 font-semibold bg-orange-500/10 px-2 py-0.5 rounded-full border border-orange-500/20">Prophet Engine</span>
            </div>
            
            <div className="flex items-end gap-2 h-24 pt-4 border-b border-white/5 px-2 relative">
              {forecastData.map((d, idx) => (
                <div 
                  key={idx} 
                  className="flex-1 flex flex-col items-center group relative cursor-pointer"
                  onMouseEnter={() => setHoveredBar(idx)}
                  onMouseLeave={() => setHoveredBar(null)}
                >
                  {/* Hover tooltip */}
                  {hoveredBar === idx && (
                    <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-black border border-orange-500/30 px-2 py-0.5 rounded text-[9px] font-bold text-orange-400 shadow-xl z-50 whitespace-nowrap">
                      {d.revenue}
                    </div>
                  )}
                  {/* Bar */}
                  <motion.div 
                    initial={{ height: 0 }}
                    animate={{ height: `${d.value}%` }}
                    transition={{ delay: idx * 0.08, duration: 0.5 }}
                    className={`w-full rounded-t-sm ${hoveredBar === idx ? 'bg-gradient-to-t from-orange-600 to-orange-400' : 'bg-gradient-to-t from-orange-600/40 to-orange-400/20'} transition-all`}
                  />
                  <span className="text-[8px] text-gray-600 mt-1.5 font-medium tracking-wide uppercase">{d.day.split(' ')[1]}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Area: AI Assistant and Inventory Alerts */}
        <div className="flex flex-col gap-4 sm:gap-6">
          {/* AI Assistant Box */}
          <div className="p-4 rounded-xl border border-orange-500/20 bg-orange-500/5 flex flex-col gap-2">
            <div className="flex items-center gap-1.5">
              <span className="text-sm">🤖</span>
              <span className="text-[10px] text-orange-400 font-bold uppercase tracking-wider">AI Recommendation</span>
            </div>
            <p className="text-gray-300 text-xs leading-relaxed italic">
              &quot;Your top SKU is underperforming in Maharashtra. Recommend increasing ad bids by <strong className="text-orange-400 font-bold">12%</strong> for the Q4 festive season based on 30-day Prophet forecasting trends.&quot;
            </p>
          </div>

          {/* Inventory Alerts */}
          <div className="p-4 rounded-xl border border-white/5 bg-white/[0.01] flex flex-col gap-2.5">
            <span className="text-[10px] text-gray-400 font-semibold tracking-wide uppercase block">Inventory Alerts</span>
            <div className="flex flex-col gap-2">
              <div className="flex justify-between items-center p-1.5 rounded bg-white/[0.02] border border-white/5">
                <span className="text-[10px] text-gray-300 font-mono">SKU-A204</span>
                <span className="px-1.5 py-0.5 rounded text-[8px] font-black tracking-widest bg-red-500/10 text-red-500 border border-red-500/20">LOW</span>
              </div>
              <div className="flex justify-between items-center p-1.5 rounded bg-white/[0.02] border border-white/5">
                <span className="text-[10px] text-gray-300 font-mono">SKU-B118</span>
                <span className="px-1.5 py-0.5 rounded text-[8px] font-black tracking-widest bg-emerald-500/10 text-emerald-500 border border-emerald-500/20">OK</span>
              </div>
              <div className="flex justify-between items-center p-1.5 rounded bg-white/[0.02] border border-white/5">
                <span className="text-[10px] text-gray-300 font-mono">SKU-C055</span>
                <span className="px-1.5 py-0.5 rounded text-[8px] font-black tracking-widest bg-amber-500/10 text-amber-500 border border-amber-500/20">RESTOCK</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

function FySenseDashboard() {
  const [activePreset, setActivePreset] = useState<number | null>(null)
  const [searching, setSearching] = useState(false)
  const [results, setResults] = useState<any[] | null>(null)

  const presets = [
    { name: 'Leather Jacket', icon: '🧥' },
    { name: 'Summer Dress', icon: '👗' },
    { name: 'Running Shoes', icon: '👟' }
  ]

  const items = {
    0: [
      { name: 'Slim Fit Leather Biker Jacket', match: '98%', sentiment: 'Highly Positive (94%)', price: '₹4,599' },
      { name: 'Classic Brown Suede Bomber Jacket', match: '91%', sentiment: 'Positive (87%)', price: '₹5,200' },
      { name: 'Faux Leather Winter Coat', match: '84%', sentiment: 'Neutral (72%)', price: '₹3,899' }
    ],
    1: [
      { name: 'Floral Print Maxi Summer Dress', match: '97%', sentiment: 'Highly Positive (91%)', price: '₹1,899' },
      { name: 'Boho V-Neck A-Line Midi Dress', match: '89%', sentiment: 'Positive (82%)', price: '₹2,100' },
      { name: 'Casual Cotton Beach Sundress', match: '81%', sentiment: 'Positive (78%)', price: '₹1,499' }
    ],
    2: [
      { name: 'Ultralight Responsive Running Shoes', match: '96%', sentiment: 'Highly Positive (95%)', price: '₹6,499' },
      { name: 'Dynamic Cushioning Trail Sneakers', match: '90%', sentiment: 'Positive (89%)', price: '₹7,200' },
      { name: 'Breathable Knit Sports Trainers', match: '83%', sentiment: 'Neutral (65%)', price: '₹4,999' }
    ]
  }

  const handlePresetSelect = (idx: number) => {
    setActivePreset(idx)
    setSearching(true)
    setResults(null)
    setTimeout(() => {
      setSearching(false)
      setResults(items[idx as keyof typeof items])
    }, 1200)
  }

  return (
    <div className="flex-1 min-h-0 bg-[#070502]/80 border border-orange-500/10 rounded-2xl p-4 sm:p-5 overflow-y-auto max-h-[360px] md:max-h-[420px] scrollbar-thin flex flex-col gap-4">
      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-white/5 pb-3">
        <span className="text-[10px] text-gray-400 font-semibold tracking-wide uppercase">ResNet50 + ChromaDB Visual Search</span>
        <span className="text-[9px] text-orange-400 font-semibold bg-orange-500/10 px-2 py-0.5 rounded-full border border-orange-500/20">AI Search Engine</span>
      </div>

      <div className="grid grid-cols-3 gap-2">
        {presets.map((preset, idx) => (
          <button
            key={idx}
            onClick={() => handlePresetSelect(idx)}
            className={`p-2 rounded-xl border transition-all duration-200 flex flex-col items-center gap-1 bg-white/[0.01] ${
              activePreset === idx ? 'border-orange-500/50 bg-orange-500/5 text-orange-400 scale-[0.98]' : 'border-white/5 text-gray-400 hover:border-white/10'
            }`}
          >
            <span className="text-xl sm:text-2xl">{preset.icon}</span>
            <span className="text-[8px] sm:text-[9px] font-bold text-center leading-tight whitespace-nowrap">{preset.name}</span>
          </button>
        ))}
      </div>

      <div className="flex-1 border border-white/5 bg-white/[0.01] rounded-xl p-3 min-h-[140px] flex flex-col justify-center relative overflow-hidden">
        {activePreset === null && (
          <div className="text-center text-gray-500 text-[10px] sm:text-xs py-8">
            <span className="text-2xl block mb-2">🔍</span>
            Select a product above to trigger similarity search and Gemini aspect analysis.
          </div>
        )}

        {searching && (
          <div className="flex flex-col items-center gap-3 py-6">
            <div className="w-8 h-8 rounded-full border-2 border-orange-500/20 border-t-orange-500 animate-spin" />
            <div className="text-center text-[9px] font-mono text-gray-400 tracking-wider flex flex-col gap-1">
              <span>[STEP 1] Generating ResNet50 Feature Vector...</span>
              <span className="animate-pulse">[STEP 2] ChromaDB L2 Distance query...</span>
            </div>
            <div className="absolute inset-x-0 h-0.5 bg-orange-500/50 shadow-md shadow-orange-500 top-0 animate-bounce" style={{ animationDuration: '1.2s' }} />
          </div>
        )}

        {results && (
          <div className="flex flex-col gap-2">
            <span className="text-[9px] text-gray-500 font-semibold tracking-wider uppercase">ChromaDB Query Results</span>
            {results.map((res, i) => (
              <div key={i} className="flex items-center justify-between p-2 rounded bg-white/[0.02] border border-white/5 hover:border-orange-500/20 transition-colors">
                <div className="flex flex-col gap-0.5">
                  <span className="text-[10px] sm:text-[11px] font-bold text-gray-200">{res.name}</span>
                  <span className="text-[8px] sm:text-[9px] text-gray-500 flex flex-wrap items-center gap-1 sm:gap-1.5">
                    <span>💬 Sentiment: <strong className="text-gray-400">{res.sentiment}</strong></span>
                    <span className="text-gray-600 hidden sm:inline">•</span>
                    <span>Price: <strong className="text-orange-400">{res.price}</strong></span>
                  </span>
                </div>
                <span className="px-2 py-0.5 rounded text-[9px] font-black font-mono tracking-tighter bg-emerald-500/10 text-emerald-400 border border-emerald-500/25">
                  {res.match} Match
                </span>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

function ChurnDashboard() {
  const [tenure, setTenure] = useState(12)
  const [contract, setContract] = useState('Month-to-month')
  const [techSupport, setTechSupport] = useState(false)
  const [monthlyCharges, setMonthlyCharges] = useState(1500)

  const calculateChurn = () => {
    let score = 0.5
    score -= (tenure / 72) * 0.4
    if (contract === 'One year') score -= 0.2
    if (contract === 'Two year') score -= 0.35
    if (techSupport) score -= 0.15
    score += (monthlyCharges / 10000) * 0.3
    const prob = Math.min(Math.max(score, 0.05), 0.95)
    return Math.round(prob * 100)
  }

  const churnProb = calculateChurn()
  const riskColor = churnProb > 60 ? 'text-red-400 border-red-500/20 bg-red-500/5' : churnProb > 30 ? 'text-amber-400 border-amber-500/20 bg-amber-500/5' : 'text-emerald-400 border-emerald-500/20 bg-emerald-500/5'

  return (
    <div className="flex-1 min-h-0 bg-[#070502]/80 border border-orange-500/10 rounded-2xl p-4 sm:p-5 overflow-y-auto max-h-[360px] md:max-h-[420px] scrollbar-thin flex flex-col gap-4">
      <div className="flex justify-between items-center border-b border-white/5 pb-3">
        <span className="text-[10px] text-gray-400 font-semibold tracking-wide uppercase">Subscriber Retention Model</span>
        <span className="text-[9px] text-orange-400 font-semibold bg-orange-500/10 px-2 py-0.5 rounded-full border border-orange-500/20">Scikit-Learn Classifier</span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
        <div className="flex flex-col gap-3">
          <div className="flex flex-col gap-1">
            <div className="flex justify-between text-[10px] font-semibold text-gray-400">
              <span>Tenure (Loyalty)</span>
              <span className="text-gray-200">{tenure} Months</span>
            </div>
            <input
              type="range"
              min="1"
              max="72"
              value={tenure}
              onChange={(e) => setTenure(Number(e.target.value))}
              className="w-full accent-orange-500 h-1 bg-white/5 rounded-lg appearance-none cursor-pointer"
            />
          </div>

          <div className="flex flex-col gap-1">
            <div className="flex justify-between text-[10px] font-semibold text-gray-400">
              <span>Monthly Bill</span>
              <span className="text-gray-200">₹{monthlyCharges.toLocaleString()}</span>
            </div>
            <input
              type="range"
              min="500"
              max="10000"
              step="100"
              value={monthlyCharges}
              onChange={(e) => setMonthlyCharges(Number(e.target.value))}
              className="w-full accent-orange-500 h-1 bg-white/5 rounded-lg appearance-none cursor-pointer"
            />
          </div>

          <div className="flex justify-between items-center gap-2 mt-1">
            <span className="text-[10px] font-semibold text-gray-400">Contract</span>
            <div className="flex rounded border border-white/5 overflow-hidden">
              {['Month-to-month', 'One year', 'Two year'].map((c) => (
                <button
                  key={c}
                  onClick={() => setContract(c)}
                  className={`px-2 py-0.5 text-[8px] sm:text-[9px] font-bold uppercase transition-all duration-150 ${
                    contract === c ? 'bg-orange-500 text-white' : 'bg-white/[0.02] text-gray-400 hover:text-gray-200'
                  }`}
                >
                  {c.split(' ')[0]}
                </button>
              ))}
            </div>
          </div>

          <div className="flex justify-between items-center mt-1">
            <span className="text-[10px] font-semibold text-gray-400">Add Tech Support</span>
            <button
              onClick={() => setTechSupport(!techSupport)}
              className={`px-2 py-0.5 rounded text-[8px] sm:text-[9px] font-bold border transition-all ${
                techSupport ? 'border-orange-500/40 bg-orange-500/10 text-orange-400' : 'border-white/5 bg-white/[0.01] text-gray-500 hover:text-gray-300'
              }`}
            >
              {techSupport ? 'YES' : 'NO'}
            </button>
          </div>
        </div>

        <div className={`p-3 rounded-xl border flex flex-col items-center justify-center text-center transition-all ${riskColor}`}>
          <span className="text-[9px] font-bold uppercase tracking-widest opacity-60">Churn Risk Score</span>
          <span className="text-2xl sm:text-3xl font-black font-mono tracking-tight my-1">{churnProb}%</span>
          
          <div className="w-full bg-white/5 rounded-full h-1 mb-2 overflow-hidden">
            <div className={`h-full transition-all duration-300 ${churnProb > 60 ? 'bg-red-500' : churnProb > 30 ? 'bg-amber-500' : 'bg-emerald-500'}`} style={{ width: `${churnProb}%` }} />
          </div>

          <p className="text-[9px] font-bold uppercase leading-none">
            {churnProb > 60 ? '🚨 HIGH RISK' : churnProb > 30 ? '⚠️ MODERATE RISK' : '✅ STABLE'}
          </p>
          <p className="text-[8px] text-gray-400 font-light mt-1.5 leading-tight italic max-w-[180px]">
            {churnProb > 60
              ? 'Offer contract upgrade with 15% discount coupon immediately.'
              : churnProb > 30
              ? 'Suggest setting up auto-pay and proactive tech-support checkup.'
              : 'Keep active. Customer is satisfied with current plan.'}
          </p>
        </div>
      </div>
    </div>
  )
}

function FileFlowPipelineDashboard() {
  const [pipelineState, setPipelineState] = useState<'idle' | 'ingesting' | 'transforming' | 'validating' | 'exporting' | 'completed'>('idle')
  const [logs, setLogs] = useState<string[]>([
    'System status: Idle.',
    'Click "Run ETL Pipeline" to begin workflow automation.'
  ])

  const runPipeline = async () => {
    const sleep = (ms: number) => new Promise(resolve => setTimeout(resolve, ms))
    
    setLogs(['[00:00.00] 🚀 Initializing FileFlow n8n pipeline...'])
    setPipelineState('ingesting')
    await sleep(900)
    setLogs(l => [...l, '[00:00.92] 📥 Ingesting Amazon orders CSV dataset (420 records)...'])
    setPipelineState('transforming')
    await sleep(1000)
    setLogs(l => [...l, '[00:01.95] ⚙️ n8n Mapping: Parsing transaction currencies & cleaning headers...'])
    setPipelineState('validating')
    await sleep(900)
    setLogs(l => [...l, '[00:02.85] 🔍 Running integrity validators: 0 anomalies, 420 valid rows.'])
    setPipelineState('exporting')
    await sleep(1000)
    setLogs(l => [...l, '[00:03.88] 💾 Exporting clean tables to PostgreSQL cluster...'])
    setPipelineState('completed')
    await sleep(500)
    setLogs(l => [...l, '[00:04.40] ✅ Pipeline execution complete. Time saved: 2.4 hours manual effort.'])
  }

  const nodes = [
    { name: 'CSV File', state: 'ingesting', icon: '📄' },
    { name: 'n8n Map', state: 'transforming', icon: '⚙️' },
    { name: 'Validate', state: 'validating', icon: '🔍' },
    { name: 'Postgres', state: 'exporting', icon: '💾' }
  ]

  return (
    <div className="flex-1 min-h-0 bg-[#070502]/80 border border-orange-500/10 rounded-2xl p-4 sm:p-5 overflow-y-auto max-h-[360px] md:max-h-[420px] scrollbar-thin flex flex-col gap-4">
      <div className="flex justify-between items-center border-b border-white/5 pb-2">
        <span className="text-[10px] text-gray-400 font-semibold tracking-wide uppercase">ETL Flow Orchestration Monitor</span>
        <button
          onClick={runPipeline}
          disabled={pipelineState !== 'idle' && pipelineState !== 'completed'}
          className={`px-2.5 py-0.5 text-[8px] sm:text-[9px] font-black uppercase rounded tracking-wider border transition-all ${
            pipelineState !== 'idle' && pipelineState !== 'completed'
              ? 'border-gray-500/25 bg-gray-500/10 text-gray-500 cursor-not-allowed'
              : 'border-orange-500/30 bg-orange-500/15 text-orange-400 hover:bg-orange-500/25 hover:border-orange-500/50'
          }`}
        >
          {pipelineState === 'idle' || pipelineState === 'completed' ? 'Run ETL Pipeline' : 'Processing...'}
        </button>
      </div>

      <div className="flex items-center justify-between px-2 py-3 bg-white/[0.01] border border-white/5 rounded-xl">
        {nodes.map((node, idx) => {
          const isActive = pipelineState === node.state
          const isFinished = 
            pipelineState === 'completed' || 
            (node.state === 'ingesting' && pipelineState !== 'ingesting') ||
            (node.state === 'transforming' && pipelineState !== 'ingesting' && pipelineState !== 'transforming') ||
            (node.state === 'validating' && pipelineState === 'exporting')

          return (
            <div key={idx} className="flex-1 flex items-center relative">
              {idx < nodes.length - 1 && (
                <div className={`absolute left-1/2 right-[-50%] h-[1px] top-3.5 -translate-y-1/2 transition-colors duration-500 ${
                  isFinished ? 'bg-orange-500' : 'bg-white/5'
                }`} />
              )}
              <div className="flex flex-col items-center mx-auto z-10">
                <div className={`w-7 h-7 rounded flex items-center justify-center text-xs border transition-all duration-300 ${
                  isActive 
                    ? 'border-orange-500 bg-orange-500/20 shadow-[0_0_8px_rgba(249,115,22,0.3)] scale-110' 
                    : isFinished 
                    ? 'border-orange-500 bg-orange-500/10 text-orange-400' 
                    : 'border-white/5 bg-[#0C0C0C]'
                }`}>
                  {node.icon}
                </div>
                <span className={`text-[7px] font-bold mt-1 uppercase tracking-wide transition-colors ${
                  isActive ? 'text-orange-400' : 'text-gray-500'
                }`}>{node.name.split(' ')[0]}</span>
              </div>
            </div>
          )
        })}
      </div>

      <div className="p-2.5 bg-black border border-white/5 rounded-xl font-mono text-[8px] sm:text-[9px] text-gray-400 h-24 overflow-y-auto flex flex-col gap-1 scrollbar-thin">
        {logs.map((log, idx) => (
          <div key={idx} className={`leading-normal ${log.startsWith('✅') || log.includes('complete') ? 'text-orange-400 font-bold' : log.includes('🚀') ? 'text-orange-300' : ''}`}>
            {log}
          </div>
        ))}
      </div>
    </div>
  )
}

function HousePredictorDashboard() {
  const [area, setArea] = useState(1500)
  const [bhk, setBhk] = useState(3)
  const [bathrooms, setBathrooms] = useState(2)
  const [location, setLocation] = useState('Whitefield')

  const basePrices: Record<string, number> = {
    'Whitefield': 5800,
    'Electronic City': 4100,
    'Indiranagar': 12500,
    'Koramangala': 11000
  }

  const calculateValuation = () => {
    const rate = basePrices[location] || 5000
    let price = area * rate
    price += bhk * 250000
    price += bathrooms * 150000
    const inLakhs = price / 100000
    if (inLakhs >= 100) {
      return `₹ ${(inLakhs / 100).toFixed(2)} Cr`
    } else {
      return `₹ ${inLakhs.toFixed(1)} Lakhs`
    }
  }

  const estVal = calculateValuation()
  const pricePerSqFt = basePrices[location] || 5000

  return (
    <div className="flex-1 min-h-0 bg-[#070502]/80 border border-orange-500/10 rounded-2xl p-4 sm:p-5 overflow-y-auto max-h-[360px] md:max-h-[420px] scrollbar-thin flex flex-col gap-4">
      <div className="flex justify-between items-center border-b border-white/5 pb-3">
        <span className="text-[10px] text-gray-400 font-semibold tracking-wide uppercase">Valuation Simulator</span>
        <span className="text-[9px] text-orange-400 font-semibold bg-orange-500/10 px-2 py-0.5 rounded-full border border-orange-500/20">Regression (R² = 0.82)</span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
        <div className="flex flex-col gap-3">
          <div className="flex flex-col gap-1">
            <div className="flex justify-between text-[10px] font-semibold text-gray-400">
              <span>Super Built-Up Area</span>
              <span className="text-gray-200">{area} Sq Ft</span>
            </div>
            <input
              type="range"
              min="500"
              max="5000"
              step="50"
              value={area}
              onChange={(e) => setArea(Number(e.target.value))}
              className="w-full accent-orange-500 h-1 bg-white/5 rounded-lg appearance-none cursor-pointer"
            />
          </div>

          <div className="flex justify-between items-center">
            <span className="text-[10px] font-semibold text-gray-400">Location</span>
            <select
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="bg-black border border-white/10 rounded px-2 py-0.5 text-[9px] font-bold text-gray-300 focus:outline-none focus:border-orange-500"
            >
              {Object.keys(basePrices).map((loc) => (
                <option key={loc} value={loc}>{loc}</option>
              ))}
            </select>
          </div>

          <div className="flex justify-between items-center">
            <span className="text-[10px] font-semibold text-gray-400">BHK Count</span>
            <div className="flex border border-white/5 rounded overflow-hidden">
              {[1, 2, 3, 4, 5].map((val) => (
                <button
                  key={val}
                  onClick={() => setBhk(val)}
                  className={`w-6 py-0.5 text-[9px] font-bold transition-all ${
                    bhk === val ? 'bg-orange-500 text-white' : 'bg-white/[0.02] text-gray-400 hover:text-gray-200'
                  }`}
                >
                  {val}
                </button>
              ))}
            </div>
          </div>

          <div className="flex justify-between items-center">
            <span className="text-[10px] font-semibold text-gray-400">Bathrooms</span>
            <div className="flex border border-white/5 rounded overflow-hidden">
              {[1, 2, 3, 4].map((val) => (
                <button
                  key={val}
                  onClick={() => setBathrooms(val)}
                  className={`w-7 py-0.5 text-[9px] font-bold transition-all ${
                    bathrooms === val ? 'bg-orange-500 text-white' : 'bg-white/[0.02] text-gray-400 hover:text-gray-200'
                  }`}
                >
                  {val}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="p-3.5 rounded-xl border border-orange-500/20 bg-orange-500/5 flex flex-col items-center justify-center text-center min-h-[120px]">
          <span className="text-[9px] font-bold text-orange-400 uppercase tracking-widest mb-1">Estimated Valuation</span>
          <span className="text-xl sm:text-2xl font-black text-gray-100 tracking-tight">{estVal}</span>
          
          <div className="grid grid-cols-2 divide-x divide-white/5 w-full border-t border-white/5 mt-3 pt-2.5 text-[8px] sm:text-[9px] font-mono text-gray-500">
            <div className="pr-1 text-center">
              <span>RATE/SQFT</span>
              <span className="block font-bold text-gray-300 mt-0.5">₹{pricePerSqFt}</span>
            </div>
            <div className="pl-1 text-center">
              <span>CONFIDENCE</span>
              <span className="block font-bold text-emerald-400 mt-0.5">92%</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function ProjectCard({ project, index }: { project: typeof projects[0]; index: number }) {
  const totalCards = projects.length
  const targetScale = 1 - (totalCards - 1 - index) * 0.02
  const cardRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ['start end', 'start start'],
  })
  const scale = useTransform(scrollYProgress, [0, 1], [1, targetScale])

  return (
    <div ref={cardRef} className="h-[80vh] sticky top-24 md:top-32" style={{ top: `${index * 32}px` }}>
      <motion.div
        style={{ scale }}
        className="rounded-[40px] sm:rounded-[50px] border border-white/10
          bg-[#0F0D0C]/95 backdrop-blur-md p-6 sm:p-8 h-full flex flex-col justify-between shadow-2xl relative"
      >
        <div className="absolute inset-0 rounded-[40px] sm:rounded-[50px] bg-orange-500/[0.01] pointer-events-none" />

        {/* Top Info */}
        <div className="flex flex-wrap items-start justify-between gap-4 mb-4 sm:mb-6">
          <div className="flex items-center gap-4 sm:gap-6">
            <span className="font-black text-orange-500 leading-none text-4xl sm:text-5xl md:text-6xl">
              {project.num}
            </span>
            <div className="flex flex-col gap-1">
              <span className="text-orange-400 text-xs sm:text-sm font-semibold uppercase tracking-widest">
                {project.category}
              </span>
              <h3 className="text-gray-100 text-lg sm:text-2xl font-bold uppercase tracking-tight">
                {project.name}
              </h3>
            </div>
          </div>
          
          <a 
            href={project.github} 
            target="_blank" 
            rel="noopener noreferrer"
            className="px-5 py-2.5 rounded-full border border-orange-500/20 bg-orange-500/10 text-orange-400 text-xs sm:text-sm font-bold tracking-wide hover:bg-orange-500/20 hover:border-orange-500/30 transition-all duration-200"
          >
            GitHub Repo ↗
          </a>
        </div>

        {/* Middle description / tags */}
        <div className="mb-4 sm:mb-6">
          <p className="text-gray-400 font-light text-xs sm:text-sm leading-relaxed mb-3">
            {project.desc}
          </p>
          <div className="flex flex-wrap gap-1.5">
            {project.tags.map(t => (
              <span key={t} className="px-2 py-1 rounded bg-white/5 border border-white/5 text-[10px] text-gray-300 font-medium">
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* Bottom Graphic Content */}
        {project.num === '01' && <SellmizeDashboard />}
        {project.num === '02' && <FySenseDashboard />}
        {project.num === '03' && <ChurnDashboard />}
        {project.num === '04' && <FileFlowPipelineDashboard />}
        {project.num === '05' && <HousePredictorDashboard />}
      </motion.div>
    </div>
  )
}

export default function ProjectsSection() {
  return (
    <section
      id="projects"
      className="bg-[#0C0C0C] border-t border-white/5 rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px]
        -mt-10 sm:-mt-12 md:-mt-14 z-10 relative
        px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32"
    >
      <FadeIn delay={0} y={40} className="text-center mb-16 sm:mb-20">
        <span className="text-xs uppercase tracking-widest text-orange-400 font-bold mb-2 block">Selected Works</span>
        <h2
          className="hero-heading font-black uppercase text-center leading-none tracking-tight"
          style={{ fontSize: 'clamp(2.5rem, 8vw, 100px)' }}
        >
          Projects
        </h2>
      </FadeIn>

      <div className="max-w-4xl mx-auto flex flex-col gap-12">
        {projects.map((project, i) => (
          <ProjectCard key={project.num} project={project} index={i} />
        ))}
      </div>

      <FadeIn delay={0.2} y={30} className="text-center mt-20 md:mt-28">
        <div className="inline-flex flex-col items-center p-6 sm:p-8 rounded-3xl border border-orange-500/25 bg-orange-500/5 max-w-xl">
          <span className="text-2xl mb-2">👨‍💻</span>
          <p className="text-gray-400 text-sm leading-relaxed mb-4">
            More open-source Machine Learning algorithms, automation scripts, and notebooks are hosted on GitHub.
          </p>
          <a
            href="https://github.com/Akbarhusain12?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-2.5 rounded-full bg-gradient-to-r from-orange-500 to-orange-600 text-white text-sm font-semibold tracking-wide shadow-lg shadow-orange-500/20 hover:scale-[1.02] transition-all duration-200"
          >
            Explore Repositories ↗
          </a>
        </div>
      </FadeIn>
    </section>
  )
}
