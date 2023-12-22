import "./globals.css";
import { Toaster } from "react-hot-toast";
import Navigation from "@/components/Navigation/Navigation";
export const metadata = {
  title: "Secure Sign",
  description: `SecureSign.io is a cutting-edge digital signature web service 
    that empowers users and organizations to enhance the security of their
    digital communications. With an easy-to-use interface, 
    users can create accounts, undergo robust identity verification, 
    and seamlessly request digital signatures. Our service ensures a streamlined 
    and secure process, guaranteeing the authenticity and integrity of your documents.`,
  generator: "Next.js",
  applicationName: "Secure Sign",
  authors: [
    { name: "Dev" },
    {
      name: "Debasish Raut",
      url: "https://github.com/giantspacemonster/planning-approval-system",
    },
  ],
  creator: "Debasish Raut",
  publisher: "Debasish Raut",
  keywords: [
    "Next.js",
    "React",
    "JavaScript",
    "Online",
    "Digital Signature",
    'Identity Verification',
    'Secure Communication',
    'Authentication',
    'Document Integrity',
    'Portable Signature',
    'Java-based Security',
    'Online Security',
    'Signature Verification',
    'Electronic Documents'
  ],
  referrer: "origin-when-cross-origin",
  formatDetection: {
    email: true,
    address: false,
    telephone: false,
  },
  robots: {
    index: false,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: false,
      noimageindex: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Toaster position="top-right" />
        <Navigation />
        <div
          style={{
            marginTop: "4em",
          }}
        >
          {children}
        </div>
      </body>
    </html>
  );
}
