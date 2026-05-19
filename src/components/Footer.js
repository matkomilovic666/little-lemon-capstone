import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import {
  faFacebookF,
  faInstagram,
  faXTwitter
} from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer className="footer-section">

      <div className="footer-content">

        <div className="footer-brand">
          <h2>Little Lemon</h2>

          <p>
            Mediterranean flavors, warm hospitality,
            and unforgettable dining experiences in
            the heart of Chicago.
          </p>
        </div>

        <address className="footer-contact">
          <h3>Contact</h3>

          <p>+24500-03</p>
          <p>contactus@littlelemon.com</p>
          <p>Chicago, IL</p>
        </address>

        <div className="footer-social">
          <h3>Follow Us</h3>

          <nav aria-label="Social media links">
            <div className="social-icons">

            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Little Lemon on Facebook"
            >
              <FontAwesomeIcon icon={faFacebookF} aria-hidden="true" />
            </a>

            <a
              href="https://x.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Little Lemon on X"
            >
              <FontAwesomeIcon icon={faXTwitter} aria-hidden="true" />
            </a>

            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Little Lemon on Instagram"
            >
              <FontAwesomeIcon icon={faInstagram} aria-hidden="true" />
            </a>

            </div>
          </nav>
        </div>

      </div>

      <div className="footer-bottom">
        © 2026 Little Lemon — All rights reserved
      </div>

    </footer>
  );
};

export default Footer;