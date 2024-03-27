import { Link } from 'react-router-dom'
import websiteLogo from '../../assets/steamwick_logo.webp'
import './header.scss'

function Header() {
  return (
    <header>
      <div className="header-top">
        <Link to={'/'}>
          <img src={websiteLogo} alt="website logo" className="header-logo" />
        </Link>
        
        <span className="header-title">Steamwick</span>
      </div>
      <div className="header-bottom">
        <ul className='header-nav-list'>
            <li className='nav-list-elmt'><Link to={'/about'}>A propos</Link></li>
            <li className='nav-list-elmt'><Link to={'/places'}>A visiter</Link></li>
            <li className='nav-list-elmt'><Link to={'/'}>Expériences</Link></li>
            <li className='nav-list-elmt'><Link to={'/'}>Notre histoire</Link></li>
            <li className='nav-list-elmt'><Link to={'/'}>Carte</Link></li>
            <li className='nav-list-elmt'><Link to={'/'}>Conservation</Link></li>
            <li className='nav-list-elmt'><Link to={'/'}>Contact</Link></li>
        </ul>
      </div>
    </header>
  )
}

export default Header
