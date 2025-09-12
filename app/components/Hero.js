"use client";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="py-20 px-6 w-full bg-white">
      <div className="max-w-6xl mx-auto text-center">
        {/* Trust indicators */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex justify-center items-center mb-12"
        >
          <div className="flex -space-x-2 mr-3">
            <div className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-400 to-blue-600 border-2 border-white flex items-center justify-center">
              <span className="text-white text-sm font-semibold">A</span>
            </div>
            <div className="w-10 h-10 rounded-full bg-gradient-to-r from-green-400 to-green-600 border-2 border-white flex items-center justify-center">
              <span className="text-white text-sm font-semibold">B</span>
            </div>
            <div className="w-10 h-10 rounded-full bg-gradient-to-r from-purple-400 to-purple-600 border-2 border-white flex items-center justify-center">
              <span className="text-white text-sm font-semibold">C</span>
            </div>
          </div>
          <span className="text-gray-600 text-sm font-medium">
            Trusted through 50+ projects
          </span>
        </motion.div>

        {/* Main heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-8"
        >
          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight">
            User friendly{" "}
            <span className="text-gray-400 italic font-light">
              Websites and Apps
            </span>
            <br />
            that drive results
          </h2>
        </motion.div>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="text-gray-600 text-lg sm:text-xl leading-relaxed max-w-2xl mx-auto mb-12"
        >
          In house design studio building impactful
          <br />
          websites and apps.
        </motion.p>

        {/* Action buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <button className="bg-black text-white px-8 py-3 rounded-full font-medium hover:bg-gray-800 transition-colors duration-300">
            Plans & Pricing
          </button>
          <button className="text-gray-700 px-8 py-3 rounded-full font-medium hover:text-black transition-colors duration-300">
            View Work
          </button>
        </motion.div>
      </div>
    </section>
  );
}