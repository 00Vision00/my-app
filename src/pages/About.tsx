import Link from 'next/link'
import React from 'react'
import styles from '@/styles/Home.module.css'
import CanvasTag from '@/component/CanvasTag'

function About() {
  return (
    <div>
        <h2 className = {styles.main}>About</h2>
        <p className={styles.maijn}>
    <Link href="/">Home</Link></p>
    </div>
  )
}

const Box = () =>{
    return(
        <>
        <CanvasTag />
        </>
    )
}


export default About