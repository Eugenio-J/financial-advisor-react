import { useEffect } from 'react'
import './BookingModal.css'

export default function BookingModal({ isOpen, onClose }) {
  useEffect(() => {
    if (!window.Calendly) {
      const script = document.createElement('script')
      script.src = 'https://assets.calendly.com/assets/external/widget.js'
      script.async = true
      document.body.appendChild(script)
    }
  }, [])

  useEffect(() => {
    if (isOpen && window.Calendly) {
      window.Calendly.initInlineWidget({
        url: 'https://calendly.com/jerichoeugenio2/30min', // ← Replace with YOUR link
        parentElement: document.getElementById('calendly-embed'),
        prefill: {},
        utm: {}
      })
    }
  }, [isOpen])

  if (!isOpen) return null

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>×</button>
        <div className="modal-header">
          <h2>Schedule Your Free Consultation</h2>
          <p>Choose a time that works best for you</p>
        </div>
        <div id="calendly-embed" className="calendly-inline-widget" />
      </div>
    </div>
  )
}