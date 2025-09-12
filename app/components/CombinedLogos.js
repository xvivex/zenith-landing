import Image from "next/image";
import { motion } from "framer-motion";

export default function CombinedLogoDisplay() {
  const logoVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
  };

  return (
    <div className="flex justify-center my-8 bg-gray-100"> {/* Gray background */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: {
              staggerChildren: 0.1, // Stagger animation for individual logos
              delayChildren: 0.2
            }
          }
        }}
        className="grid grid-cols-2 gap-3 p-3 rounded-2xl shadow-lg bg-gray-50 bg-opacity-90 backdrop-blur-sm" // Smaller container with gray tones
        style={{
            boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 0 50px -10px rgba(255, 255, 255, 0.3) inset',
            transform: 'rotate(0deg)'
        }}
      >
        {/* Top-Left: Framer Logo */}
        <motion.div variants={logoVariants} className="w-16 h-16 md:w-20 md:h-20 bg-gray-200 rounded-lg flex items-center justify-center p-2 shadow-sm">
          <Image
            src="/framer.png"
            alt="Framer Logo"
            width={40}
            height={40}
            objectFit="contain"
          />
        </motion.div>

        {/* Top-Right: Figma Logo */}
        <motion.div variants={logoVariants} className="w-16 h-16 md:w-20 md:h-20 bg-gray-100 rounded-lg flex items-center justify-center p-2 shadow-sm">
          <Image
            src="/figma.png"
            alt="Figma Logo"
            width={40}
            height={40}
            objectFit="contain"
          />
        </motion.div>

        {/* Bottom-Left: Next.js Logo */}
        <motion.div variants={logoVariants} className="w-16 h-16 md:w-20 md:h-20 bg-gray-300 rounded-lg flex items-center justify-center p-2 shadow-sm">
          <Image
            src="/nextjs.png"
            alt="Next.js Logo"
            width={40}
            height={40}
            objectFit="contain"
          />
        </motion.div>

        {/* Bottom-Right: Canva Logo */}
        <motion.div variants={logoVariants} className="w-16 h-16 md:w-20 md:h-20 bg-gray-150 rounded-lg flex items-center justify-center p-2 shadow-sm">
          <Image
            src="/canva.png"
            alt="Canva Logo"
            width={40}
            height={40}
            objectFit="contain"
          />
        </motion.div>
      </motion.div>
    </div>
  );
}