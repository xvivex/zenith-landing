import Navbar from "./components/Navbar";
import "./globals.css";
import { Geist } from "next/font/google";

// ✅ Load Geist variable font (adjust the path to where the font file is stored)
const geist = Geist({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["400", "500", "600", "700"],
});

export const metadata = {
  title: "Your Name | Freelance Developer",
  description: "Landing page for freelance software development services",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geist.variable} font-sans antialiased`}>
        <div className="grid-background"></div>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
