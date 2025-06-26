import { Sparkles } from 'lucide-react';

const SizingSection = () => {
  return (
    <section className="py-28 bg-gradient-to-b from-gray-900 to-black text-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center mb-8">
        <div className="flex items-center justify-center mb-8">
          <div className="bg-gradient-to-br from-yellow-400 via-purple-500 to-plum-500 rounded-full w-36 h-36 flex items-center justify-center shadow-2xl animate-pulse">
            <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="#432178" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-ruler w-16 h-16">
              <rect x="3" y="7" width="18" height="10" rx="2"/>
              <path d="M6 8v2" />
              <path d="M9 8v2" />
              <path d="M12 8v2" />
              <path d="M15 8v2" />
              <path d="M18 8v2" />
            </svg>
          </div>
        </div>
        <div className="flex items-center justify-center space-x-3 mb-6 animate-fade-in">
          <div className="w-12 h-0.5 bg-gradient-to-r from-purple-400 to-plum-400"></div>
          <span className="text-purple-400 font-medium tracking-wider">SIZING</span>
          <div className="w-12 h-0.5 bg-gradient-to-r from-plum-400 to-purple-400"></div>
        </div>
        <h2 className="text-5xl lg:text-6xl font-bold mb-6 font-serif text-white animate-fade-in">
          Perfect Fit. <span className="gradient-text">Every Time.</span>
        </h2>
        <div className="w-24 h-1 bg-yellow-400 mx-auto mb-8 rounded-full" />
        <p className="text-gray-400 text-xl max-w-3xl mx-auto leading-relaxed font-light animate-fade-in">
          Powered by our smart sizing guide — launching with you in mind.
        </p>
        <div className="flex items-center justify-center gap-3 mt-8 animate-scale-in">
          <span className="inline-flex items-center px-8 py-4 rounded-full bg-gradient-to-r from-yellow-400 via-purple-500 to-plum-500 shadow-2xl border-2 border-yellow-300 text-[#432178] text-2xl font-extrabold tracking-wide drop-shadow-lg transition-transform hover:scale-105">
            <Sparkles className="w-7 h-7 mr-3 text-[#432178] animate-spin-slow" />
            AI-Powered Sizing Technology
            <Sparkles className="w-7 h-7 ml-3 text-[#432178] animate-spin-slow" />
          </span>
        </div>
      </div>
    </section>
  );
};

export default SizingSection;
