import { motion } from 'framer-motion'
import { useInView } from './hooks/useInView'
import './ProblemSection.css'

const problems = [
  {
    icon: '📊',
    title: 'No Clear Coverage',
    description: "You may already have a health card or insurance, but without understanding coverage limits, exclusions, and hospital access, you’re not sure if you’re truly protected when illness strikes."
  },
  {
    icon: '⚠️',
    title: 'Costly Medical Bills',
    description: 'Unexpected hospitalizations, procedures, and diagnostics can quietly drain your savings especially when your plan doesn’t cover what you thought it would.'
  },  
  {
    icon: '😰',
    title: 'Overwhelming Health Options',
    description: "Between HMOs, health cards, riders, and insurance plans, choosing the right coverage feels confusing especially when every provider claims to be “the best.”"
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
          <h2>Health Uncertainty Shouldn’t Cost You Your Savings</h2>
          <p>You’re trying to stay healthy but navigating medical costs, coverage limits, and hospital access feels like guessing without a guide. You deserve better protection.</p>
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
          <p>You don’t need more plans you need clarity.
Our proven health protection process helps individuals and families choose the right coverage, avoid coverage gaps, manage medical risks, and protect their savings with confidence. We simplify your options and create a personalized health protection roadmap that actually works before you need it most. Because health emergencies don’t give warnings but preparation makes all the difference.</p>
        </motion.div>
      </div>
    </section>
  )
}
