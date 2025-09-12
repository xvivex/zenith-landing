import Navbar from "./components/Navbar";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["400", "500", "600", "700"], // optional, for headings & body
});

export const metadata = {
  title: "Your Name | Freelance Developer",
  description: "Landing page for freelance software development services",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans antialiased`}>
        {/* Add this div back for the grid background */}
        <div className="grid-background"></div>
        <Navbar />
        {children}
      </body>
    </html>
  );
}