import { ArrowRight, Instagram, Twitter, Facebook } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';
import MobileHeroSection from './MobileHeroSection';

const HERO_IMAGE = '/heroSectionImage.png';

// Customizable image positioning and styling options
const IMAGE_CONFIG = {
  scale: 0.95, // Increase image size (0.1 to 1.0)
  position: 'center center', // CSS object-position values
  borderRadius: '5rem', // Tailwind: rounded-xl (increased for better visual)
  hoverScale: 1.08, // Hover scale effect
  glowIntensity: 0.3, // Purple glow intensity (0 to 1)
  shadowIntensity: 0.4, // Drop shadow intensity (0 to 1)
  overlayOpacity: 0.1, // Background overlay opacity
  backgroundBlur: 'blur-sm', // Background blur effect
};

// Glow line animation configuration
const GLOW_CONFIG = {
  duration: '8s', // Animation duration
  intensity: 0.6, // Glow intensity (0 to 1)
  colors: {
    start: '#e9d5ff',
    middle: '#a78bfa', 
    end: '#facc15'
  }
};

const HERO_LINES = [
  'Chai to cheers,',
'Pitch to party,',
'Notes to nights,',
'Desk to dance,',
'Routine to rebel,',
];

const FloatingSocialIcons = () => (
  <div className="fixed right-2 sm:right-4 md:right-6 top-1/2 -translate-y-1/2 z-50 flex flex-col space-y-3 sm:space-y-6 bg-[#181e22] rounded-full px-1 sm:px-2 py-2 sm:py-4 shadow-xl">
    <a href="#" className="text-purple-400 hover:text-purple-300 transition-colors duration-200 p-1 sm:p-2 group">
      <Instagram className="h-4 w-4 sm:h-6 sm:w-6 group-hover:scale-110 transition-transform" />
    </a>
    <a href="#" className="text-purple-400 hover:text-purple-300 transition-colors duration-200 p-1 sm:p-2 group">
      <Twitter className="h-4 w-4 sm:h-6 sm:w-6 group-hover:scale-110 transition-transform" />
    </a>
    <a href="#" className="text-purple-400 hover:text-purple-300 transition-colors duration-200 p-1 sm:p-2 group">
      <Facebook className="h-4 w-4 sm:h-6 sm:w-6 group-hover:scale-110 transition-transform" />
    </a>
  </div>
);

