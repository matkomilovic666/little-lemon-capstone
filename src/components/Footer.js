import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    return (
        <footer className="footer-section">
            <div className="footer-column">
                <h3>Contact Us</h3>
                <p>Phone: +24500-03</p>
                <p>Email: contactus@littlelemon.com</p>
                <p>Address: 12345 North Star, Santiago, Chile</p>
            </div>
            <div className="footer-column">
                <ul className="social-media-links">
                    <li>
                        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                            Facebook
                            <FontAwesomeIcon icon={faFacebookF} className="icon" />
                        </a>
                    </li>
                    <li>
                        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                            Twitter
                            <FontAwesomeIcon icon={faTwitter} className="icon" />
                        </a>
                    </li>
                    <li>
                        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                            Instagram
                            <FontAwesomeIcon icon={faInstagram} className="icon" />
                        </a>
                    </li>
                </ul>
            </div>
        </footer>
    );
}

export default Footer;