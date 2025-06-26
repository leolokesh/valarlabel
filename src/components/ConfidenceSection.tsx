import React from 'react';

const ConfidenceSection = () => {
return (
    <section className="py-20 bg-gradient-to-b from-gray-900 to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center mb-14">
          <div className="hidden sm:block w-24 h-1 bg-purple-400 rounded-full mr-4" />
          <h2 className="text-2xl lg:text-3xl font-extrabold text-purple-300 tracking-widest text-center font-sans mx-2">
            MORE THAN WHAT YOU WEAR
          </h2>
          <div className="hidden sm:block w-24 h-1 bg-purple-400 rounded-full ml-4" />
        </div>
            <div className="grid md:grid-cols-2 gap-12">
                {/* Left Card */}
                <div className="flex flex-col justify-end min-h-[320px] relative rounded-3xl overflow-hidden shadow-lg bg-gradient-to-b from-white/10 to-purple-400/10">
                    <img
                        src="/girl-sari.jpg"
                        alt="Confident woman in fusion wear"
                        className="absolute top-0 left-0 w-full h-full object-cover object-left opacity-30 pointer-events-none select-none"
                    />
                    <div className="relative z-10 p-10 mt-auto">
                        <h3 className="text-4xl lg:text-5xl font-bold text-white mb-4 drop-shadow-lg font-serif">
                            Confidence in Every Stitch
                        </h3>
                        <p className="text-gray-300 text-lg leading-relaxed font-light drop-shadow-md max-w-lg">
                            Our fusion wear is more than clothing; it's a statement of her self-assurance, woven into every seam and detail.
                        </p>
                    </div>
                </div>
                {/* Right Card */}
                <div className="flex flex-col justify-end min-h-[320px] relative rounded-3xl overflow-hidden shadow-lg bg-gradient-to-b from-white/10 to-purple-400/10">
                    <img
                        src="/girl-sari1.png"
                        alt="Effortless All-Day Elegance"
                        className="absolute top-0 left-0 w-full h-full object-cover object-left opacity-30 pointer-events-none select-none"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-purple-700/70 to-transparent" />
                    <div className="relative z-10 p-10 mt-auto">
                        <h3 className="text-4xl lg:text-5xl font-bold text-white mb-4 drop-shadow-lg font-serif">
                            Effortless All-Day Elegance
                        </h3>
                        <p className="text-gray-300 text-lg leading-relaxed font-light drop-shadow-md max-w-lg">
                            From morning meetings to evening celebrations, Valarlabel keeps her comfortable, elegant, and inspired.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </section>
);
};

export default ConfidenceSection;
