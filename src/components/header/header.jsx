import { Link } from 'react-router-dom'
import websiteLogo from '../../assets/steamwick_logo.webp'
import { barIcon } from '../../assets/icon'
import { useState, useEffect } from 'react'
import './header.scss'

function Header() {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth)
  const [onMobile, setOnMobile] = useState(false)
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const handleResize = () => {
        setScreenWidth(window.innerWidth)
    }
    window.addEventListener('resize', handleResize)
    if (screenWidth <= 768) {
        setOnMobile(true)
    } else {
        setOnMobile(false)
    }
    return () => {
        window.removeEventListener('resize', handleResize)
    }
}, [screenWidth])

const open = () => {
  if (isOpen === false) {
      setIsOpen(true)
  } else {
      setIsOpen(false)
  }
}

  return (
    <header>
      <div className="header-top">
        <Link to={'/'}>
          <img src={websiteLogo} alt="website logo" className="header-logo" />
        </Link>
        
        <span className="header-title">Steamwick</span>
      </div>
      <nav className="header-bottom">
        {onMobile ? (
          <button className='header-btn' onClick={open} aria-label='Afficher le menu'>
            {barIcon}
          </button>
        ) : ''}
        <ul className={isOpen && onMobile ? 'nav-appear' : onMobile ? 'nav-disappear' : ''}>
            <li ><Link to={'/about'}>A propos</Link></li>
            <li ><Link to={'/place-to-visit'}>A visiter</Link></li>
            <li ><Link to={'/experience'}>Expériences</Link></li>
            <li ><Link to={'/map'}>Carte</Link></li>
            <li ><Link to={'/conservation'}>Conservation</Link></li>
            <li ><Link to={'/contact'}>Contact</Link></li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
