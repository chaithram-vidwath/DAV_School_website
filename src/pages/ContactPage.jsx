import { useState } from 'react'
import { useScrollReveal } from '../hooks/useScrollReveal'

const CONTACT_EMAIL = "dav_mysore@rediffmail.com";

export default function ContactPage() {
    useScrollReveal()

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: ''
    })
    const [submitStatus, setSubmitStatus] = useState('idle') // idle | sending | sent | error

    const handleChange = (e) => {
        setFormData(prev => ({ ...prev, [e.target.id]: e.target.value }))
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        if (!formData.name || !formData.email || !formData.message || !formData.phone) {
            alert("Please fill in your name, email, phone number and message.")
            return
        }

        setSubmitStatus('sending')

        try {
            // Create a NEW template in EmailJS for contact form
            // Go to EmailJS > Email Templates > Create New Template
            // Set "To Email" to {{to_email}}
            // Set Subject to: New Contact Enquiry - {{from_name}}
            // Paste this HTML in the body (click <> Source Code button):
            //
            // <div style="font-family: sans-serif; padding: 20px;">
            //   <h2>New Contact Form Enquiry</h2>
            //   <table border="1" cellpadding="10" cellspacing="0" style="border-collapse: collapse; width: 100%; max-width: 600px;">
            //     <tr><td style="background: #f4f4f4;"><strong>Name</strong></td><td>{{from_name}}</td></tr>
            //     <tr><td style="background: #f4f4f4;"><strong>Email</strong></td><td>{{reply_to}}</td></tr>
            //     <tr><td style="background: #f4f4f4;"><strong>Phone</strong></td><td>{{phone}}</td></tr>
            //     <tr><td style="background: #f4f4f4;"><strong>Message</strong></td><td>{{message}}</td></tr>
            //   </table>
            // </div>

            const emailjsData = {
                service_id: "service_1gnm9xa",
                template_id: "template_18cm46h", // TODO: Create a separate contact template and replace this ID
                user_id: "GyzI7XDNws70aIaZM",
                template_params: {
                    to_email: CONTACT_EMAIL,
                    from_name: formData.name,
                    reply_to: formData.email,
                    phone: formData.phone || "Not provided",
                    message: formData.message,
                    // Fill in remaining template vars with contact form data
                    student_name: formData.name,

                    contact_number: formData.phone || "Not provided",
                    parent_email: formData.email,
                }
            }

            const response = await fetch("https://api.emailjs.com/api/v1.0/email/send", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(emailjsData)
            })

            if (response.ok) {
                setSubmitStatus('sent')
                setFormData({ name: '', email: '', phone: '', message: '' })
            } else {
                const text = await response.text()
                throw new Error(`EmailJS Error: ${text}`)
            }
        } catch (err) {
            setSubmitStatus('error')
            console.error("Contact form error:", err)
            alert("Failed to send message: " + err.message)
        }
    }

    return (
        <main className="contact-page">
            {/* Hero Section */}
            <section className="contact-hero">
                <div className="contact-hero__overlay" />
                <div className="contact-hero__content">
                    <p className="eyebrow eyebrow--light">Get in touch</p>
                    <h1>Contact Us</h1>
                    <p>
                        We would love to hear from you. Reach out to DAV Public School
                        for admissions, campus visits, or any general enquiries.
                    </p>
                </div>
            </section>

            {/* Contact Information */}
            <section className="contact-info">
                <div className="section-heading">
                    <p className="eyebrow">Our information</p>
                    <h2>How to reach us</h2>
                </div>

                <div className="contact-info__grid">
                    <article className="contact-card">
                        <span className="contact-card__icon">📍</span>
                        <h3>Address</h3>
                        <p>
                            # 25/D, 3rd Stage, Industrial Suburb, Mysuru
                        </p>
                    </article>

                    <article className="contact-card">
                        <span className="contact-card__icon">📞</span>
                        <h3>Phone</h3>
                        <p><a href="tel:+918212488429" className="contact-card__link">+91 821 2488429</a></p>
                    </article>

                    <article className="contact-card">
                        <span className="contact-card__icon">✉️</span>
                        <h3>Email</h3>
                        <p><a href="mailto:info@davpublicschoolmysuru.ac.in" className="contact-card__link">info@davpublicschoolmysuru.ac.in</a></p>
                    </article>

                    <article className="contact-card">
                        <span className="contact-card__icon">🕒</span>
                        <h3>School Hours</h3>
                        <p>9.00 AM - 3.00 PM</p>
                    </article>
                </div>
            </section>

            {/* Map Section */}
            <section className="contact-map">
                <div className="section-heading">
                    <p className="eyebrow">Find us on map</p>
                    <h2>Our Campus Location</h2>
                </div>
                <div className="map-container">
                    <iframe
                        title="DAV Public School Mysuru Location"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3898.3516567229567!2d76.64440617505342!3d12.288214187974514!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bb88add92036c0d%3A0xe54e6022e395e54d!2sDayananda%20Arya%20Vidya%20Public%20School!5e0!3m2!1sen!2sin!4v1715582725678!5m2!1sen!2sin"
                        width="100%"
                        height="450"
                        style={{ border: 0 }}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                </div>
            </section>


            {/* Contact Form */}
            <section className="contact-form-section">
                <div className="contact-form-section__copy">
                    <p className="eyebrow">Send a message</p>
                    <h2>Got Questions?</h2>
                    <p>
                        Fill out the form and we'll contact you soon.
                    </p>
                </div>

                <form className="contact-form" onSubmit={handleSubmit}>
                    {submitStatus === 'sent' && (
                        <div style={{
                            background: '#e6f9e8',
                            color: '#1a7a2e',
                            padding: '1rem 1.5rem',
                            borderRadius: '12px',
                            fontWeight: 600,
                            border: '1px solid #b6e8bf'
                        }}>
                            ✅ Your message has been sent successfully! We will get back to you soon.
                        </div>
                    )}

                    <div className="contact-form__group">
                        <label htmlFor="name">Full Name</label>
                        <input
                            type="text"
                            id="name"
                            placeholder="Enter your name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="contact-form__group">
                        <label htmlFor="email">Email Address</label>
                        <input
                            type="email"
                            id="email"
                            placeholder="Enter your email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="contact-form__group">
                        <label htmlFor="phone">Phone Number</label>
                        <input
                            type="tel"
                            id="phone"
                            placeholder="Enter your phone number"
                            value={formData.phone}
                            onChange={(e) => {
                                const onlyNums = e.target.value.replace(/[^0-9]/g, '');
                                setFormData(prev => ({ ...prev, phone: onlyNums }));
                            }}
                            maxLength="10"
                            minLength="10"
                            pattern="[0-9]{10}"
                            title="Please enter exactly 10 digits"
                            required
                        />
                    </div>

                    <div className="contact-form__group">
                        <label htmlFor="message">Message</label>
                        <textarea
                            id="message"
                            rows="5"
                            placeholder="Write your message"
                            value={formData.message}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <button
                        className="button"
                        type="submit"
                        disabled={submitStatus === 'sending'}
                    >
                        {submitStatus === 'sending' ? '⏳ Sending...' : 'Send Message'}
                    </button>
                </form>
            </section>

            {/* CTA Section */}
            <section className="contact-cta">
                <div>
                    <p className="eyebrow eyebrow--light">Visit our campus</p>
                    <h2>Schedule a campus tour today</h2>
                </div>

                <div className="contact-cta__actions">
                    <button className="button contact-cta__ghost" type="button">
                        Download Brochure
                    </button>
                </div>
            </section>
        </main>
    )
}