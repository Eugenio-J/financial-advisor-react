import { motion } from 'framer-motion'
import { useInView } from './hooks/useInView'
import './FinalCTA.css'

const guarantees = [
  'No Obligation',
  '100% Free Consultation',
  'Personalized Strategy'
]

export default function FinalCTA({ onCTAClick }) {
  const [ref, isInView] = useInView({ threshold: 0.1 })

  return (
    <section className="final-cta-section" ref={ref}>
      <div className="container">
        <motion.div 
          className="final-cta-box"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          <h2>You Deserve Financial Peace of Mind</h2>
          <p>Don't leave your financial future to chance. Get expert guidance that puts your interests first and gives you confidence in every decision.</p>
          
          <div className="guarantee-items">
            {guarantees.map((item, index) => (
              <div key={index} className="guarantee-item">
                {item}
              </div>
            ))}
          </div>

          <motion.button 
            onClick={onCTAClick}
            className="final-cta-btn"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            Schedule Your Free Consultation Now
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}
