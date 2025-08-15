import React, { useState, useEffect, useRef } from 'react'
import {navItems} from '../../index'
import Hamburger from './Hamburger.jsx'

const NavBar = ({ language, setLanguage }) => {
  const [toggleOpen, setToggleOpen] = useState(false)
  const languageToggleRef = useRef(null)
  const isDesktop = window.matchMedia('(min-width: 1025px)').matches;
  const nav = navItems[language]
  const otherLanguage = language === 'english' ? 'swedish' : 'english'

  // Handle clicking outside to close language dropdown
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (languageToggleRef.current && !languageToggleRef.current.contains(event.target)) {
        setToggleOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  const handleToggleClick = (selectedLanguage) => {
    setLanguage(selectedLanguage);
    setToggleOpen(false);
  }

  return (
    <>
    <div id='navbar'>
      {!isDesktop &&
        <Hamburger language={language} />
      }
      {isDesktop &&
      <>
        <img onClick={() => { window.location.href = '/login'; }} src='/diamond.png' id='diamond' alt='diamond' />
        <a href={nav.home.link} className='nav-item'>{nav.home.text}</a>
        <a href={nav.order.link} className='nav-item'>{nav.order.text}</a>
        <a href={nav.customers.link} className='nav-item'>{nav.customers.text}</a>
        <a href={nav.about.link} className='nav-item'>{nav.about.text}</a>
        <a href={nav.contact.link} className='nav-item'>{nav.contact.text}</a>
      </>
      }
      <span className='nav-item language-toggle' ref={languageToggleRef} onClick={()=>{setToggleOpen(!toggleOpen)}}>
        {nav.language.text}
        <img src={nav.language.flag} alt={nav.language.text} className='language-flag' />
        
        {toggleOpen &&
        <span id='toggle-card'>
          <span className='card' onClick={() => handleToggleClick(otherLanguage)}>
            {navItems[otherLanguage].language.text}
            <img src={navItems[otherLanguage].language.flag} alt={navItems[otherLanguage].language.text} className='language-flag' />
          </span>
            <span className='card' onClick={() => handleToggleClick(language)}>
            {navItems[language].language.text}
            <img src={navItems[language].language.flag} alt={navItems[language].language.text} className='language-flag' />
          </span>
        </span>
        }
      </span>

    </div>
    </>
  )
}

export default NavBar