import { motion } from 'framer-motion'
import { useInView } from './hooks/useInView'
import './HowItWorks.css'

const steps = [
  {
    number: 1,
    title: 'Share Your Health Needs',
    description: 'Complete a short questionnaire so we understand your current health coverage, medical concerns, budget, and what level of protection you want for yourself or your family.'
  },
  {
    number: 2,
    title: 'Personalized Health Strategy',
    description: 'We review your situation and design a customized health protection plan matching you with the right HMO, health card, or insurance coverage based on benefits, limits, and hospital access.'
  },
  {
    number: 3,
    title: 'Free Health Consultation',
    description: 'Meet with us to walk through your options, clarify benefits and exclusions, and decide if the plan makes sense for you-no obligation, no pressure.'
  }
]

export default function HowItWorks() {
  const [ref, isInView] = useInView({ threshold: 0.1 })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
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
    <section className="how-it-works" ref={ref}>
      <div className="container">
        <div className="section-header">
          <span className="section-label">Simple Process</span>
          <h2>Three Steps to Health Protection Clarity</h2>
          <p>Getting started is simple, no medical jargon overload, no pressure, just a clear path to proper health coverage.</p>
        </div>

        <motion.div 
          className="steps-grid"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {steps.map((step) => (
            <motion.div 
              key={step.number}
              className="step-card"
              variants={itemVariants}
            >
              <div className="step-number">{step.number}</div>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
