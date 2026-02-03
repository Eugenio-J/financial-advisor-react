import { motion } from 'framer-motion'
import { useInView } from './hooks/useInView'
import './ProblemSection.css'

const problems = [
  {
    icon: '📊',
    title: 'No Clear Strategy',
    description: "You're saving and investing, but without a cohesive plan, you're not sure if you're on track for retirement or if your portfolio actually matches your risk tolerance."
  },
  {
    icon: '⚠️',
    title: 'Costly Mistakes',
    description: 'High fees, poor tax planning, and reactive decisions can quietly erode thousands from your wealth over time—without you even realizing it.'
  },
  {
    icon: '😰',
    title: 'Overwhelming Options',
    description: "Between 401(k)s, IRAs, insurance policies, and conflicting advice, making confident decisions feels impossible when you're juggling everything alone."
  }
]

export default function ProblemSection() {
  const [ref, isInView] = useInView({ threshold: 0.1 })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  }

  return (
    <section className="problem-section" ref={ref}>
      <div className="container">
        <div className="section-header">
          <span className="section-label">The Challenge</span>
          <h2>Financial Confusion Shouldn't Cost You Your Future</h2>
          <p>You're doing well—but managing it all alone feels like navigating without a map. You deserve better.</p>
        </div>

        <motion.div 
          className="problem-grid"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {problems.map((problem, index) => (
            <motion.div 
              key={index}
              className="problem-card"
              variants={itemVariants}
            >
              <div className="problem-icon">{problem.icon}</div>
              <h3>{problem.title}</h3>
              <p>{problem.description}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          className="solution-box"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          <h3>There's a Better Way Forward</h3>
          <p>You don't need complexity—you need clarity. Our proven process helps professionals like you build wealth strategically, minimize taxes legally, protect what matters most, and retire confidently. We cut through the noise to create a personalized roadmap that actually works for your life.</p>
        </motion.div>
      </div>
    </section>
  )
}
