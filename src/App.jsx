import React from 'react'
import NavBar from './components/NavBar.jsx'
import { useState } from 'react'
import Content from './components/Content.jsx'

const App = () => {
  const [language, setLanguage] = useState('english')

  return (
    <>
      <NavBar language={language} setLanguage={setLanguage} />
      <Content language={language}/>
    </>
  )
}

export default App;
