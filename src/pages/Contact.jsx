import { useState } from 'react'
import emailjs from '@emailjs/browser'
import PageHero from '../components/PageHero'
import Reveal from '../components/Reveal'
import './Contact.css'

// ── EmailJS configuration ────────────────────────────────────────────────
// 1. Create a free account at https://www.emailjs.com
// 2. Add an Email Service (e.g. Gmail) -> copy the Service ID
// 3. Create an Email Template with fields: from_name, from_email, phone, subject, message
//    -> copy the Template ID
// 4. Account > General > copy your Public Key
// Paste all three below. Full steps are in DEPLOYMENT.md.
const SERVICE_ID = 'YOUR_SERVICE_ID'
const TEMPLATE_ID = 'YOUR_TEMPLATE_ID'
const PUBLIC_KEY = 'YOUR_PUBLIC_KEY'

const initialForm = { name: '', email: '', phone: '', subject: '', message: '' }

export default function Contact() {
  const [form, setForm] = useState(initialForm)
  const [status, setStatus] = useState('idle') // idle | sending | sent | error

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (SERVICE_ID === 'YOUR_SERVICE_ID') {
      setStatus('not-configured')
      return
    }

    setStatus('sending')
    try {
      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          from_name: form.name,
          from_email: form.email,
          phone: form.phone,
          subject: form.subject,
          message: form.message,
        },
        { publicKey: PUBLIC_KEY }
      )
      setStatus('sent')
      setForm(initialForm)
    } catch (err) {
      console.error(err)
      setStatus('error')
    }
  }

  return (
    <>
      <PageHero
        eyebrow="CONTACT US"
        title="Tell us what you're working on."
        sub="Fill in the details below and it will land straight in our inbox — we'll get back to you shortly."
      />

      <section className="section">
        <div className="container contact-grid">
          <Reveal className="contact-info">
            <h2>Get in touch</h2>
            <p className="body-text">
              Whether it's a casting simulation study, a CAE analysis, or ongoing CAD/CAE support —
              share a few details and the right person on our team will follow up.
            </p>

            <div className="info-block">
              <span className="info-label">Email</span>
              <a href="mailto:info@pppinfosolutions.com">info@pppinfosolutions.com</a>
            </div>
            <div className="info-block">
              <span className="info-label">Phone</span>
              <a href="tel:+910000000000">+91 00000 00000</a>
            </div>
            <div className="info-block">
              <span className="info-label">Location</span>
              <span>India</span>
            </div>
          </Reveal>

          <Reveal as="form" delay={100} className="contact-form" onSubmit={handleSubmit}>
            <div className="form-row">
              <label htmlFor="name">Full name</label>
              <input id="name" name="name" type="text" required value={form.name} onChange={handleChange} placeholder="Your name" />
            </div>

            <div className="form-row-split">
              <div className="form-row">
                <label htmlFor="email">Email</label>
                <input id="email" name="email" type="email" required value={form.email} onChange={handleChange} placeholder="you@company.com" />
              </div>
              <div className="form-row">
                <label htmlFor="phone">Phone</label>
                <input id="phone" name="phone" type="tel" value={form.phone} onChange={handleChange} placeholder="Optional" />
              </div>
            </div>

            <div className="form-row">
              <label htmlFor="subject">Subject</label>
              <input id="subject" name="subject" type="text" required value={form.subject} onChange={handleChange} placeholder="What's this about?" />
            </div>

            <div className="form-row">
              <label htmlFor="message">Message</label>
              <textarea id="message" name="message" rows="5" required value={form.message} onChange={handleChange} placeholder="Tell us a bit about your project..." />
            </div>

            <button type="submit" className="btn btn-primary" disabled={status === 'sending'}>
              {status === 'sending' ? 'Sending…' : 'Send message'}
            </button>

            {status === 'sent' && (
              <p className="form-status success">Thanks — your message has been sent. We'll be in touch soon.</p>
            )}
            {status === 'error' && (
              <p className="form-status error">Something went wrong sending your message. Please try again or email us directly.</p>
            )}
            {status === 'not-configured' && (
              <p className="form-status warn">
                Form isn't connected to email yet — add your EmailJS Service ID, Template ID and
                Public Key in <code>src/pages/Contact.jsx</code> (see DEPLOYMENT.md).
              </p>
            )}
          </Reveal>
        </div>
      </section>
    </>
  )
}
