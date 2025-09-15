import Link from "next/link";
import Contact from './Contact';

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 ">
      <div className="max-w-5xl mx-auto backdrop-blur-sm bg-gray-100/50 rounded-2xl p-4 flex justify-between items-center shadow-lg">
        {/* Logo */}
        <Link href="/" className="text-xl font-bold">
          ZENITH
        </Link>

        <div className="hidden md:flex space-x-6 text-sm font-medium text-gray-800">
          <Link href="#about" className="hover:text-gray-900 transition-colors duration-200">About</Link>
          {/* <Link href="#services" className="hover:text-gray-900 transition-colors duration-200">Services</Link> */}
          <Link href="#projects" className="hover:text-gray-900 transition-colors duration-200">Projects</Link>
          {/* <Link href="#contact" className="hover:text-gray-900 transition-colors duration-200">Contact Us</Link> */}
        </div>

        <div className="flex items-center">
          <button className="flex items-center space-x-2 px-6 py-2 cursor-pointer border border-gray-300 rounded-full text-gray-800 text-sm font-medium hover:bg-black hover:text-amber-50 transition-colors duration-200">
            <span>Contact Us</span>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
}
