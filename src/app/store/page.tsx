'use client';
export const dynamic = 'error';

import styles from '../ComingSoon.module.css'

export default function StorePage() {
  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>Store</h1>
      <p className={styles.message}>This page is coming soon.</p>
    </div>
  )
}
