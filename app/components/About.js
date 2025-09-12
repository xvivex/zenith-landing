"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import CombinedLogoDisplay from "./CombinedLogos";

export default function Services() {
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 20,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section className="relative py-20 px-6 w-full flex items-center justify-center min-h-screen bg-white overflow-hidden">
      {/* Grid background layer */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: "linear-gradient(to right, #e0e0e0 1px, transparent 1px), linear-gradient(to bottom, #e0e0e0 1px, transparent 1px)",
          backgroundSize: "20px 20px",
          maskImage: "radial-gradient(ellipse at center, white 0%, transparent 70%)",
          WebkitMaskImage: "radial-gradient(ellipse at center, white 0%, transparent 70%)",
        }}></div>

      {/* Main card container - Now has a higher z-index to sit on top of the grid */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={containerVariants}
        className="relative z-10 p-6 md:p-12 bg-white rounded-[2rem] shadow-2xl backdrop-blur-md max-w-4xl w-full"
        style={{
          borderRadius: "2rem",
          boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.1), 0 0 100px -12px rgba(255, 255, 255, 0.5) inset",
        }}>
        <div className="text-center mb-10">
          <motion.p
            variants={itemVariants}
            className="text-lg text-gray-400 mb-2">
            Services
          </motion.p>
              <motion.div variants={itemVariants} className="flex justify-center mb-8">
            {/* Replace the single Image component with your new CombinedLogoDisplay */}
            <CombinedLogoDisplay />
          </motion.div>

          <div className="flex flex-col md:flex-row justify-center space-y-8 md:space-y-0 md:space-x-16 text-left">
            {/* Left Column: Web Design & Build */}
            <motion.div
              variants={itemVariants}
              className="flex-1">
              <h3 className="text-xl font-semibold mb-4 text-gray-800">Web Design & Build</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="text-gray-600">Web design</li>
                <li>Conversion focused copywriting</li>
                <li>Webflow development</li>
                <li>Framer development</li>
              </ul>
            </motion.div>

            {/* Right Column: Design Partner */}
            <motion.div
              variants={itemVariants}
              className="flex-1">
              <h3 className="text-xl font-semibold mb-4 text-gray-800">Design Partner</h3>
              <ul className="space-y-2 text-gray-600">
                <li>Web design and build</li>
                <li>Product design</li>
                <li>UX/UI design</li>
                <li>Branding</li>
              </ul>
            </motion.div>
          </div>
        </div>

        {/* Buttons at the bottom */}
        <motion.div
          variants={itemVariants}
          className="mt-10 pt-8 border-t border-gray-100 flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-4">
          <button
            onClick={() => window.open("https://cal.com/d33", "_blank")} // Opens the link in a new tab
            className="flex items-center px-6 py-3 bg-black text-white rounded-full text-lg font-medium hover:bg-gray-800 transition-colors duration-300 shadow-md">
            <Image
              src="/person.jpg"
              alt="Profile"
              width={24}
              height={24}
              className="rounded-full mr-2"
            />
            Book a 30 min call
            <span className="ml-2 transform -rotate-45 text-white">→</span>
          </button>
        </motion.div>
      </motion.div>
    </section>
  );
}
