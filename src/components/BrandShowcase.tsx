import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const BrandShowcase = () => {
  const collections = [
    {
      id: 1,
      title: "Urban Elegance",
      subtitle: "City lights, timeless nights",
      description: "For the woman who navigates boardrooms by day and art galleries by night. Sophistication with an edge- tailored silhouettes, sleek lines, and cultural undertones",
      image: "urbanElegance.png"  ,
      year: "2024"
    },
    {
      id: 2,
      title: "Heritage Redefined",
      subtitle: "Where tradition meets tomorrow",
      description: "Comfort-first fusion wear for the everyday minimalist. Light fabrics, heritage prints, and relaxed fits — rooted in culture, built for life.",
      image: "heritageRefined.png",
      year: "2024"
    },
    {
      id: 3,
      title: "Festival Dreams",
      subtitle: "Celebrate in style",
      description: "Every celebration deserves a masterpiece. Designs that capture joy, tradition, and the magic of special moments.",
      image: "festivalElegance.png",
      year: "2024"
    }
  ];

  return (
    <section className="py-12 sm:py-16 md:py-20 bg-theme-dark text-theme-plum">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16 md:mb-20 animate-fade-in">
          <div className="flex items-center justify-center space-x-2 sm:space-x-3 mb-4 sm:mb-6">
            <div className="w-8 sm:w-12 h-0.5 bg-gradient-to-r from-purple-400 to-plum-400"></div>
            <span className="text-purple-400 font-medium tracking-wider text-sm sm:text-base">COLLECTIONS</span>
            <div className="w-8 sm:w-12 h-0.5 bg-gradient-to-r from-plum-400 to-purple-400"></div>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6">
            Stories in <span className="gradient-text">Motion</span>
          </h2>
          <p className="text-gray-400 text-base sm:text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            Each collection is a chapter in our ongoing narrative of empowerment, 
            creativity, and the endless possibilities of fusion fashion.
          </p>
        </div>

        {/* Collections Grid */}
        <div className="space-y-16 sm:space-y-24 md:space-y-32">
          {collections.map((collection, index) => (
            <div
              key={collection.id}
              className={`grid lg:grid-cols-2 gap-8 sm:gap-12 md:gap-16 items-center ${
                index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
              }`}
            >
              {/* Content */}
              <div 
                className={`space-y-6 sm:space-y-8 animate-fade-in ${
                  index % 2 === 1 ? 'lg:col-start-2' : ''
                }`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="space-y-3 sm:space-y-4">
                  <div className="flex items-center space-x-3 sm:space-x-4">
                    <span className="text-plum-400 font-mono text-xs sm:text-sm">{collection.year}</span>
                    <div className="w-6 sm:w-8 h-px bg-gray-600"></div>
                  </div>
                  
                  <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white">
                    {collection.title}
                  </h3>
                  
                  <p className="text-purple-400 text-lg sm:text-xl font-light">
                    {collection.subtitle}
                  </p>
                  
                  <p className="text-gray-300 text-sm sm:text-base md:text-lg leading-relaxed max-w-lg">
                    {collection.description}
                  </p>
                </div>

                <Button 
                  variant="ghost" 
                  className="text-white hover:text-purple-400 px-0 text-base sm:text-lg group"
                >
                  EXPLORE COLLECTION
                  <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>

              {/* Visual */}
              <div 
                className={`animate-scale-in ${
                  index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''
                }`}
                style={{ animationDelay: `${index * 0.2 + 0.1}s` }}
              >
                <div className="relative group cursor-pointer">
                  <div 
                    className={`aspect-[4/5] rounded-2xl sm:rounded-3xl relative overflow-hidden transition-transform duration-500 group-hover:scale-105 ${collection.image.endsWith('.png') ? '' : collection.image}`}
                    style={collection.image.endsWith('.png') ? { backgroundImage: `url(/${collection.image})`, backgroundSize: 'cover', backgroundPosition: 'center' } : {}}
                  >
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300"></div>
                    
                    {/* Collection number */}
                    <div className="absolute top-4 sm:top-6 md:top-8 left-4 sm:left-6 md:left-8">
                      <span className="text-3xl sm:text-4xl md:text-6xl font-bold text-white/20 font-mono">
                        0{collection.id}
                      </span>
                    </div>
                    
                    {/* Center design element */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center space-y-4">
                        <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 bg-white/10 rounded-full backdrop-blur-md flex items-center justify-center">
                          <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-gradient-to-br from-purple-400 to-plum-400 rounded-full"></div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Bottom badge */}
                    <div className="absolute bottom-4 sm:bottom-6 md:bottom-8 right-4 sm:right-6 md:right-8 bg-white/10 backdrop-blur-md rounded-full px-3 sm:px-4 md:px-6 py-2 sm:py-3">
                      <span className="text-white font-medium text-xs sm:text-sm">NEW</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BrandShowcase;
