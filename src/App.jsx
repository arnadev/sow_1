import React, { useState, useEffect } from 'react'
import NavBar from './components/NavBar.jsx'
import Content from './components/Content.jsx'

const App = () => {
  const getInitialLanguage = () => {
    const savedLanguage = localStorage.getItem('selectedLanguage')
    return (savedLanguage === 'english' || savedLanguage === 'swedish') ? savedLanguage : 'swedish'
  }

  const [language, setLanguage] = useState(getInitialLanguage)

  useEffect(() => {
    localStorage.setItem('selectedLanguage', language)
  }, [language])

  return (
    <>
      <NavBar language={language} setLanguage={setLanguage} />
      <Content language={language}/>
    </>
  )
}

export default App;
