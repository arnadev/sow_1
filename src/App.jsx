import React, { useState, useEffect } from 'react'
import NavBar from './components/NavBar.jsx'
import Content from './components/Content.jsx'
import { useTranslations } from './hooks/useTranslations.js'

const App = () => {
  const getInitialLanguage = () => {
    const savedLanguage = localStorage.getItem('selectedLanguage')
    return (savedLanguage === 'english' || savedLanguage === 'swedish') ? savedLanguage : 'swedish'
  }

  const [language, setLanguage] = useState(getInitialLanguage)
  const { navItems, contentText, loading, error, isLanguageChanging } = useTranslations(language)

  useEffect(() => {
    localStorage.setItem('selectedLanguage', language)
  }, [language])

  // Only render components when initial data is loaded
  if (loading) {
    return <></>
  }

  return (
    <>
      <NavBar language={language} setLanguage={setLanguage} navItems={navItems} />
      <Content language={language} contentText={contentText} />
    </>
  )
}

export default App;
