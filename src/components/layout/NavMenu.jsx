import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import ThemeToggler from './ThemeToggler'

export default function NavMenu() {
  const { pathname } = useLocation()
  return (
    <nav className="navigation">
      <ul>
        <li>
          {pathname !== '/archives'
            ? <Link to="/archives" title="Archives">Arsip</Link>
            : <Link to="/" title="Home">Home</Link>}

        </li>
        <li>
          <ThemeToggler />
        </li>
      </ul>
    </nav>
  )
}
