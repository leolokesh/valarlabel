// src/components/SizingSection.tsx
import React from 'react';
import Sizing3D from './Sizing3D'; // <<< IMPORT YOUR SIZING3D COMPONENT

const SizingSection = () => {
  return (
    <section className="relative bg-[#181e22] text-white min-h-screen flex items-center justify-center overflow-hidden font-sans p-2 sm:p-4">
      <div className="container mx-auto max-w-7xl">
        {/* Mobile Layout */}
        <div className="lg:hidden flex flex-col space-y-12 py-8">
          {/* Mobile: SmartFit Title and Features First */}
          <div className="text-center px-4">
            <h1 className="text-4xl sm:text-5xl font-black tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-purple-500 to-purple-600 drop-shadow-xl">
              SmartFit.
            </h1>
            <div className="mt-8 space-y-6">
              <div className="flex items-center justify-center gap-4">
                <span className="text-purple-400 text-xl">✨</span>
                <p className="text-base font-medium text-gray-200 tracking-wide">Too Loose ?</p>
              </div>
              <div className="flex items-center justify-center gap-4">
                <span className="text-purple-400 text-xl">✨</span>
                <p className="text-base font-medium text-gray-200 tracking-wide">Too tight ?</p>
              </div>
              <div className="flex items-center justify-center gap-4">
                <span className="text-purple-400 text-xl">✨</span>
                <p className="text-base font-medium text-gray-200 tracking-wide">We make it Right</p>
              </div>
            </div>
          </div>

          {/* Mobile: 3D Component Second */}
          <div className="relative flex items-center justify-center h-[500px] px-4">
            <div className="absolute w-64 h-64 sm:w-80 sm:h-80 bg-gradient-to-r from-purple-500 to-purple-800 rounded-full filter blur-3xl opacity-50 animate-pulse"></div>
            <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-700 rounded-3xl p-6 sm:p-8 w-80 h-100 sm:w-96 sm:h-96 flex items-center justify-center">
              <Sizing3D/>
            </div>
          </div>

          {/* Mobile: Remaining Content Third */}
          <div className="flex flex-col px-6">
            <h2 className="text-xl sm:text-2xl font-extrabold text-white mb-6 leading-tight tracking-normal drop-shadow-sm text-center"> 
              Tired of <span className="text-purple-400">guessing</span> what size to buy?
            </h2>

            <div className="bg-gray-900/30 rounded-2xl p-6 border border-gray-700/50">
              <p className="text-sm sm:text-base text-gray-300 mb-6 leading-relaxed"> 
                What's an M here feels like an L there. You guess, you hope — and still end up returning it.
                <br /><br />
                <span className="font-semibold text-white">Enter SmartFit™ by Valar.</span> It understands how you like your clothes to fit and matches you to the right size for each style.
              </p>

              <div className="pt-4 border-t border-gray-700"> 
                <p className="text-base sm:text-lg font-bold tracking-tight text-purple-300 text-center"> 
                  <span className="mr-2">✨</span>Just the right fit — <span className="text-purple-200">first time, every time.</span>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Desktop Layout */}
        <div className="hidden lg:grid grid-cols-3 gap-8 items-center">
          {/* Left Column: Title and Rotated Text */}
          <div className="relative flex flex-col justify-center text-left h-full">
            <div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 transform -rotate-90 tracking-widest text-lg font-semibold text-purple-400 whitespace-nowrap">
              AI POWERED SIZING
            </div>
            <div className="pl-12">
              <h1 className="text-6xl lg:text-7xl font-black tracking-tighter -mt-20 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-purple-500 to-purple-600 drop-shadow-xl">
                SmartFit.
              </h1>
              <div className="mt-12 space-y-5">
                <div className="flex items-center gap-4">
                  <span className="text-purple-400 text-lg">✨</span>
                  <p className="text-md font-medium text-gray-200 tracking-wide">Too Loose ?</p>
                </div>
                <div className="flex items-center gap-4">
                  <span className="text-purple-400 text-lg">✨</span>
                  <p className="text-md font-medium text-gray-200 tracking-wide">Too tight ?</p>
                </div>
                <div className="flex items-center gap-4">
                  <span className="text-purple-400 text-lg">✨</span>
                  <p className="text-md font-medium text-gray-200 tracking-wide">We make it Right</p>
                </div>
              </div>
            </div>
          </div>

          {/* Center Column: Visuals */}
          <div className="relative flex items-center justify-center h-[600px]">
            <div className="absolute w-96 h-96 bg-gradient-to-r from-purple-500 to-purple-800 rounded-full filter blur-3xl opacity-50 animate-pulse"></div>
            <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-700 rounded-3xl p-8 h-30 w-30 flex items-center justify-center">
              <Sizing3D/>
            </div>
          </div>

          {/* Right Column: Content */}
          <div className="flex flex-col justify-center text-left"> 

            <h2 className="text-3xl lg:text-4xl font-extrabold text-white mb-4 leading-tight tracking-normal drop-shadow-sm"> 
              Tired of <span className="text-purple-400">guessing</span> what size to buy?
            </h2>

            <p className="text-lg text-gray-300 mb-6 max-w-md leading-normal border-l-2 border-purple-500 pl-3 py-0.5"> 
              What's an M here feels like an L there. You guess, you hope — and still end up returning it.
              <br /><br />
              <span className="font-semibold text-white">Enter SmartFit™ by Valar.</span> It understands how you like your clothes to fit and matches you to the right size for each style.
            </p>

            <div className="mt-auto pt-4 border-t border-gray-800"> 
              <p className="text-lg md:text-xl font-bold tracking-tight text-purple-300"> 
                <span className="mr-1">✨</span>Just the right fit — <span className="text-purple-200">first time, every time.</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SizingSection;