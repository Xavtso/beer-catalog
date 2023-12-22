import '../styles/Footer.css';
import beerLogo from '../assets/beer-logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Footer() {
    return (
      <footer>
        <div className="footer-info">
          © 2023 Underwood Brwr, Inc. All rights reserved.
        </div>

        <div className="footer-nav">
          <a href="/">Privacy Policy</a>
          <a href="/">Terms of delivery</a>
        </div>
      </footer>
    );
}
