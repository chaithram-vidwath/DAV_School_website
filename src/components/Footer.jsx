const Footer = ({ onNavigate }) => {
  return (
    <footer className="footer-stepped">
      <div className="footer-stepped__container">
        {/* Step 1: Navigation */}
        <nav className="footer-step footer-step--nav">
          <button onClick={() => onNavigate('home')}>Home</button>
          <button onClick={() => onNavigate('academics')}>Academics</button>
          <button onClick={() => onNavigate('admissions')}>Admissions</button>
          <button onClick={() => onNavigate('facilities')}>Infrastructure</button>
          <button onClick={() => onNavigate('gallery')}>Gallery</button>
          <button onClick={() => onNavigate('documents')}>Mandatory Disclosure</button>
          {/* <button onClick={() => onNavigate('faculty-staff')}>Faculty</button> */}
          <button onClick={() => onNavigate('about-us')}>About Us</button>
          <button onClick={() => onNavigate('contact-us')}>Contact Us</button>
        </nav>

        {/* Step 2: Address & Contact */}
        <div className="footer-step footer-step--info">
          <p># 25/D, 3rd Stage, Industrial Suburb, Mysuru</p>
          <span className="pipe">|</span>
          <a href="tel:+918212488429">📞 +91 821 2488429</a>
          <span className="pipe">|</span>
          <a href="mailto:info@davpublicschoolmysuru.ac.in">✉️ info@davpublicschoolmysuru.ac.in</a>
        </div>

        {/* Step 3: Copyright */}
        <div className="footer-step footer-step--copyright">
          <p>&copy; {new Date().getFullYear()} DAV Public School. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
