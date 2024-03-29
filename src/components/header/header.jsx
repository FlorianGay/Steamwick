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
            <li className='nav-list-elmt'><Link to={'/place-to-visit'}>A visiter</Link></li>
            <li className='nav-list-elmt'><Link to={'/experience'}>Expériences</Link></li>
            <li className='nav-list-elmt'><Link to={'/map'}>Carte</Link></li>
            <li className='nav-list-elmt'><Link to={'/conservation'}>Conservation</Link></li>
            <li className='nav-list-elmt'><Link to={'/contact'}>Contact</Link></li>
        </ul>
      </div>
    </header>
  )
}

export default Header
