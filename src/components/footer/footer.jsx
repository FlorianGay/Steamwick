import { Link } from "react-router-dom"
import { phoneIcon, mailIcon } from "../../assets/icon"
import './footer.scss'

function Footer() {
  return (
    <footer>
      <div className="footer-top">
        <div className="footer-nav">
            <ul className="footer-nav-list">
                <li className="nav-list-elmt"><Link to={'/'}>HOME</Link></li>
                <li className="nav-list-elmt"><Link to={'/'}>A PROPOS</Link></li>
                <li className="nav-list-elmt"><Link to={'/'}>CARTE</Link></li>
                <li className="nav-list-elmt"><Link to={'/'}>CONSERVATION</Link></li>
                <li className="nav-list-elmt"><Link to={'/'}>CONTACT</Link></li>
                <li className="nav-list-elmt"><Link to={'/'}>MENTION LEGALE</Link></li>
            </ul>
            <ul className="footer-nav-list">
                <li className="nav-list-elmt"><Link to={'/'}>A VISITER</Link></li>
                <li className="nav-list-elmt"><Link to={'/'}></Link></li>
                <li className="nav-list-elmt"><Link to={'/'}></Link></li>
                <li className="nav-list-elmt"><Link to={'/'}></Link></li>
                <li className="nav-list-elmt"><Link to={'/'}></Link></li>
                <li className="nav-list-elmt"><Link to={'/'}></Link></li>
            </ul>
            <ul className="footer-nav-list">
                <li className="nav-list-elmt"><Link to={'/'}>EXPERIENCES</Link></li>
                <li className="nav-list-elmt"><Link to={'/'}></Link></li>
                <li className="nav-list-elmt"><Link to={'/'}></Link></li>
                <li className="nav-list-elmt"><Link to={'/'}></Link></li>
                <li className="nav-list-elmt"><Link to={'/'}></Link></li>
                <li className="nav-list-elmt"><Link to={'/'}></Link></li>
            </ul>
            <ul className="footer-nav-list">
                <li className="nav-list-elmt"><Link to={'/'}>NOTRE HISTOIRE</Link></li>
                <li className="nav-list-elmt"><Link to={'/'}></Link></li>
                <li className="nav-list-elmt"><Link to={'/'}></Link></li>
            </ul>
        </div>
        <div className="footer-contact">
            <div className="footer-contact-elmt">{phoneIcon}+44 20 1234 5678</div>
            <div className="footer-contact-elmt">{mailIcon}<a href="mailto:info@steamwickcity.com" >info@steamwickcity.com</a></div>
        </div>
      </div>
      <div className="footer-bottom">
        <span>© 2023 Gay Florian, Tous droits réservés.</span>
      </div>
    </footer>
  )
}

export default Footer
