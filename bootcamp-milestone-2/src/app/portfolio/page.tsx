import styles from "./portfolio.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <main>
        <h1 className="pageTitle">Portfolio</h1>
        <div className={styles.project}>
            <Link href="/">
                <img
                    src="./media/personalPage.png"
                    alt="picture of personal site homepage"
                    width="400px" 
                />
            </Link>
            <div className={styles.projectDetails}>
                <p className={styles.projectName}>Personal Website</p>
                <p className={styles.projectDescription}>
                    This website is my first portfolio project I made using the Hack4Impact starter kit!
                </p>
                <Link href="/">Learn More</Link>
            </div>
        </div>
      <div className={styles.project}>
        <Link href="https://price-plate.vercel.app/">
          <img
            src="./media/pricePlate.png"
            alt="pricePlate landing page"
            width="400px" 
          />
        </Link>
        <div className={styles.projectDetails}>
          <p className={styles.projectName}>Price Plate</p>
          <p className={styles.projectDescription}>
            In this project, I worked with a team to create a recipe expense tracker,
            a web application designed to help users manage cooking costs and plan meals
            efficiently. I was responsible for prototyping in Figma and developing the
            application's frontend using TypeScript and CSS. We used MongoDB to store recipes
            and user data and the application was built using Next.js. Throughout development,
            we faced challenges such as efficiently structuring the database for complex recipe
             data and implementing real-time cost calculations, which we overcame through collaborative
             problem-solving. This experience significantly enhanced my skills in UI/UX design, frontend development, and working with modern web technologies.
          </p>
          <p>
            <strong>Technologies used:</strong> Next.js, Express.js, Node.js,
            MongoDB, Vercel, TypeScript, Figma
          </p>
          <Link href="https://price-plate.vercel.app/">Learn More</Link>
        </div>
      </div>

      <div className={styles.project}>
        <Link
          href="https://github.com/joieng1/concertTicketDatabase"
        >
          <img
            src="./media/concertTicketDB.png"
            alt="Concert Ticket Database"
            width="400px"
          />
        </Link>
        <div className={styles.projectDetails}>
          <p className={styles.projectName}>Concert Ticket Database</p>
          <p className={styles.projectDescription}>
            In this project, I used MySQL to create a relational database to
             store different database tables. I also created a GUI to interact 
             with the database using the JavaFx framework to interact with the
              tables in different ways. A user is able to sign into the database 
              as a customer or artist which gives access to related tables and allows 
              for the users to create/add/remove different records. There is also an 
              admin account which can view all tables through the GUI.

          </p>
          <p><strong>Technologies used:</strong> Java, JavaFX, SQL</p>
            <Link
                href="https://github.com/joieng1/concertTicketDatabase"
            >
                Learn More</Link>
        </div>
      </div>
        </main>
  );
}