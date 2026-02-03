import { motion } from 'framer-motion'
import './Hero.css'

export default function Hero({ onCTAClick }) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' }
    }
  }

  return (
    <section className="hero">
      <div className="hero-grid"></div>
      <div className="hero-container">
        <motion.div 
          className="hero-content"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.span variants={itemVariants} className="hero-badge">
            Trust by Hundreds of Families Nationwide
          </motion.span>
          
          <motion.h1 variants={itemVariants}>
            YOUR GUIDE TO CREATE FINANCIAL SHIELD AGAINST HEALTH EMERGENCIES
          </motion.h1>
          
          <motion.p variants={itemVariants} className="hero-subheadline">
            Stop feeling overwhelmed about medical bills, hospital access, and health coverage. 
            Get a personalized health protection plan designed around your needs with clarity, confidence, and zero pressure.
          </motion.p>
          
          <motion.button 
            variants={itemVariants}
            onClick={onCTAClick}
            className="hero-cta"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            Get Your Free Health Protection Assessment →
          </motion.button>
          
          <motion.div variants={itemVariants} className="trust-indicators">
            <div className="trust-item">
              <strong>4+</strong> Years Experience
            </div>
            <div className="trust-item">
              <strong>Licensed Health & Life Insurance Advisor</strong>
            </div>
            <div className="trust-item">
              <strong>Client-First</strong> Protection Approach
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
