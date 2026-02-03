import { motion } from 'framer-motion'
import { useInView } from './hooks/useInView'
import './TrustSection.css'

const credentials = [
  { icon: '🎓', title: 'CFP® Certified', description: 'Highest professional standard in financial planning' },
  { icon: '⚖️', title: 'Fiduciary Commitment', description: "We're legally obligated to act in your best interest" },
  { icon: '📈', title: '15+ Years Experience', description: 'Helping families navigate markets, retirement, and wealth' },
  { icon: '🤝', title: '500+ Clients Served', description: 'Professionals and families who trust us with their future' }
]

const testimonials = [
  {
    text: 'Working with this team gave us the confidence we needed to retire early. They showed us exactly where we stood and helped us make decisions we feel great about.',
    author: 'Michael R.',
    role: 'Retired Engineer, Age 58'
  },
  {
    text: 'I finally understand my investments and have a plan that actually makes sense. No more sleepless nights wondering if I\'m doing the right thing.',
    author: 'Jennifer L.',
    role: 'Healthcare Executive'
  },
  {
    text: 'They found tax savings I didn\'t even know existed and restructured my portfolio to match my risk tolerance. The free consultation was worth every minute.',
    author: 'David K.',
    role: 'Small Business Owner'
  }
]

export default function TrustSection() {
  const [ref, isInView] = useInView({ threshold: 0.1 })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
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
    <section className="trust-section" ref={ref}>
      <div className="container">
        <div className="section-header">
          <span className="section-label">Why Choose Us</span>
          <h2>Built on Expertise, Trust & Results</h2>
        </div>

        <motion.div 
          className="credentials-grid"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {credentials.map((cred, index) => (
            <motion.div 
              key={index}
              className="credential-card"
              variants={itemVariants}
            >
              <div className="icon">{cred.icon}</div>
              <h4>{cred.title}</h4>
              <p>{cred.description}</p>
            </motion.div>
          ))}
        </motion.div>

        <div className="section-header" style={{ marginTop: '4rem' }}>
          <h2>What Our Clients Say</h2>
        </div>

        <motion.div 
          className="testimonials-grid"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {testimonials.map((testimonial, index) => (
            <motion.div 
              key={index}
              className="testimonial-card"
              variants={itemVariants}
            >
              <div className="quote-mark">"</div>
              <p className="testimonial-text">{testimonial.text}</p>
              <div className="testimonial-author">{testimonial.author}</div>
              <div className="testimonial-role">{testimonial.role}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
