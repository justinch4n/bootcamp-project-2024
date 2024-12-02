import React from "react";
import styles from "./navbar.module.css";
import Link from "next/link";

export default function Navbar() {
  return (
    <header className={styles.navbar} >
      <h1 className={styles.logo}> Justin Chan </h1>
      <nav className={styles.navList}>
        <Link href="/" >Home</Link>
        <Link href="/blog">Blog</Link>
        <Link href="/portfolio" >Portfolio</Link>
        <Link href="/resume" >Resume</Link>
        <Link href="/contact" >Contact</Link>
      </nav>
    </header>
  );
}