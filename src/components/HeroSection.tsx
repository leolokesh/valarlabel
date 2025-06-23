
import { ArrowRight, Instagram, Twitter, Facebook, Search } from 'lucide-react';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-amber-50 to-stone-100 overflow-hidden">
      {/* Inner Cover Layer - Creates the framed effect */}
      <div className="absolute inset-8 bg-gradient-to-br from-amber-100/60 via-stone-200/40 to-amber-50/60 backdrop-blur-sm border border-white/30 shadow-2xl rounded-lg overflow-hidden">
        {/* Main Content Container */}
        <div className="relative h-full">
          {/* Background Image - Model Photo */}
          <div className="absolute inset-0">
            <div 
              className="h-full w-full bg-cover bg-center bg-no-repeat"
              style={{
                backgroundImage: `url('https://images.unsplash.com/photo-1594736797933-d0501ba2fe65?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80')`
              }}
            >
              {/* Subtle overlay for better text contrast */}
              <div className="absolute inset-0 bg-gradient-to-r from-stone-900/30 via-transparent to-transparent"></div>
            </div>
          </div>

          {/* Content Overlay */}
          <div className="relative z-10 h-full flex items-center">
            <div className="container mx-auto px-8 lg:px-16">
              <div className="max-w-2xl">
                {/* Cover Story Label */}
                <div className="text-sm tracking-[0.3em] text-white/80 uppercase font-medium mb-6">
                  Cover Story
                </div>
                
                {/* Main Headline */}
                <h1 className="text-7xl lg:text-8xl xl:text-9xl font-black leading-[0.85] text-white tracking-tight mb-8 drop-shadow-lg">
                  Beyond
                  <br />
                  Beauty
                </h1>
                
                {/* Description */}
                <p className="text-lg text-white/90 leading-relaxed max-w-lg font-light mb-12 drop-shadow-md">
                  The model is proud to follow in the beauty footsteps with an eponymous beauty line that could include...
                </p>
                
                {/* CTA Button and Byline */}
                <div className="flex items-center space-x-8 mb-8">
                  <Button 
                    className="bg-transparent border border-white/40 text-white hover:bg-white/20 px-8 py-4 text-base font-medium tracking-wide transition-all duration-300 group backdrop-blur-sm rounded-full"
                  >
                    Read article
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                  
                  <span className="text-sm text-white/70 font-medium tracking-wider">by ALICE ROBBINS</span>
                </div>
              </div>
            </div>
          </div>

          {/* Social Media Icons - Right Edge */}
          <div className="absolute right-8 top-1/2 transform -translate-y-1/2 z-40 flex flex-col space-y-6">
            <a href="#" className="text-white/60 hover:text-white transition-colors duration-200 p-2">
              <Instagram className="h-5 w-5" />
            </a>
            <a href="#" className="text-white/60 hover:text-white transition-colors duration-200 p-2">
              <Twitter className="h-5 w-5" />
            </a>
            <a href="#" className="text-white/60 hover:text-white transition-colors duration-200 p-2">
              <Facebook className="h-5 w-5" />
            </a>
          </div>

          {/* Bottom Navigation Elements */}
          <div className="absolute bottom-8 left-8 right-8 flex justify-between items-end z-20">
            {/* Left - Follow indicator */}
            <div className="flex items-center space-x-2 text-white/60">
              <span className="text-sm tracking-wider">Follow</span>
              <div className="w-8 h-0.5 bg-white/40"></div>
            </div>
            
            {/* Right - Search icon */}
            <div className="text-white/60 hover:text-white transition-colors cursor-pointer">
              <Search className="h-5 w-5" />
            </div>
          </div>

          {/* Back button - Top Left */}
          <div className="absolute top-8 left-8 z-30">
            <button className="text-white/70 hover:text-white text-sm tracking-wide transition-colors duration-200">
              ← Back
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
