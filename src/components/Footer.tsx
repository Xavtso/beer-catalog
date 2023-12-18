import '../styles/Footer.css';
import beerLogo from '../assets/beer-logo.png'

export default function Footer() {
    return (
      <footer>
        <div className="footer-info">
          <h2>Beer Catalog</h2>
          <p>
            Developed by: <a href="https://github.com/Xavtso">@Xavtso</a>
          </p>
        </div>
        
          <img src={beerLogo} alt='beer-logo' className='footerLogo'/>

        <div className="footer-nav">
          <a href="/">Homepage</a>
          <a href="/contacts">Contacts</a>
          <a href="https://t.me/v_havrona">Contact Developer</a>
        </div>
      </footer>
    );
}
