import { useScrollReveal } from '../hooks/useScrollReveal'

export default function ContactPage() {
    useScrollReveal()

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
                    <h2>We’ll get back to you soon</h2>
                    <p>
                        Fill out the form below and our admissions or support team
                        will contact you shortly.
                    </p>
                </div>

                <form className="contact-form">
                    <div className="contact-form__group">
                        <label htmlFor="name">Full Name</label>
                        <input
                            type="text"
                            id="name"
                            placeholder="Enter your name"
                        />
                    </div>

                    <div className="contact-form__group">
                        <label htmlFor="email">Email Address</label>
                        <input
                            type="email"
                            id="email"
                            placeholder="Enter your email"
                        />
                    </div>

                    <div className="contact-form__group">
                        <label htmlFor="phone">Phone Number</label>
                        <input
                            type="tel"
                            id="phone"
                            placeholder="Enter your phone number"
                        />
                    </div>

                    <div className="contact-form__group">
                        <label htmlFor="message">Message</label>
                        <textarea
                            id="message"
                            rows="5"
                            placeholder="Write your message"
                        />
                    </div>

                    <button className="button" type="submit">
                        Send Message
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