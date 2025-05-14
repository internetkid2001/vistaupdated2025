// src/app/page.tsx
'use client'

import styles from './page.module.css'

export default function HomePage() {
  // Embed URL for your YouTube link, with autoplay, muted, loop
  const embedUrl =
    'https://www.youtube-nocookie.com/embed/WB3q_Zlh1dM' +
    '?autoplay=1&mute=1&loop=1&playlist=WB3q_Zlh1dM&rel=0'

  return (
    <div className={styles.container}>
      <div className={styles.videoWrapper}>
        <iframe
          className={styles.video}
          src={embedUrl}
          title="Volunteers In Service To Art"
          frameBorder="0"
          allow="autoplay; fullscreen; encrypted-media; picture-in-picture"
          allowFullScreen
        />
      </div>
    </div>
  )
}
