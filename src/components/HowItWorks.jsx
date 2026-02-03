import { motion } from 'framer-motion'
import { useInView } from './hooks/useInView'
import './HowItWorks.css'

const steps = [
  {
    number: 1,
    title: 'Share Your Goals',
    description: 'Complete our brief questionnaire so we understand your current situation, priorities, and what you want to achieve with your finances.'
  },
  {
    number: 2,
    title: 'Personalized Strategy',
    description: 'We analyze your financial picture and create a customized roadmap addressing your retirement, investments, taxes, and insurance needs.'
  },
  {
    number: 3,
    title: 'Free Consultation',
    description: 'Meet with us to review your strategy, ask questions, and decide if working together makes sense—with absolutely no obligation.'
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
          <h2>Three Steps to Financial Clarity</h2>
          <p>Getting started is straightforward—no complicated jargon, no pressure, just a clear path forward.</p>
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
