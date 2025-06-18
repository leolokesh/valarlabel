
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const BrandShowcase = () => {
  const collections = [
    {
      id: 1,
      title: "Heritage Redefined",
      subtitle: "Where tradition meets tomorrow",
      description: "Ancient weaving techniques reimagined for the contemporary woman who honors her roots while embracing the future.",
      image: "bg-gradient-to-br from-purple-600/40 to-pink-600/40",
      year: "2024"
    },
    {
      id: 2,
      title: "Urban Elegance",
      subtitle: "City lights, timeless nights",
      description: "For the woman who navigates boardrooms by day and art galleries by night. Sophistication with an edge.",
      image: "bg-gradient-to-br from-blue-600/40 to-cyan-600/40",
      year: "2024"
    },
    {
      id: 3,
      title: "Festival Dreams",
      subtitle: "Celebrate in style",
      description: "Every celebration deserves a masterpiece. Designs that capture joy, tradition, and the magic of special moments.",
      image: "bg-gradient-to-br from-green-600/40 to-teal-600/40",
      year: "2024"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-gray-900 to-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-20 animate-fade-in">
          <div className="flex items-center justify-center space-x-3 mb-6">
            <div className="w-12 h-0.5 bg-gradient-to-r from-teal-400 to-coral-400"></div>
            <span className="text-teal-400 font-medium tracking-wider">COLLECTIONS</span>
            <div className="w-12 h-0.5 bg-gradient-to-r from-coral-400 to-teal-400"></div>
          </div>
          <h2 className="text-5xl lg:text-6xl font-bold mb-6">
            Stories in <span className="gradient-text">Motion</span>
          </h2>
          <p className="text-gray-400 text-xl max-w-3xl mx-auto leading-relaxed">
            Each collection is a chapter in our ongoing narrative of empowerment, 
            creativity, and the endless possibilities of fusion fashion.
          </p>
        </div>

        {/* Collections Grid */}
        <div className="space-y-32">
          {collections.map((collection, index) => (
            <div
              key={collection.id}
              className={`grid lg:grid-cols-2 gap-16 items-center ${
                index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
              }`}
            >
              {/* Content */}
              <div 
                className={`space-y-8 animate-fade-in ${
                  index % 2 === 1 ? 'lg:col-start-2' : ''
                }`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <span className="text-coral-400 font-mono text-sm">{collection.year}</span>
                    <div className="w-8 h-px bg-gray-600"></div>
                  </div>
                  
                  <h3 className="text-4xl lg:text-5xl font-bold text-white">
                    {collection.title}
                  </h3>
                  
                  <p className="text-teal-400 text-xl font-light">
                    {collection.subtitle}
                  </p>
                  
                  <p className="text-gray-300 text-lg leading-relaxed max-w-lg">
                    {collection.description}
                  </p>
                </div>

                <Button 
                  variant="ghost" 
                  className="text-white hover:text-teal-400 px-0 text-lg group"
                >
                  EXPLORE COLLECTION
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
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
                  <div className={`aspect-[4/5] ${collection.image} rounded-3xl relative overflow-hidden transition-transform duration-500 group-hover:scale-105`}>
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300"></div>
                    
                    {/* Collection number */}
                    <div className="absolute top-8 left-8">
                      <span className="text-6xl font-bold text-white/20 font-mono">
                        0{collection.id}
                      </span>
                    </div>
                    
                    {/* Center design element */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center space-y-4">
                        <div className="w-24 h-24 bg-white/10 rounded-full backdrop-blur-md flex items-center justify-center">
                          <div className="w-12 h-12 bg-gradient-to-br from-teal-400 to-coral-400 rounded-full"></div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Bottom badge */}
                    <div className="absolute bottom-8 right-8 bg-white/10 backdrop-blur-md rounded-full px-6 py-3">
                      <span className="text-white font-medium">NEW</span>
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