const HeroSection = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timeout = setTimeout(() => setIndex((prev) => (prev + 1) % HERO_LINES.length), 2000);
    return () => clearTimeout(timeout);
  }, [index]);

  return (
    <>
      {/* Mobile-only redesigned hero section */}
      <MobileHeroSection />

      {/* Original design for tablet and desktop */}
      <div className="hidden sm:block">
        <FloatingSocialIcons />
        <section className="relative min-h-screen bg-gradient-to-br from-[#181e22] to-black overflow-hidden flex flex-col p-0">
          <img
            src={HERO_IMAGE}
            alt="Background sari fashion"
            className="absolute inset-0 w-full h-full object-cover opacity-60 z-0 pointer-events-none select-none"
            style={{ objectPosition: 'center 40%' }}
            draggable={true}
          />
          <div className="relative z-10">
            {/* Main card container */}
            <div className="relative mx-2 sm:mx-4 md:mx-8 lg:mx-12 my-6 sm:my-10 md:my-16 lg:my-20 rounded-[1.5rem] sm:rounded-[2rem] md:rounded-[2.5rem] overflow-hidden shadow-2xl flex flex-col lg:flex-row items-stretch bg-[#181e22]/80 backdrop-blur-md border border-purple-900/20">
            
            {/* Inner card with glow border effect */}
            <div className="absolute inset-2 sm:inset-3 rounded-[1rem] sm:rounded-[1.5rem] md:rounded-[2rem] pointer-events-none z-30">
              {/* Static glow base */}
              <div className="absolute inset-0 rounded-[2rem] shadow-[inset_0_0_0_1px_rgba(168,139,250,0.4),0_0_15px_rgba(168,139,250,0.2)]"></div>
              
              {/* Animated glow line tracing the inner card border */}
              <svg
                className="absolute inset-0 w-full h-full pointer-events-none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <defs>
                  <linearGradient id="inner-card-glow" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor={GLOW_CONFIG.colors.start} stopOpacity={GLOW_CONFIG.intensity} />
                    <stop offset="50%" stopColor={GLOW_CONFIG.colors.middle} stopOpacity={GLOW_CONFIG.intensity + 0.3} />
                    <stop offset="100%" stopColor={GLOW_CONFIG.colors.end} stopOpacity={GLOW_CONFIG.intensity} />
                  </linearGradient>
                  <filter id="card-glow-filter" x="-50%" y="-50%" width="200%" height="200%">
                    <feGaussianBlur stdDeviation="4" result="blur" />
                    <feMerge>
                      <feMergeNode in="blur" />
                      <feMergeNode in="SourceGraphic" />
                    </feMerge>
                  </filter>
                </defs>
                <rect
                  x="2"
                  y="2"
                  width="calc(100% - 4px)"
                  height="calc(100% - 4px)"
                  rx="30"
                  ry="30"
                  stroke="url(#inner-card-glow)"
                  strokeWidth="2"
                  fill="none"
                  filter="url(#card-glow-filter)"
                  strokeDasharray="800"
                  strokeDashoffset="800"
                >
                  <animate
                    attributeName="stroke-dashoffset"
                    values="800;0;800"
                    dur={GLOW_CONFIG.duration}
                    repeatCount="indefinite"
                  />
                </rect>
              </svg>
            </div>

            <div className="relative flex-1 flex flex-col justify-start px-4 sm:px-6 md:px-8 lg:px-16 xl:px-24 py-6 sm:py-8 md:py-10 lg:py-20 z-10">
              <div className="max-w-xl lg:max-w-2xl xl:max-w-3xl mt-2 sm:mt-4 md:mt-8 lg:mt-10">
                <div className="text-xs tracking-[0.2em] sm:tracking-[0.4em] text-purple-400 uppercase font-semibold mb-4 sm:mb-6 flex items-center gap-2 sm:gap-4">
                  <span className="inline-block w-6 sm:w-10 h-0.5 sm:h-1 bg-purple-400 mr-1 sm:mr-2 align-middle"></span>
                  <span className="font-serif tracking-widest text-xs sm:text-sm">Exclusive Women's Fusion Wear</span>
                </div>
                <h1 className="text-lg sm:text-xl md:text-2xl font-serif font-extrabold leading-[0.95] text-transparent bg-clip-text bg-gradient-to-r from-yellow-200 via-purple-300 to-yellow-100 drop-shadow-xl mb-3 sm:mb-4">
                  <span className="block">It's not East meets West. It's you meets you.</span>
                  <span className="block min-h-[1.8em] sm:min-h-[2.5em] mt-2 sm:mt-4">
                    <AnimatePresence mode="wait">
                      <motion.span
                        key={index}
                        initial={{ opacity: 0, y: 32 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -32 }}
                        transition={{ duration: 0.7 }}
                        className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-8xl font-serif font-bold text-white tracking-wide drop-shadow-lg"
                        style={{ letterSpacing: '0.03em' }}
                      >
                        {HERO_LINES[index]}
                      </motion.span>
                    </AnimatePresence>
                  </span>
                </h1>
                <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-serif text-neutral-200 leading-relaxed font-semibold mb-6 sm:mb-8 lg:mb-10 max-w-md flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2">
                  All while looking gorgeous{' '}
                  <span className="relative inline-block text-purple-400 font-bold ml-0 sm:ml-2 border-b-2 border-purple-300 pb-0.5 ">Like you</span>
                </p>
                <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-8 space-y-4 sm:space-y-0 mb-6 sm:mb-8">
                  <motion.div
                    className="rounded-full shadow-lg"
                    animate={{ backgroundColor: ["#181e22", "#a78bfa", "#181e22"] }}
                    transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                    whileHover={{ scale: 1.05 }}
                  >
                    <Button
                      className="bg-transparent text-white px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base font-semibold tracking-wide rounded-full flex items-center group"
                      disabled
                    >Launching Soon
                    </Button>
                  </motion.div>
                </div>
              </div>
            </div>

            <div className="relative flex-1 flex items-center justify-center min-h-[300px] sm:min-h-[400px] p-4 sm:p-6 md:p-8 lg:p-10">
              <div className="relative w-full max-w-[300px] sm:max-w-[400px] md:max-w-[500px] lg:max-w-[550px] xl:max-w-[600px] h-60 sm:h-80 md:h-96 lg:h-[500px] xl:h-[540px] flex items-center justify-center">
                {/* Background image with enhanced customization options */}
                <div 
                  className="absolute inset-0 overflow-hidden"
                  style={{
                    borderRadius: IMAGE_CONFIG.borderRadius,
                    background: `linear-gradient(135deg, rgba(24,30,34,${IMAGE_CONFIG.overlayOpacity}) 0%, rgba(168,139,250,${IMAGE_CONFIG.overlayOpacity * 0.5}) 100%)`,
                  }}
                >
                  <div 
                    className={`absolute inset-0 bg-gradient-to-tr from-purple-900/10 via-transparent to-yellow-400/10 ${IMAGE_CONFIG.backgroundBlur}`}
                    style={{
                      borderRadius: IMAGE_CONFIG.borderRadius,
                    }}
                  ></div>
                </div>
                
                {/* Main image with improved scaling and positioning */}
                <div 
                  className="relative flex items-center justify-center z-10"
                  style={{
                    width: `${IMAGE_CONFIG.scale * 100}%`,
                    height: `${IMAGE_CONFIG.scale * 100}%`,
                    borderRadius: IMAGE_CONFIG.borderRadius,
                  }}
                >
                  <img
                    src={HERO_IMAGE}
                    alt="Modern sari fashion"
                    className={`object-contain w-full h-full drop-shadow-2xl transition-transform duration-300`}
                    style={{
                      filter: `drop-shadow(0 25px 25px rgba(0, 0, 0, ${IMAGE_CONFIG.shadowIntensity})) drop-shadow(0 0 20px rgba(168, 139, 250, ${IMAGE_CONFIG.glowIntensity}))`,
                      objectPosition: IMAGE_CONFIG.position,
                      borderRadius: IMAGE_CONFIG.borderRadius,
                      transform: 'scale(1)',
                      transition: 'transform 0.3s ease-in-out'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = `scale(${IMAGE_CONFIG.hoverScale})`;
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = 'scale(1)';
                    }}
                    draggable={false}
                  />
                </div>
                
                {/* Enhanced decorative glow elements */}
                <div className="absolute -top-4 -right-4 w-20 h-20 bg-purple-400/20 rounded-full blur-xl animate-pulse"></div>
                <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-yellow-400/15 rounded-full blur-xl animate-pulse" style={{ animationDelay: '1s' }}></div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-purple-500/5 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '2s' }}></div>
              </div>
            </div>
          </div>
        </div>
      </section>
      </div>
    </>
  );
};

export default HeroSection;
