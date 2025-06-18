
import { ArrowRight, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen hero-gradient overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 25% 25%, #14b8a6 2px, transparent 2px), radial-gradient(circle at 75% 75%, #f05956 2px, transparent 2px)`,
          backgroundSize: '60px 60px'
        }}></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Content */}
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-4">
              <div className="flex items-center space-x-2 text-teal-400">
                <Star className="h-5 w-5 fill-current" />
                <span className="text-sm font-medium">NEW COLLECTION</span>
              </div>
              
              <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                YOUR
                <br />
                <span className="gradient-text">FUSION</span>
                <br />
                STORY
              </h1>
              
              <p className="text-lg text-gray-300 max-w-md">
                Discover the perfect blend of traditional elegance and contemporary style. 
                Each piece tells a story of heritage reimagined for the modern woman.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-teal-500 hover:bg-teal-600 text-white px-8 py-3 text-lg group"
              >
                SHOP NOW
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              
              <Button 
                variant="outline" 
                size="lg" 
                className="border-white/20 text-white hover:bg-white/10 px-8 py-3 text-lg"
              >
                EXPLORE COLLECTION
              </Button>
            </div>

            {/* Stats */}
            <div className="flex space-x-8 pt-8">
              <div>
                <div className="text-2xl font-bold text-teal-400">500+</div>
                <div className="text-sm text-gray-400">Unique Designs</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-coral-400">10K+</div>
                <div className="text-sm text-gray-400">Happy Customers</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-teal-400">4.9★</div>
                <div className="text-sm text-gray-400">Customer Rating</div>
              </div>
            </div>
          </div>

          {/* Right side - Featured Product */}
          <div className="relative animate-slide-in-right">
            <div className="relative bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl p-8 shadow-2xl">
              {/* Product showcase */}
              <div className="space-y-6">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-xl font-semibold text-white">Ethereal Fusion</h3>
                    <p className="text-gray-400">Indo-Western Kurta Set</p>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-teal-400">₹2,999</div>
                    <div className="text-sm text-gray-400 line-through">₹4,999</div>
                  </div>
                </div>

                {/* Mock product image area */}
                <div className="aspect-square bg-gradient-to-br from-teal-600/20 to-coral-600/20 rounded-2xl flex items-center justify-center">
                  <div className="text-center space-y-2">
                    <div className="w-20 h-20 bg-gradient-to-br from-teal-400 to-coral-400 rounded-full mx-auto opacity-60"></div>
                    <p className="text-gray-400 text-sm">Featured Design</p>
                  </div>
                </div>

                {/* Size selection */}
                <div className="space-y-3">
                  <p className="text-white font-medium">SIZE</p>
                  <div className="flex space-x-3">
                    {['S', 'M', 'L', 'XL'].map((size) => (
                      <button
                        key={size}
                        className="w-12 h-12 border border-gray-600 rounded-lg text-white hover:border-teal-400 hover:text-teal-400 transition-colors"
                      >
                        {size}
                      </button>
                    ))}
                  </div>
                </div>

                <Button className="w-full bg-teal-500 hover:bg-teal-600 text-white py-3">
                  ADD TO CART
                </Button>
              </div>

              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-coral-500 to-coral-600 rounded-full opacity-20 blur-xl"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-gradient-to-br from-teal-500 to-teal-600 rounded-full opacity-20 blur-xl"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
