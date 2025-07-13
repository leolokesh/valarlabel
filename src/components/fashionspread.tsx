// components/FashionSpread.jsx
import React from 'react';

const FashionSpread = () => {
  return (
    <section className="w-full min-h-screen bg-theme-dark text-theme-plum flex flex-col md:flex-row px-4 sm:px-6 md:px-10 py-10 sm:py-16 md:py-20 gap-6 sm:gap-8 md:gap-10">
      {/* Left Column */}
      <div className="flex-1 flex flex-col gap-6 sm:gap-8 justify-center">
        <div>
          <h2 className="text-base sm:text-lg font-bold uppercase tracking-wide text-purple-400">REDEFINING ELEGANCE</h2>
          <p className="text-xs sm:text-sm mt-2 text-gray-300 max-w-md">
            Our women's fusion wear brings together the beauty of cultural heritage and modern style. Each piece is made to help you feel confident and stand out—combining comfort, elegance, and versatility for your busy day.
          </p>
        </div>
        <div className="mt-4 sm:mt-6">
          <img
            src="redinedElegance1.png"
            alt="Fashion Model 1"
            className="w-full h-auto object-cover max-h-[240px] sm:max-h-[300px] md:max-h-[340px] rounded-xl shadow-lg"
          />
        </div>
      </div>

      {/* Right Column */}
      <div className="flex-1 flex flex-col justify-between relative items-center">
        {/* Vertical MODERN WOMEN text - Hidden on mobile, adjusted for tablet */}
        <div className="absolute left-[60px] sm:left-[80px] md:left-[90px] top-[75%] sm:top-[80%] md:top-[85%] -translate-y-1/2 text-white text-4xl sm:text-6xl md:text-8xl font-light leading-none tracking-widest rotate-[-90deg] origin-left whitespace-nowrap z-10 hidden sm:block">
          <span className="block font-serif font-bold text-plum-400">modern</span>
          <span className="block ml-6 sm:ml-8 md:ml-10 font-serif font-bold text-plum-400">women</span>
        </div>
        <div className="w-full flex justify-end">
          <img
            src="redefingElegance.jpg"
            alt="Fashion Model 2"
            className="w-[90%] sm:w-[85%] h-auto object-cover max-h-[350px] sm:max-h-[450px] md:max-h-[510px] rounded-xl shadow-lg"
          />
        </div>
        <div className="mt-4 sm:mt-6 text-purple-400 text-xs sm:text-sm tracking-wider absolute bottom-0 right-0 pr-2">&lt; 02 &gt;</div>
      </div>
    </section>
  );
};

export default FashionSpread;
