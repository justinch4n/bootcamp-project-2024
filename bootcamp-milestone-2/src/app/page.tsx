import Image from "next/image";
import styles from "./index.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <main className={styles.main}>
        <h1 className={"pageTitle"}>Hi, I'm Justin!</h1>
        <div className={styles.about}>
          <div className={styles.aboutImage}>
            <Image
              src="/media/homepage1.jpg" 
              alt="picture of me (Justin)" 
              width={500} 
              height={500} 
            />
          </div>
          <div className={styles.aboutText}>
            <p>
              My name is <strong>Justin Chan</strong> and I am a 3rd year at Cal Poly SLO studying Computer Science. <br /><br />
              I am president of the{" "}
              <Link className={styles.aboutLink} href="https://www.calpolycsa.org/">
                Chinese Students' Association
              </Link>
              , so if you have any questions regarding CSA, please feel free to{" "}
              <Link className={styles.aboutLink} href="/contact">
                contact me
              </Link>! <br /><br />
              In my free time I enjoy cooking and going to the gym. I have to say my comfort food I can make at anytime is fried rice! My favorite place in the world
              is Costco Wholesale, and my favorite color is green.
            </p>
          </div>
        </div>
      </main>
    </>
  );
}
