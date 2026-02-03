import './Footer.css'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer>
      <div className="footer-content container">
        <p className="footer-disclaimer">
          <strong>Investment Disclaimer:</strong> Advisory services offered through Wealth & Clarity Advisory. This information is educational in nature and should not be construed as specific investment advice. Past performance does not guarantee future results. All investments carry risk, including potential loss of principal. Please consult with a qualified financial advisor before making investment decisions.
        </p>
        
        <div className="footer-links">
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Service</a>
          <a href="#">Form ADV</a>
          <a href="#">Contact Us</a>
        </div>

        <p className="copyright">
          © {currentYear} Wealth & Clarity Advisory. All rights reserved. | CFP®, CERTIFIED FINANCIAL PLANNER™ are certification marks owned by the Certified Financial Planner Board of Standards Inc.
        </p>
      </div>
    </footer>
  )
}
