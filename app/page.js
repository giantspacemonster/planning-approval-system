import Image from "next/image";
import styles from "./page.module.css";
import buildingImage from "../public/building.jpg";
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div>
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
            background: 'var(--overlay-shadow)'
          }}
        >
          <p
            style={{
              fontSize: "3em",
              fontWeight: "bolder",
              color: 'var(--white-smoke)'
            }}
            className={inter.className}
          >
            <b>STREAMLINED CONSTRUCTION AND PLANNING APPROVAL</b>
          </p>
          <br/>
          <br/>
          <p style={{
              fontSize: "2em",
              fontWeight: "bolder",
              color: 'var(--white-smoke)'
            }}
            className={inter.className}>
            Submit applications, track progress, and access vital
            information—all in one place.
            <br />
            Empowering your projects,and bringing your visions to life <br />
            because your success is our commitment
          </p>
        </div>
      </div>
    </div>
  );
}
