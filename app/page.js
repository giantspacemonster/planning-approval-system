import Image from "next/image";
import styles from "./page.module.css";
import buildingImage from "../public/building.jpg";
import sampleImage from "/public/sampleImage.jpg";
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
      }}
    >
      <div
        style={{
          width: "100%",
          height: "auto",
        }}
      >
        <Image
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
        <div
          style={{
            position: "absolute",
            top: "5.5em",
            left: "1em",
            width: "45%",
            background: "var(--overlay-shadow)",
          }}
        >
          <p
            style={{
              fontSize: "3em",
              fontWeight: "bolder",
              color: "var(--white-smoke)",
            }}
            className={inter.className}
          >
            <b>STREAMLINED CONSTRUCTION AND PLANNING APPROVAL</b>
          </p>
          <br />
          <br />
          <p
            style={{
              fontSize: "2em",
              fontWeight: "bolder",
              color: "var(--white-smoke)",
            }}
            className={inter.className}
          >
            Submit applications, track progress, and access vital
            information—all in one place.
            <br />
            Empowering your projects,and bringing your visions to life <br />
            because your success is our commitment
          </p>
        </div>
      </div>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "70% 30%",
          margin: "1em",
        }}
      >
        <div
          style={{
            padding: "1em",
            textAlign: "justify",
            height: "auto",
          }}
        >
          <h2
            style={{
              fontFamily: "'Russo One', sans-serif",
              fontSize: "4em",
            }}
          >
            Comprehensive Information Hub
          </h2>
          <br />
          <br />
          <p
            style={{
              fontSize: "2em",
            }}
          >
            Navigate through a wealth of information right at your fingertips.
            Our website serves as a comprehensive hub for zoning regulations,
            building codes, and planning guidelines. Citizens, architects, and
            local authorities can access a wealth of educational resources,
            empowering them with the knowledge needed to make informed
            decisions.
          </p>
        </div>
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
      </div>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "30% 70%",
          margin: "1em",
          borderRadius: "4px",
        }}
      >
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
        <div
          style={{
            padding: "1em",
            textAlign: "justify",
            height: "auto",
          }}
        >
          <h2
            style={{
              fontFamily: "'Russo One', sans-serif",
              fontSize: "4em",
            }}
          >
            Intuitive Application Submission
          </h2>
          <br />
          <br />
          <p
            style={{
              fontSize: "2em",
            }}
          >
            For citizens and architects alike, the process of submitting
            applications has been revolutionized. Our intuitive online forms
            guide users through each step, ensuring that all necessary details
            are captured. Upload plans, documents, and other required
            information seamlessly, eliminating the need for cumbersome
            paperwork.
          </p>
        </div>
      </div>
      <div>
        
      </div>
    </div>
  );
}
