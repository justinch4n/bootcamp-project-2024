import React from "react";
import Image from "next/image";
import styles from "../blogPages.module.css";

export default function HandrollNight() {
  return (
    <main>
      <h1 className="page-title">Handroll Night</h1>
      <div className={styles.blogPage}>
        <div className={styles.blogImg}>
            <Image src="../media/handroll.jpg" alt="Kasey and Emi with a handroll" />
        </div>
        <div className={styles.blogText}>
            <p></p>
        </div>
    </div>
    </main>
  );}