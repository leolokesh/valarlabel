import { Heart, Sparkles, Globe } from 'lucide-react';
const BrandStory = () => {
  return <section className="py-32 bg-theme-dark text-theme-plum">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Story */}
        <div className="grid lg:grid-cols-2 gap-20 items-center mb-32">
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-6">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-0.5 bg-gradient-to-r from-purple-400 to-plum-400"></div>
                <span className="text-purple-400 font-medium tracking-wider">OUR STORY</span>
              </div>
              
              <h2 className="text-4xl text-white leading-tight font-bold lg:text-5xl">
                Redefining elegance 
                <br />
                <span className="gradient-text text-center text-5xl">for the modern women</span>
              </h2>
              
              <div className="space-y-6 text-gray-300 text-lg leading-relaxed">
                <p>Our women’s fusion wear brings together the beauty of cultural heritage and modern style. Each piece is made to help you feel confident and stand out—combining comfort, elegance, and versatility for your busy day.</p>
              </div>
            </div>
          </div>

          <div className="relative animate-slide-in-right">
            <div className="aspect-square bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-full relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-600/30 to-plum-600/30">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center space-y-4">
                    <div className="text-8xl font-bold text-white/10">∞</div>
                    <p className="text-white text-xl font-light">Infinite Possibilities</p>
                  </div>
                </div>
              </div>
              
              {/* Floating elements */}
              <div className="absolute top-1/4 right-1/4 w-4 h-4 bg-purple-400 rounded-full animate-pulse"></div>
              <div className="absolute bottom-1/3 left-1/4 w-6 h-6 bg-plum-400 rounded-full animate-pulse" style={{
              animationDelay: '0.5s'
            }}></div>
              <div className="absolute top-1/2 left-1/6 w-3 h-3 bg-white rounded-full animate-pulse" style={{
              animationDelay: '1s'
            }}></div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default BrandStory;