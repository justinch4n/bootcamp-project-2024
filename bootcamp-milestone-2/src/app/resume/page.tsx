import styles from "./resume.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <main>
        <h1 className="pageTitle">Resume</h1>
        <div className={styles.downloadButtonContainer}>
          <Link href="/JustinChanResume.pdf" download className={styles.button}>
            Download My Resume
          </Link>
        </div>
        <div className={styles.resume}>
          <section className={styles.resumeSection}>
            <h2>Education</h2>
            <h3>
              Bachelor of Science, California Polytechnic University San Luis
              Obispo
            </h3>
            <p>Major: Computer Science | GPA: 3.51</p>
            <p className={styles.jobInfo}>
              Sept 2022 - Present | Expected Graduation: June 2026
            </p>
          </section>

          <section className={styles.resumeSection}>
            <h2>Relevant Coursework</h2>
            <ul>
              <li>Intro to Databases</li>
              <li>Intro to Computer Security</li>
              <li>Software Engineering</li>
              <li>Data Structures</li>
              <li>Algorithm Design/Optimization</li>
              <li>Computer Architecture and Organization</li>
              <li>Systems Programming</li>
              <li>Discrete Math</li>
              <li>Object-Oriented Project-Based Programming</li>
              <li>Fundamentals of Computer Science</li>
            </ul>
          </section>

          <section className={styles.resumeSection}>
            <h2>Experience</h2>
            <div className={styles.job}>
              <h3>Intern for Programmable Solutions Group</h3>
              <p className={styles.jobInfo}>
                Intel, San Jose, CA | July 2023 - Sept 2023
              </p>
              <ul>
                <li>
                  Constructed a demo for the DARPA ERI summit implementing
                  photonics
                </li>
                <li>Documented Nios V software for programming processors</li>
              </ul>
            </div>
            <div className={styles.job}>
              <h3>Dental Office Assistant</h3>
              <p className={styles.jobInfo}>
                Oak Meadow Dental Center, Los Gatos, CA | Feb 2022 - Sept 2022
              </p>
              <ul>
                <li>
                  Applied programming for database management to organize office
                  inventory, scheduling, and patient's profiles
                </li>
                <li>
                  Implemented algorithms to optimize scheduling for maximum
                  efficiency
                </li>
              </ul>
            </div>
          </section>

          <section className={styles.resumeSection}>
            <h2>Projects</h2>
            <div className={styles.project}>
              <h3>Concert Ticket Database (SQL)</h3>
              <p>
                Created a relational database using MySQL and a GUI with JavaFx
                to manage concert tickets, allowing user interactions based on
                roles (customer, artist, admin).
              </p>
            </div>
            <div className={styles.project}>
              <h3>PricePlate (Software Engineering)</h3>
              <p>
                Developed a recipe expense tracker web application using
                TypeScript, CSS, MongoDB, and Next.js. Responsible for UI/UX
                design and frontend development.
              </p>
            </div>
          </section>

          <section className={styles.resumeSection}>
            <h2>Leadership and Awards</h2>
            <div className={styles.leadership}>
              <h3>Event Coordinator | President</h3>
              <p className={styles.jobInfo}>
                Chinese Students' Association, San Luis Obispo, CA | Feb 2022 -
                Present
              </p>
              <ul>
                <li>
                  Responsible for planning and coordination for social and
                  cultural events
                </li>
                <li>
                  Association representative for outward bound communication and
                  relationship with other campus organizations
                </li>
              </ul>
            </div>
            <div className={styles.award}>
              <h3>Cal Poly College of Engineering Dean's List</h3>
              <p className={styles.jobInfo}>
                Maintained a 3.5 GPA or higher for the quarter
              </p>
              <ul>
                <li>Fall 2022</li>
                <li>Fall 2023</li>
                <li>Spring 2024</li>
                <li>Summer 2024</li>
              </ul>
            </div>
          </section>
        </div>
      </main>
    </>
  );
}
