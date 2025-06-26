import { ArrowRight, Instagram, Twitter, Facebook } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';

const HERO_IMAGE = '/girl-sari.jpg';

const HERO_LINES = [
  'Comfort in chaos',
  'Confident, daily',
  'Grow without shrinking',
  'Stay in your power',
  'Reflect who you are'
];

const FloatingSocialIcons = () => (
  <div className="fixed right-6 top-1/2 -translate-y-1/2 z-50 flex flex-col space-y-6 bg-[#181e22] rounded-full px-2 py-4 shadow-xl">
    <a href="#" className="text-purple-400 hover:text-purple-300 transition-colors duration-200 p-2 group">
      <Instagram className="h-6 w-6 group-hover:scale-110 transition-transform" />
    </a>
    <a href="#" className="text-purple-400 hover:text-purple-300 transition-colors duration-200 p-2 group">
      <Twitter className="h-6 w-6 group-hover:scale-110 transition-transform" />
    </a>
    <a href="#" className="text-purple-400 hover:text-purple-300 transition-colors duration-200 p-2 group">
      <Facebook className="h-6 w-6 group-hover:scale-110 transition-transform" />
    </a>
  </div>
);

const HeroSection = () => {
  const [index, setIndex] = useState(0);

  // Loop animation
  useEffect(() => {
    const timeout = setTimeout(() => setIndex((prev) => (prev + 1) % HERO_LINES.length), 2000);
    return () => clearTimeout(timeout);
  }, [index]);

  return (
    <>
      <FloatingSocialIcons />
      <section className="relative min-h-screen bg-gradient-to-br from-[#181e22] to-black overflow-hidden flex flex-col p-0">
        {/* Opaque background image for the section */}
        <img
          src={HERO_IMAGE}
          alt="Background sari fashion"
          className="absolute inset-0 w-full h-full object-cover opacity-20 z-0 pointer-events-none select-none"
          draggable={true}
        />
        <div className="relative z-10">
        {/* Card Container with margin */}
        <div className="relative mx-12 my-20 rounded-[2.5rem] overflow-hidden shadow-2xl flex flex-col lg:flex-row items-stretch bg-[#181e22]">
          <div className="relative flex-1 flex flex-col justify-start px-8 lg:px-20 xl:px-32 py-39 z-10">
            <div className="max-w-xl mt-40">
              <div className="text-xs tracking-[0.4em] text-purple-400 uppercase font-semibold mb-6 flex items-center gap-4">
                <span className="inline-block w-10 h-1 bg-purple-400 mr-2 align-middle"></span>
                <span className="font-serif tracking-widest">This is Valar</span>
              </div>
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-serif font-extrabold leading-[0.95] text-transparent bg-clip-text bg-gradient-to-r from-yellow-200 via-purple-300 to-yellow-100 drop-shadow-xl mb-4">
                <span className="block">
                  Crafted for Chaos and calm
                </span>
                <span className="block min-h-[2.5em] mt-4">
                  <AnimatePresence mode="wait">
                    <motion.span
                      key={index}
                      initial={{ opacity: 0, y: 32 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -32 }}
                      transition={{ duration: 0.7 }}
                      className="text-5xl sm:text-6xl md:text-7xl font-serif font-bold text-white tracking-wide drop-shadow-lg"
                      style={{ letterSpacing: '0.03em' }}
                    >
                      {HERO_LINES[index]}
                    </motion.span>
                  </AnimatePresence>
                </span>
              </h1>
              <p className="text-xl sm:text-2xl font-serif text-neutral-200 leading-relaxed font-semibold mb-10 max-w-md flex items-center gap-2">
                All while looking gorgeous{' '}
                <span className="relative inline-block text-purple-400 font-bold ml-2 border-b-2 border-purple-400 pb-0.5 ">
                  Like you
                </span>
              </p>
              <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-8 space-y-6 sm:space-y-0 mb-8">
                <Button
                  className="bg-black hover:bg-yellow-400 hover:text-black text-white px-8 py-4 text-base font-semibold tracking-wide rounded-full shadow-lg transition-all duration-300 flex items-center group"
                  disabled
                >
                  Launching Soon
                </Button>
              </div>
            </div>
          </div>

          {/* Right */}
          <div className="relative flex-1 flex items-end justify-end min-h-[400px] p-6 lg:p-0">
            <div className="relative w-full h-96 lg:h-full lg:w-[520px] xl:w-[600px] flex items-end justify-end">
              <img
                src={HERO_IMAGE}
                alt="Modern sari fashion"
                className="object-contain object-right h-full w-full drop-shadow-2xl rounded-2xl"
                draggable={false}
              />
            </div>
          </div>
        </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
