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

        <div className="footer-contact">
          <h3>Contact</h3>

          <p>+24500-03</p>
          <p>contactus@littlelemon.com</p>
          <p>Chicago, IL</p>
        </div>

        <div className="footer-social">
          <h3>Follow Us</h3>

          <div className="social-icons">

            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faFacebookF} />
            </a>

            <a
              href="https://x.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faXTwitter} />
            </a>

            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faInstagram} />
            </a>

          </div>
        </div>

      </div>

      <div className="footer-bottom">
        © 2026 Little Lemon — All rights reserved
      </div>

    </footer>
  );
};

export default Footer;