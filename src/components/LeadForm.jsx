import { useState } from 'react'
import { motion } from 'framer-motion'
import BookingModal from './BookingModal'
import './LeadForm.css'


export default function LeadForm({ formSubmitted, setFormSubmitted }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    goal: '',
    message: ''
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const [showBooking, setShowBooking] = useState(false)

  const handleSubmit = (e) => {
  e.preventDefault()
  
  // Show booking modal
  setShowBooking(true)
  
  // Optional: Send lead data to your CRM here
  console.log('Lead data:', formData)
}

  return (
    <section id="contact" className="lead-form-section">
      <div className="container">
        <div className="form-container">
          <div className="form-header">
            <h2>Start Your Journey to Financial Clarity</h2>
            <p>Take the first step today—completely free, no strings attached.</p>
          </div>

          <motion.form 
            className="lead-form" 
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="form-group">
              <label htmlFor="name">Full Name *</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="John Smith"
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email Address *</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="john@example.com"
              />
            </div>

            <div className="form-group">
              <label htmlFor="phone">Phone Number *</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                placeholder="(555) 123-4567"
              />
            </div>

            <div className="form-group">
              <label htmlFor="goal">What's Your Primary Financial Goal? *</label>
              <select
                id="goal"
                name="goal"
                value={formData.goal}
                onChange={handleChange}
                required
              >
                <option value="">Select an option...</option>
                <option value="retirement">Planning for Retirement</option>
                <option value="investment">Growing My Investments</option>
                <option value="tax">Minimizing Taxes</option>
                <option value="protection">Protecting My Family</option>
                <option value="comprehensive">Comprehensive Financial Plan</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="message">Tell Us More About Your Situation (Optional)</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Share any specific concerns or questions you have..."
              />
            </div>

            <button type="submit" className="submit-btn">
              Schedule Your Free Consultation
            </button>

            {formSubmitted && (
              <motion.div 
                className="success-message"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <strong>Thank you!</strong> We've received your information and will contact you within 24 hours to schedule your free consultation.
              </motion.div>
            )}

            <p className="form-disclaimer">
              By submitting this form, you agree to be contacted about our financial advisory services. We respect your privacy and will never share your information. No purchase necessary.
            </p>
          </motion.form>
        </div>
      </div>
      <BookingModal 
      isOpen={showBooking}
      onClose={() => setShowBooking(false)}
    />
    </section>

    
  )

  
}
