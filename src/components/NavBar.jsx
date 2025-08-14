import React from 'react'
import {navItems} from '../../index'
import { useState } from 'react'

const NavBar = ({ language, setLanguage }) => {
  const [toggleOpen, setToggleOpen] = useState(false)

  const nav = navItems[language]
  const otherLanguage = language === 'english' ? 'swedish' : 'english'

  const handleToggleClick = (selectedLanguage) => {
    setLanguage(selectedLanguage);
    setToggleOpen(false);
  }

  return (
    <div id='navbar'>
      <img src='https://storage.123fakturera.se/public/icons/diamond.png' id='diamond' alt='diamond' />
      
      <a href={nav.home.link} className='nav-item'>{nav.home.text}</a>
      <a href={nav.order.link} className='nav-item'>{nav.order.text}</a>
      <a href={nav.customers.link} className='nav-item'>{nav.customers.text}</a>
      <a href={nav.about.link} className='nav-item'>{nav.about.text}</a>
      <a href={nav.contact.link} className='nav-item'>{nav.contact.text}</a>

      <span className='nav-item language-toggle' onClick={()=>{setToggleOpen(!toggleOpen)}}>
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
  )
}

export default NavBar