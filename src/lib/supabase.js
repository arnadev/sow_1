import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://yodqtkfdjgcfpzoihdkp.supabase.co'
// Note: Using hardcoded API key for ease of testing with dummy data and RLS disabled
// ACCESS KEY INSIDE REPO ONLY FOR TESTING [Read Key] - normally we keep inside .env file
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InlvZHF0a2ZkamdjZnB6b2loZGtwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTUyNDk5MzQsImV4cCI6MjA3MDgyNTkzNH0.KlKPhMn0Dxn21LC54luJ9OYCrbS3I-2O4DC0bkBSQnk'

export const supabase = createClient(supabaseUrl, supabaseKey)

// Helper functions to fetch data
export const getNavItems = async (language) => {
  const { data, error } = await supabase
    .from('nav_items')
    .select('*')
    .eq('language', language)
  
  if (error) {
    console.error('Error fetching nav items:', error)
    return {}
  }
  
  const navItems = {}
  data.forEach(item => {
    navItems[item.key] = {
      text: item.text,
      link: item.link,
      flag: item.flag
    }
  })
  
  return navItems
}

export const getContentText = async (language) => {
  const { data, error } = await supabase
    .from('content_text')
    .select('*')
    .eq('language', language)
  
  if (error) {
    console.error('Error fetching content text:', error)
    return {}
  }
  
  const contentText = {}
  data.forEach(item => {
    contentText[item.key] = item.text
  })
  
  return contentText
}
