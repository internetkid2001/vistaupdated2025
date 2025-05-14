'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import styles from './Sidebar.module.css'

const navLinks = [
  {
    href: 'https://www.vist4.net/store',
    label: 'Store',
    external: true,
  },
  {
    href: 'https://www.instagram.com/vista_usa/',
    label: 'Archive',
    external: true,
  },
  { href: '/made-by-vista',  label: 'Made by Vista'    },
  {
    href: 'https://www.vist4.net/contact',
    label: 'Contact',
    external: true,
  },
  { href: '/sms-newsletter', label: 'Newsletter' },
  { href: '/faq-terms',      label: 'FAQ & Terms'      },
]

export default function Sidebar() {
  const path = usePathname()

  return (
    <aside className={styles.aside}>
      <Link href="/">
        <img
          src="https://victor-videos.b-cdn.net/VIRA-ANIMATION-V3-COLOR-unscreen.gif"
          alt="Go Home"
          className={styles.logo}
        />
      </Link>

      <nav className={styles.nav}>
        {navLinks.map(({ href, label, external }) => {
          if (external) {
            return (
              <a
                key={href}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.link}
              >
                {label}
              </a>
            )
          }

          const isActive = path === href
          return (
            <Link
              key={href}
              href={href}
              className={`${styles.link} ${isActive ? styles.active : ''}`}
            >
              {label}
            </Link>
          )
        })}
      </nav>
    </aside>
  )
}
