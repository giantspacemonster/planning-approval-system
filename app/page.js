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
            <b>Elevate Your Safety with Seamless Digital Signatures</b>
          </p>
          <br />
          <br />
          <p className={`${inter.className} ${styles.floatingTextDesc}`}>
            SecureSign is a cutting-edge digital signature web service that
            empowers users and organizations to enhance the security of their
            digital communications. With an easy-to-use interface, users can
            create accounts, undergo robust identity verification, and
            seamlessly request digital signatures. Our service ensures a
            streamlined and secure process, guaranteeing the authenticity and
            integrity of your documents.
            <br />
          </p>
        </div>
      </div>
      <div className={styles.contentGrid1}>
        <div className={styles.contentGridHeading}>
          <h2>Robust Identity Verification</h2>
          <p className={styles.contentGridDesc}>
            At SecureSign, our commitment to security begins with a
            comprehensive and robust identity verification process. We employ
            cutting-edge techniques, including multi-layered verification
            methods such as biometric authentication, document validation, and
            real-time checks against authoritative databases. This meticulous
            approach ensures the legitimacy of user identities, reducing the
            risk of fraudulent activities. Biometric features, such as
            fingerprint scans and facial recognition, add an extra layer of
            security, while document verification verifies official IDs and
            business documents. Our system is designed for real-time checks,
            providing instant validation and alignment with regulatory
            standards.
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
          <h2>Versatile Document Compatibility</h2>
          <p className={styles.contentGridDesc}>
            At SecureSign, we recognize the diverse landscape of digital
            documentation, and our commitment to user convenience is reflected
            in our emphasis on versatile document compatibility. Our service
            supports a wide array of document formats, ensuring that users can
            seamlessly apply digital signatures to various types of digital
            content. Whether it's PDFs, Word documents, spreadsheets, or image
            files, SecureSign.io provides a universal solution for enhancing the
            security of your digital interactions. This versatility extends to
            accommodate the dynamic needs of individuals and organizations
            across different sectors. With our user-friendly interface, users
            can confidently apply digital signatures to their documents of
            choice, fostering a flexible and adaptable approach to secure
            communication. 
          </p>
        </div>
      </div>
      <div></div>
    </div>
  );
}
