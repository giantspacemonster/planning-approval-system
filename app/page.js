import Image from "next/image";
import styles from "./page.module.css";
import buildingImage from "../public/building.jpg";
import sampleImage from "/public/sampleImage.jpg";
import sampleImage2 from "/public/sampleImage2.jpg";
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.gridItem}>
        <Image
          className={styles.bgImage}
          src={buildingImage}
          alt="background"
          width={0}
          height={0}
          sizes="100vw"
          style={{
            width: "100%",
            height: "auto",
          }}
        />
        <div className={styles.floatingText}>
          <p className={`${inter.className} ${styles.floatingTextHeading}`}>
            <b>STREAMLINED CONSTRUCTION AND PLANNING APPROVAL</b>
          </p>
          <br />
          <br />
          <p className={`${inter.className} ${styles.floatingTextDesc}`}>
            Submit applications, track progress, and access vital
            information—all in one place.
            <br />
            Empowering your projects,and bringing your visions to life <br />
            because your success is our commitment
          </p>
        </div>
      </div>
      <div className={styles.contentGrid1}>
        <div className={styles.contentGridHeading}>
          <h2>Comprehensive Information Hub</h2>
          <p className={styles.contentGridDesc}>
            Navigate through a wealth of information right at your fingertips.
            Our website serves as a comprehensive hub for zoning regulations,
            building codes, and planning guidelines. Citizens, architects, and
            local authorities can access a wealth of educational resources,
            empowering them with the knowledge needed to make informed
            decisions.
          </p>
        </div>
        <Image
          src={sampleImage2}
          alt="sample"
          width={0}
          height={0}
          sizes="100%"
          style={{
            width: "100%",
            height: "auto",
            borderRadius: "4px",
          }}
        />
      </div>
      <div className={styles.contentGrid2}>
        <Image
          src={sampleImage}
          alt="sample"
          width={0}
          height={0}
          sizes="100%"
          style={{
            width: "100%",
            height: "auto",
            borderRadius: "4px",
          }}
        />
        <div className={styles.contentGridHeading}>
          <h2>Intuitive Application Submission</h2>
          <p className={styles.contentGridDesc}>
            For citizens and architects alike, the process of submitting
            applications has been revolutionized. Our intuitive online forms
            guide users through each step, ensuring that all necessary details
            are captured. Upload plans, documents, and other required
            information seamlessly, eliminating the need for cumbersome
            paperwork.
          </p>
        </div>
      </div>
      <div></div>
    </div>
  );
}
