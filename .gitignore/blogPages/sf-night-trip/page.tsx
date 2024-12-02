import React from "react";
import Image from "next/image";
import styles from "../blogPages.module.css";

export default function SfNightTrip() {
  return (
    <main>
      <h1 className="page-title">San Francisco Night Trip</h1>
      <div className={styles.blogPage}>
        <div className={styles.blogImg}>
            <Image src="../media/icecream.jpg" alt="Incecream" />
        </div>
        <div className={styles.blogText}>
            <p></p>
        </div>
    </div>
    </main>
  );}