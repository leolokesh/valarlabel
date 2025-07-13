import React from 'react';
import { motion } from 'framer-motion';

const sectionVariants = {
  hidden: { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.9 } },
};

const imageVariants = {
  hidden: { opacity: 0, scale: 0.85 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.7 } },
};

const textVariants = {
  hidden: { opacity: 0, x: -40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7 } },
};

const beyondfashion = () => {
  return (
    <motion.section
      className="relative min-h-screen bg-theme-dark text-theme-plum px-4 sm:px-6 md:px-10 py-12 sm:py-16 md:py-20 overflow-hidden"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={sectionVariants}
    >
      {/* Main Content Wrapper */}
      <div className="relative z-10 max-w-7xl mx-auto flex flex-col md:flex-row gap-8 sm:gap-10 items-center justify-between">
        {/* Left Text Block */}
        <motion.div className="flex-1 text-center md:text-left" variants={textVariants}>
          <h1 className="text-5xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-serif leading-tight tracking-tight mb-4 sm:mb-6">
            <span className="text-plum-400 text-6xl sm:text-5xl md:text-6xl xl:text-8xl">Beyond </span>
            <br />
            <span className="text-white text-6xl sm:text-5xl md:text-6xl xl:text-8xl">Fashion</span>
          </h1>
          <p className="text-plum-500 text-xs sm:text-sm mb-4 sm:mb-6">
            We're not just creating clothes. We're crafting experiences and celebrating the multifaceted nature of modern womanhood.
          </p>
        </motion.div>

        {/* Center Image - Highlighted */}
        <motion.div className="flex-1 relative order-first md:order-none" variants={imageVariants}>
          {/* Randomly placed text near the image, adjusted for mobile */}
          <motion.p 
            className="relative -left-0 sm:-left-1 -top-8 sm:-top-12 md:-top-16 text-xs sm:text-sm text-center md:text-right pr-0 md:pr-6 text-gray-200 w-full md:w-66" 
            initial="hidden" 
            whileInView="visible" 
            viewport={{ once: true }} 
            variants={textVariants}
          >
            <span className="text-white">every cut, curve, and contour serves </span>
            <br />
            <span className="text-plum-400">comfort, grace and ease of wear</span>
          </motion.p>
          <motion.div className="w-[200px] h-[200px] sm:w-[240px] sm:h-[240px] md:w-[280px] md:h-[280px] rounded-full border-2 border-dashed border-plum-400 overflow-hidden mx-auto" variants={imageVariants}>
            <img
              src="cutcurve.png"
              alt="Main model"
              className="w-full h-60 sm:h-72 md:h-80 object-cover"
            />
          </motion.div>
        </motion.div>

        {/* Right Column */}
        <motion.div className="flex-1 flex flex-col gap-4 sm:gap-6 items-center md:items-end" variants={textVariants}>
          <motion.div className="w-[120px] h-[120px] sm:w-[150px] sm:h-[150px] md:w-[180px] md:h-[180px] rounded-full border border-dashed border-plum-400 overflow-hidden" variants={imageVariants}>
            <img
              src="empoweredWomen.png"
              alt="model"
              className="w-full h-full object-cover"
            />
          </motion.div>
          <motion.p 
            className="text-xs sm:text-sm text-center md:text-right mt-1 sm:mt-2 pr-0 md:pr-6" 
            initial="hidden" 
            whileInView="visible" 
            viewport={{ once: true }} 
            variants={textVariants}
          >
            <span className="text-white">Community Driven— </span>
            <br />
            <span className="text-plum-400">For women, by vision — building a future powered by her</span>
          </motion.p>
          <motion.div className="w-[140px] h-[140px] sm:w-[170px] sm:h-[170px] md:w-[200px] md:h-[200px] rounded-full border border-dashed border-plum-900 overflow-hidden" variants={imageVariants}>
            <img
              src="madeInIndia.png"
              alt="model"
              className="w-full h-full object-cover"
            />
          </motion.div>
          <motion.p 
            className="text-xs sm:text-sm mt-1 sm:mt-2 text-center md:text-left" 
            initial="hidden" 
            whileInView="visible" 
            viewport={{ once: true }} 
            variants={textVariants}
          >
            <span className="text-plum-400">Made in India, for the world — </span>
            <br />
            <span className="text-white">supporting local artisans and redefining fusion wear on a global stage.</span>
          </motion.p>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default beyondfashion;
