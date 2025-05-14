'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import styles from './Navbar.module.css'

const navLinks = [
  { href: 'https://www.vist4.net/store',         label: 'Store',            external: true },
  { href: 'https://www.instagram.com/vista_usa/', label: 'Archive',          external: true },
  { href: '/made-by-vista',                      label: 'Made by Vista'                 },
  { href: 'https://www.vist4.net/contact',       label: 'Contact',          external: true },
  { href: '/sms-newsletter',                     label: 'SMS & Newsletter'              },
  { href: '/faq-terms',                          label: 'FAQ & Terms'                   },
  
]

export default function Navbar() {
  const path = usePathname()
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <>
      {/* Hamburger button—mobile only */}
      <button
        className={styles.hamburger}
        onClick={() => setMenuOpen(true)}
        aria-label="Open menu"
      >
        ☰
      </button>

      {/* Sliding panel */}
      <nav className={`${styles.navbar} ${menuOpen ? styles.show : ''}`}>
        {/* Logo + Close row */}
        <div className={styles.header}>
          <Link href="/">
            <img
              src="https://victor-videos.b-cdn.net/VIRA-ANIMATION-V3-COLOR-unscreen.gif"
              alt="Go Home"
              className={styles.logo}
            />
          </Link>
          <button
            className={styles.closeBtn}
            onClick={() => setMenuOpen(false)}
            aria-label="Close menu"
          >
            ×
          </button>
        </div>

        {/* Nav links */}
        <div className={styles.links}>
          {navLinks.map(({ href, label, external }) =>
            external ? (
              <a
                key={href}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.link}
                onClick={() => setMenuOpen(false)}
              >
                {label}
              </a>
            ) : (
              <Link
                key={href}
                href={href}
                className={`${styles.link} ${path === href ? styles.active : ''}`}
                onClick={() => setMenuOpen(false)}
              >
                {label}
              </Link>
            )
          )}
        </div>
      </nav>
    </>
  )
}
