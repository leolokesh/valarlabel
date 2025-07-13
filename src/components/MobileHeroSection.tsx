import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { useEffect, useState } from 'react';

const HERO_IMAGE = '/heroSectionImage.png'; // Ensure this image is high-quality and visually striking

const HERO_LINES = [
  'Chai to cheers,',
  'Pitch to party,',
  'Notes to nights,',
  'Desk to dance,',
  'Routine to rebel,',
];

const MobileHeroSection = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timeout = setTimeout(() => setIndex((prev) => (prev + 1) % HERO_LINES.length), 2000);
    return () => clearTimeout(timeout);
  }, [index]);

  return (
    <div className="block sm:hidden">
      <section className="relative min-h-screen bg-gradient-to-br from-[#181e22] to-black overflow-hidden flex items-center justify-center p-4 pt-8 pb-8">
        {/* Background image like desktop version */}
        <img
          src={HERO_IMAGE}
          alt="Background sari fashion"
          className="absolute inset-0 w-full h-full object-cover opacity-60 z-0 pointer-events-none select-none"
          style={{ objectPosition: 'center 50%' }}
        />

        {/* Grey card container for mobile only - larger size */}
        <div className="relative z-10 w-full max-w-lg rounded-2xl shadow-2xl flex flex-col items-center bg-gray-800/90 backdrop-blur-md border border-gray-600/30 p-10">
          {/* Text content */}
          <div className="text-center space-y-3 mb-6">
            <div className="text-xs tracking-[0.15em] text-purple-400 uppercase font-semibold mb-3">
              <span className="font-serif tracking-wider text-xs">Exclusive Women's Fusion Wear</span>
            </div>

            {/* Main tagline - split into two lines */}
            <h1 className="text-xl sm:text-xl md:text-3xl font-serif font-extrabold leading-[1.50] text-transparent bg-clip-text bg-gradient-to-r from-yellow-200 via-purple-300 to-yellow-100 drop-shadow-xl mb-9 sm:mb-9 py-4">
                              <span className="block">It's not East meets West. It's you meets you.</span>
                            </h1>

            {/* Animated hero lines - larger font size */}
            <div className="min-h-[9.5em] mb-3">
              <AnimatePresence mode="wait">
                <motion.span
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.7 }}
                  className="text-6xl font-serif font-bold text-white tracking-wide drop-shadow-lg block"
                  style={{ letterSpacing: '0.03em' }}
                >
                  {HERO_LINES[index]}
                </motion.span>
              </AnimatePresence>
            </div>

            <div className="mb-4"></div>

            <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-serif text-neutral-200 leading-relaxed font-semibold mb-6 sm:mb-8 lg:mb-10 max-w-md flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2">
                  All while looking gorgeous{' '}
                  <span className="relative inline-block text-purple-400 font-bold ml-0 sm:ml-2 border-b-2 border-purple-300 pb-2.5 ">Like you</span>
                </p>
          </div>

          {/* Image with glowing outline - larger size */}
          <div className="relative w-48 h-48 mb-12">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-purple-300 rounded-full blur-md opacity-60 animate-pulse"></div>
            <div className="relative w-full h-full rounded-full overflow-hidden border-2 border-purple-400 shadow-lg shadow-purple-500/40">
              <img
                src={HERO_IMAGE}
                alt="Modern sari fashion"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Launching Soon button */}
          <motion.div
            className="rounded-full shadow-lg"
            animate={{ backgroundColor: ["#374151", "#a78bfa", "#374151"] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            whileHover={{ scale: 1.05 }}
          >
            <Button
              className="bg-transparent text-white px-6 py-2.5 text-sm font-semibold tracking-wide rounded-full flex items-center"
              disabled
            >
              Launching Soon
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default MobileHeroSection;