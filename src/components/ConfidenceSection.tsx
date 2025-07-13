import React from "react";

const ConfidenceSection = () => {
  return (
    <section className="relative w-full min-h-[70vh] h-[90vh] sm:min-h-screen sm:h-[140vh] bg-theme-dark text-theme-plum overflow-hidden flex items-center justify-center px-4 sm:px-6">
      {/* Subtle Gradient Background */}
      <div className="absolute left-0 top-0 w-1/2 h-full bg-gradient-to-r from-[#3B0D60] to-transparent z-0" />

      {/* Headline Text - Mobile centered, desktop original */}
      <div className="sm:hidden absolute inset-0 flex flex-col items-center justify-center z-10 text-white px-2 w-full max-w-4xl mx-auto">
        <h2 className="text-xl text-center font-light tracking-wide leading-tight">
          MORE THAN WHAT YOU WEAR <br />
          <span className="text-sm tracking-widest font-light text-[#C084FC]">of</span> <br />
          <span className="text-6xl font-semibold">OPULENCE</span>
        </h2>
      </div>
     <div className="hidden sm:flex absolute top-[15%] sm:top-[18%] md:top-[20%] left-[45%] transform -translate-x-[45%] z-10 text-white px-2 w-full max-w-4xl items-center justify-center">
        <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-6xl font-light tracking-wide leading-tight text-center w-full">
          MORE THAN WHAT YOU WEAR <br />
          {/* <span className="text-xs sm:text-sm md:text-base lg:text-lg tracking-widest font-light text-[#C084FC]">of</span> <br /> */}
          <span className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl xl:text-[120px] 2xl:text-[250px] font-semibold relative left-[-20vw]">OPULENCE</span>
        </h2>
      </div>

      {/* Mobile: Centered image */}
      <div className="relative h-[120vh] w-full">
        <div className="sm:hidden absolute inset-0 flex items-center justify-center z-10">
          <img
            src="/opulence1.png"
            alt="Model"
            className="w-[700px] max-w-[145vw] object-contain"
          />
        </div>
        <div className="hidden sm:block absolute z-10 top-[-20px] sm:top-[-30px] md:top-[-50px] lg:top-[-70px] left-[20px] sm:left-[50px] md:left-[100px] lg:left-[200px]">
          <img
            src="/opulence1.png"
            alt="Model"
            className="w-[400px] md:w-[1100px] lg:w-[1300px] xl:w-[1400px] 2xl:w-[1600px] object-contain"
          />
        </div>
      </div>

      {/* Mobile: Top Confidence, Bottom Effortless, both centered */}
      <div className="sm:hidden absolute top-4 left-1/2 transform -translate-x-1/2 w-[90%] max-w-xs z-20 text-center text-white">
        <h3 className="text-base font-bold text-[#C084FC]">Confidence in Every Stitch</h3>
        <p className="text-sm text-[#A1A1AA] mt-2 leading-relaxed">
          Our fusion wear is more than clothing; it's a statement of her self-assurance, woven into every seam and detail.
        </p>
      </div>
      <div className="sm:hidden absolute bottom-4 left-1/2 transform -translate-x-1/2 w-[90%] max-w-xs z-20 text-center text-white">
        <h3 className="text-base font-bold text-[#C084FC]">Effortless All-Day Elegance</h3>
        <p className="text-sm text-[#A1A1AA] mt-2 leading-relaxed">
          From morning meetings to evening celebrations, Valarlabel keeps her comfortable, elegant, and inspired.
        </p>
      </div>

      {/* Desktop: original left/right layout */}
      <div className="hidden sm:block absolute left-4 md:left-6 lg:left-10 bottom-8 md:bottom-10 w-[240px] md:w-[280px] lg:w-[300px] z-20 text-left text-white">
        <h3 className="text-base md:text-lg lg:text-xl font-bold text-[#C084FC]">Confidence in Every Stitch</h3>
        <p className="text-sm md:text-base text-[#A1A1AA] mt-2 leading-relaxed">
          Our fusion wear is more than clothing; it's a statement of her self-assurance, woven into every seam and detail.
        </p>
      </div>
      <div className="hidden sm:block absolute right-4 md:right-6 lg:right-10 bottom-8 md:bottom-10 w-[240px] md:w-[280px] lg:w-[300px] z-20 text-right text-white">
        <h3 className="text-base md:text-lg lg:text-xl font-bold text-[#C084FC]">Effortless All-Day Elegance</h3>
        <p className="text-sm md:text-base text-[#A1A1AA] mt-2 leading-relaxed">
          From morning meetings to evening celebrations, Valarlabel keeps her comfortable, elegant, and inspired.
        </p>
      </div>
    </section>
  );
};

export default ConfidenceSection;











































































