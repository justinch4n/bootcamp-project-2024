import styles from "./contact.module.css";

export default function Home() {
  return (
    <main>
        <h1 className="pageTitle">Contact Me</h1>
        <div className={styles.contact}>
            <p className={styles.contactText}>
                Leave your contact details down below and I'll get back to you!
            </p>
            <form className={styles.form}>
                <label className={styles.label} htmlFor="name">Name</label>
                <input className={styles.input} type="name" id="name" name="name" placeholder="Name" required />
                <br /><br />
                <label className={styles.label} htmlFor="select">Method of Contact</label>
                <select id="select" name="select">
                    <option value="software">Email</option>
                    <option value="product">Instagram</option>
                    <option value="design">Text</option>
                </select>
                <br /><br />
                <label className={styles.label} htmlFor="handle">Handle</label>
                <input className={styles.input} type="handle" id="handle" name="handle" placeholder="Email/Handle/Number" />
                <br /><br />
                <label className={styles.label} htmlFor="comments">Comments</label>
                <textarea className={styles.textarea} id="comments" name="comments" placeholder="Comments" required></textarea>
                <br />
                <input className={styles.button} type="submit" value="Submit" />
            </form>
        </div>
    </main>
  );
}