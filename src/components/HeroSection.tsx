
import { ArrowRight, Play } from 'lucide-react';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen hero-gradient overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 25% 25%, #a855f7 2px, transparent 2px), radial-gradient(circle at 75% 75%, #d946ef 2px, transparent 2px)`,
          backgroundSize: '60px 60px'
        }}></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          {/* Left side - Brand Story */}
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-6">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-0.5 bg-gradient-to-r from-purple-400 to-plum-400"></div>
                <span className="text-purple-400 font-medium tracking-wider">HERITAGE REIMAGINED</span>
              </div>
              
              <h1 className="text-6xl lg:text-8xl font-bold leading-tight">
                EMBRACE
                <br />
                YOUR
                <br />
                <span className="gradient-text">AURA</span>
              </h1>
              
              <p className="text-xl text-gray-300 max-w-lg leading-relaxed">
                Where timeless traditions meet contemporary spirit. Every thread tells 
                a story of empowerment, every design celebrates the modern woman's journey.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-6">
              <Button 
                size="lg" 
                className="bg-transparent border-2 border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-black px-8 py-4 text-lg group transition-all duration-300"
              >
                DISCOVER THE STORY
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              
              <Button 
                variant="ghost" 
                size="lg" 
                className="text-white hover:text-purple-400 px-8 py-4 text-lg group"
              >
                <Play className="mr-2 h-5 w-5" />
                WATCH FILM
              </Button>
            </div>

            {/* Brand Values */}
            <div className="flex space-x-12 pt-8">
              <div>
                <div className="text-3xl font-bold text-purple-400">15+</div>
                <div className="text-sm text-gray-400 uppercase tracking-wide">Years Crafting</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-plum-400">1000+</div>
                <div className="text-sm text-gray-400 uppercase tracking-wide">Stories Told</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-purple-400">∞</div>
                <div className="text-sm text-gray-400 uppercase tracking-wide">Possibilities</div>
              </div>
            </div>
          </div>

          {/* Right side - Dynamic Visual */}
          <div className="relative animate-slide-in-right">
            <div className="relative">
              {/* Main showcase area */}
              <div className="aspect-[4/5] bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-3xl overflow-hidden relative">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 to-plum-600/20">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center space-y-4">
                      <div className="w-32 h-32 bg-gradient-to-br from-purple-400 to-plum-400 rounded-full mx-auto opacity-60 animate-pulse"></div>
                      <p className="text-white text-xl font-light">The Future of Fusion</p>
                    </div>
                  </div>
                </div>
                
                {/* Floating elements */}
                <div className="absolute top-8 right-8 bg-white/10 backdrop-blur-md rounded-2xl p-4">
                  <div className="text-white text-sm font-medium">TRENDING NOW</div>
                  <div className="text-purple-400 text-lg font-bold">Neo-Traditional</div>
                </div>
                
                <div className="absolute bottom-8 left-8 bg-white/10 backdrop-blur-md rounded-2xl p-4">
                  <div className="text-white text-sm font-medium">COLLECTION 2024</div>
                  <div className="text-plum-400 text-lg font-bold">Ethereal Dreams</div>
                </div>
              </div>

              {/* Decorative elements */}
              <div className="absolute -top-8 -right-8 w-32 h-32 bg-gradient-to-br from-plum-500 to-plum-600 rounded-full opacity-20 blur-xl animate-pulse"></div>
              <div className="absolute -bottom-8 -left-8 w-40 h-40 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full opacity-20 blur-xl animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
