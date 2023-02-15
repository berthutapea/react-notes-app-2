import React, { useEffect, useState } from 'react'
import { capitalizeFirstLetter } from '../../utils'

function ThemeToggler() {
  const [theme, setTheme] = useState('dark')

  const changeTheme = (val) => {
    setTheme(val)
    const root = window.document.documentElement
    root.setAttribute('data-theme', val)
    localStorage.setItem('theme', val)
  }

  useEffect(() => {
    if (localStorage.theme) {
      changeTheme(localStorage.theme)
    } else {
      localStorage.setItem('theme', 'dark')
      changeTheme('dark')
    }
  }, [])

  return (
    <button
      type="button"
      onClick={() => changeTheme(theme === 'dark' ? 'light' : 'dark')}
    >
      {capitalizeFirstLetter(theme)}
      {' '}
      Theme
    </button>
  )
}

export default ThemeToggler
