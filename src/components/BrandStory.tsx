
import { Heart, Sparkles, Globe } from 'lucide-react';

const BrandStory = () => {
  const values = [
    {
      icon: Heart,
      title: "Crafted with Purpose",
      description: "Every piece is born from passion, designed with intention, and created to empower the modern woman."
    },
    {
      icon: Sparkles,
      title: "Innovation in Tradition",
      description: "We honor age-old techniques while pushing boundaries, creating tomorrow's classics today."
    },
    {
      icon: Globe,
      title: "Global Inspiration",
      description: "Drawing from cultures worldwide, we create universal beauty that transcends borders."
    }
  ];

  return (
    <section className="py-32 bg-gradient-to-b from-black to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Story */}
        <div className="grid lg:grid-cols-2 gap-20 items-center mb-32">
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-6">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-0.5 bg-gradient-to-r from-teal-400 to-coral-400"></div>
                <span className="text-teal-400 font-medium tracking-wider">OUR STORY</span>
              </div>
              
              <h2 className="text-5xl lg:text-6xl font-bold text-white leading-tight">
                Born from a
                <br />
                <span className="gradient-text">Dream</span>
              </h2>
              
              <div className="space-y-6 text-gray-300 text-lg leading-relaxed">
                <p>
                  In the bustling lanes of old Delhi, where tradition whispers through 
                  every fabric and modernity calls from every corner, AURA was born.
                </p>
                <p>
                  We saw women caught between worlds – honoring their heritage while 
                  embracing their ambitions. We decided to create something that celebrated both.
                </p>
                <p>
                  Today, AURA stands as a testament to the power of fusion – not just in fashion, 
                  but in life itself.
                </p>
              </div>
            </div>
          </div>

          <div className="relative animate-slide-in-right">
            <div className="aspect-square bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-full relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-teal-600/30 to-coral-600/30">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center space-y-4">
                    <div className="text-8xl font-bold text-white/10">∞</div>
                    <p className="text-white text-xl font-light">Infinite Possibilities</p>
                  </div>
                </div>
              </div>
              
              {/* Floating elements */}
              <div className="absolute top-1/4 right-1/4 w-4 h-4 bg-teal-400 rounded-full animate-pulse"></div>
              <div className="absolute bottom-1/3 left-1/4 w-6 h-6 bg-coral-400 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
              <div className="absolute top-1/2 left-1/6 w-3 h-3 bg-white rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
            </div>
          </div>
        </div>

        {/* Values */}
        <div className="grid md:grid-cols-3 gap-12">
          {values.map((value, index) => {
            const Icon = value.icon;
            return (
              <div
                key={index}
                className="text-center space-y-6 animate-fade-in"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-teal-500/20 to-coral-500/20 rounded-full">
                  <Icon className="h-10 w-10 text-teal-400" />
                </div>
                <h3 className="text-2xl font-bold text-white">{value.title}</h3>
                <p className="text-gray-400 leading-relaxed">{value.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default BrandStory;
