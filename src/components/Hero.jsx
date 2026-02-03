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
            Trusted by Over 500 Families
          </motion.span>
          
          <motion.h1 variants={itemVariants}>
            Your Financial Future Deserves More Than Guesswork
          </motion.h1>
          
          <motion.p variants={itemVariants} className="hero-subheadline">
            Stop feeling overwhelmed about retirement, investments, and your financial future. Get a personalized strategy designed around your goals—with clarity, confidence, and zero pressure.
          </motion.p>
          
          <motion.button 
            variants={itemVariants}
            onClick={onCTAClick}
            className="hero-cta"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            Get Your Free Financial Assessment →
          </motion.button>
          
          <motion.div variants={itemVariants} className="trust-indicators">
            <div className="trust-item">
              <strong>15+</strong> Years Experience
            </div>
            <div className="trust-item">
              <strong>CFP®</strong> Certified
            </div>
            <div className="trust-item">
              <strong>Fiduciary</strong> Standard
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
