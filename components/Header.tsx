'use client'

import { useState, useEffect } from 'react'

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const closeMenu = () => setMenuOpen(false)

  return (
    <header id="top" className={scrolled ? 'scrolled' : ''}>
      <div className="wrap nav">
        <a href="#top" className="brand">
          <span className="dot" aria-hidden="true" />
          <b>Emmanuel&nbsp;Oladejo</b>
          <span>/ frontend</span>
        </a>
        <button
          className="menu-btn"
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
          aria-controls="primary-nav"
          onClick={() => setMenuOpen(o => !o)}
        >
          <span />
          <span />
          <span />
        </button>
        <nav>
          <div className={`links${menuOpen ? ' open' : ''}`} id="primary-nav">
            <a href="#work" onClick={closeMenu}>Work</a>
            <a href="#products" onClick={closeMenu}>Products</a>
            <a href="#stack" onClick={closeMenu}>Stack</a>
            <a href="#community" onClick={closeMenu}>Community</a>
            <a href="#contact" className="cta" onClick={closeMenu}>Get in touch</a>
          </div>
        </nav>
      </div>
    </header>
  )
}
