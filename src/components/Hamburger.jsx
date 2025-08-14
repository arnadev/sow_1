import React, { useState, useEffect, useRef } from 'react'
import {navItems} from '../../index'

const Hamburger = ({ language }) => {
  const [isOpen, setIsOpen] = useState(false)
  const hamburgerRef = useRef(null)
  const nav = navItems[language]

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (hamburgerRef.current && !hamburgerRef.current.contains(event.target)) {
        setIsOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  return (
    <span id="navbar-hamburger" ref={hamburgerRef}>
        <span onClick={toggleMenu} >☰</span>
        <span id="hamburger-menu" className={isOpen ? 'menu-open' : ''}>
            <a href={nav.home.link} className='hamburger-item'>{nav.home.text}</a>
            <a href={nav.order.link} className='hamburger-item'>{nav.order.text}</a>
            <a href={nav.customers.link} className='hamburger-item'>{nav.customers.text}</a>
            <a href={nav.about.link} className='hamburger-item'>{nav.about.text}</a>
            <a href={nav.contact.link} className='hamburger-item'>{nav.contact.text}</a>
        </span>
    </span>
  )
}

export default Hamburger