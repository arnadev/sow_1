import React, { useState, useEffect, useRef } from 'react'
import Hamburger from './Hamburger.jsx'

const NavBar = ({ language, setLanguage, navItems }) => {
  const [toggleOpen, setToggleOpen] = useState(false)
  const languageToggleRef = useRef(null)
  const isDesktop = window.matchMedia('(min-width: 1025px)').matches;
  const nav = navItems
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
        <Hamburger navItems={navItems} />
      }
      {isDesktop && nav && Object.keys(nav).length > 0 &&
      <>
        <img onClick={() => { window.location.href = '/login'; }} src='/diamond.png' id='diamond' alt='diamond' />
        <a href={nav.home?.link} className='nav-item'>{nav.home?.text}</a>
        <a href={nav.order?.link} className='nav-item'>{nav.order?.text}</a>
        <a href={nav.customers?.link} className='nav-item'>{nav.customers?.text}</a>
        <a href={nav.about?.link} className='nav-item'>{nav.about?.text}</a>
        <a href={nav.contact?.link} className='nav-item'>{nav.contact?.text}</a>
      </>
      }
      <span className='nav-item language-toggle' ref={languageToggleRef} onClick={()=>{setToggleOpen(!toggleOpen)}}>
        {nav.language?.text}
        <img src={nav.language?.flag} alt={nav.language?.text} className='language-flag' />
        
        {toggleOpen &&
        <span id='toggle-card'>
          <span className='card' onClick={() => handleToggleClick(otherLanguage)}>
            {otherLanguage}
            <img src={otherLanguage === 'english' ? '/GB.png' : '/SE.png'} alt={otherLanguage} className='language-flag' />
          </span>
            <span className='card' onClick={() => handleToggleClick(language)}>
            {language}
            <img src={language === 'english' ? '/GB.png' : '/SE.png'} alt={language} className='language-flag' />
          </span>
        </span>
        }
      </span>

    </div>
    </>
  )
}

export default NavBar