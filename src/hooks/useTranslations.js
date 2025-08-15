import { useState, useEffect } from 'react'
import { getNavItems, getContentText } from '../lib/supabase'

export const useTranslations = (language) => {
  const [navItems, setNavItems] = useState({})
  const [contentText, setContentText] = useState({})
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [isLanguageChanging, setIsLanguageChanging] = useState(false)

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Only set loading to true for initial load, not language changes
        if (!navItems || Object.keys(navItems).length === 0) {
          setLoading(true)
        } else {
          setIsLanguageChanging(true)
        }
        setError(null)
        
        const [navData, contentData] = await Promise.all([
          getNavItems(language),
          getContentText(language)
        ])
        
        setNavItems(navData)
        setContentText(contentData)
      } catch (err) {
        setError(err.message)
        console.error('Error fetching translations:', err)
      } finally {
        setLoading(false)
        setIsLanguageChanging(false)
      }
    }

    if (language) {
      fetchData()
    }
  }, [language])

  return { navItems, contentText, loading: loading && !isLanguageChanging, error, isLanguageChanging }
}
