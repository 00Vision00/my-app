import Link from 'next/link'
import React from 'react'
import styles from '@/styles/Home.module.css'

function About() {
  return (
    <div>
        <h2 className = {styles.main}>About</h2>
        <p className={styles.maijn}>
    <Link href="/">Home</Link></p>
    </div>
  )
}

export default About