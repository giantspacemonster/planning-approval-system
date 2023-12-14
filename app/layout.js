import "./globals.css";
import { Toaster } from "react-hot-toast";
import Navigation from "@/components/Navigation/Navigation";
export const metadata = {
  title: "OBPAS",
  description: "OBPAS transforms urban development with a centralized online platform for building"+
  "approvals and city planning. Empowering citizens, architects, and local authorities, it streamlines"+
  " processes, enhances transparency, fostering collaborative, efficient decision-making. Experience "+
  "a smarter, accessible approach to shaping our built environment.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Toaster position="top-right"/>
        <Navigation />
        <div
        style={{
          marginTop: '4em',
        }}>{children}</div>
      </body>
    </html>
  );
}
