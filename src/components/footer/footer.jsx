import { Link } from 'react-router-dom'
import { phoneIcon, mailIcon } from '../../assets/icon'
import './footer.scss'

function Footer() {
  return (
    <footer>
      <div className="footer-top">
        <div className="footer-nav">
          <ul className="footer-nav-list">
            <li className="nav-list-elmt">
              <Link to={'/'}>HOME</Link>
            </li>
            <li className="nav-list-elmt">
              <Link to={'/about'}>A PROPOS</Link>
            </li>
            <li className="nav-list-elmt">
              <Link to={'/map'}>CARTE</Link>
            </li>
            <li className="nav-list-elmt">
              <Link to={'/conservation'}>CONSERVATION</Link>
            </li>
            <li className="nav-list-elmt">
              <Link to={'/contact'}>CONTACT</Link>
            </li>
          </ul>
          <ul className="footer-nav-list">
            <li className="nav-list-elmt">
              <Link to={'/place-to-visit'}>A VISITER</Link>
            </li>
            <li className="nav-list-elmt">
              <Link to={'/place-to-visit/Historique'}>Historique</Link>
            </li>
            <li className="nav-list-elmt">
              <Link to={'/place-to-visit/Culturel'}>Culturel</Link>
            </li>
            <li className="nav-list-elmt">
              <Link to={'/place-to-visit/Parc'}>Parc</Link>
            </li>
            <li className="nav-list-elmt">
              <Link to={'/place-to-visit/Educatif'}>Educatif</Link>
            </li>
          </ul>
          <ul className="footer-nav-list">
            <li className="nav-list-elmt">
              <Link to={'/experience'}>EXPERIENCES</Link>
            </li>
            <li className="nav-list-elmt">
              <Link to={'/experience/art'}>Art & Fabrication</Link>
            </li>
            <li className="nav-list-elmt">
              <Link to={'/experience/festival'}>Evenements & Festivals</Link>
            </li>
            <li className="nav-list-elmt">
              <Link to={'/experience/food'}>Nourriture</Link>
            </li>
            <li className="nav-list-elmt">
              <Link to={'/experience/parc'}>Parc</Link>
            </li>
            <li className="nav-list-elmt">
              <Link to={'/experience/market'}>Marchés</Link>
            </li>
          </ul>
        </div>
        <div className="footer-contact">
          <div className="footer-contact-elmt">{phoneIcon}+44 20 1234 5678</div>
          <div className="footer-contact-elmt">
            {mailIcon}
            <a href="mailto:info@steamwickcity.com">info@steamwickcity.com</a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <span>© 2023 Gay Florian, Tous droits réservés.</span>
      </div>
    </footer>
  )
}

export default Footer
