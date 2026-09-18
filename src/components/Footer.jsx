import { Link } from 'react-router-dom'
import logo from '../assets/logo-mark.png'
import './Footer.css'

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div className="footer-brand">
          <img src={logo} alt="PPP Infosolutions" />
          <p>Engineering solutions for a better tomorrow — casting simulation, CAE software, and CAD/CAE engineering services.</p>
        </div>

        <div className="footer-col">
          <h4>Navigate</h4>
          <Link to="/">Home</Link>
          <Link to="/about">About Us</Link>
          <Link to="/products">Products</Link>
          <Link to="/services">Services</Link>
          <Link to="/contact">Contact Us</Link>
        </div>

        <div className="footer-col">
          <h4>Get in touch</h4>
          <a href="mailto:info@pppinfosolutions.com">info@pppinfosolutions.com</a>
          <a href="tel:+910000000000">+91 00000 00000</a>
          <span className="footer-note">Replace with your real contact details before launch.</span>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="container footer-bottom-inner">
          <span>© {year} PPP Infosolutions. All rights reserved.</span>
          <span className="footer-tag">Casting Simulation · CAE Software · CAD/CAE Services</span>
        </div>
      </div>
    </footer>
  )
}
