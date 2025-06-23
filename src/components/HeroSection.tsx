
import { ArrowRight, Instagram, Twitter, Facebook, Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-stone-100 to-amber-50 overflow-hidden">
      {/* Navigation */}
      <div className="absolute top-8 left-8 right-8 z-50 flex justify-between items-center">
        {/* Logo */}
        <div className="text-3xl font-serif font-bold tracking-wider text-stone-800">
          VOGUE
        </div>
        
        {/* Menu */}
        <div className="flex items-center space-x-3 text-stone-700">
          <span className="text-sm font-medium tracking-widest uppercase">Menu</span>
          <Menu className="h-6 w-6" />
        </div>
      </div>

      {/* Main Content Container */}
      <div className="relative h-screen flex">
        {/* Left Content - Text Section */}
        <div className="w-full lg:w-1/2 flex items-center justify-start px-8 lg:px-16 xl:px-24 z-20">
          <div className="max-w-lg animate-fade-in">
            {/* Cover Story Label */}
            <div className="text-xs tracking-[0.4em] text-stone-600 uppercase font-medium mb-6 opacity-80">
              Cover Story
            </div>
            
            {/* Main Headline */}
            <h1 className="text-6xl lg:text-7xl xl:text-8xl font-black leading-[0.9] text-stone-800 tracking-tight mb-8 animate-fade-in" style={{ animationDelay: '0.2s' }}>
              Beyond
              <br />
              Beauty
            </h1>
            
            {/* Description */}
            <p className="text-lg text-stone-700 leading-relaxed font-light mb-10 animate-fade-in" style={{ animationDelay: '0.4s' }}>
              Exploring the intersection of art, culture, and self-expression through the lens of contemporary beauty standards and timeless elegance.
            </p>
            
            {/* CTA Button and Byline */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-8 space-y-6 sm:space-y-0 animate-fade-in" style={{ animationDelay: '0.6s' }}>
              <Button 
                className="bg-stone-800 hover:bg-stone-700 text-white px-8 py-4 text-base font-medium tracking-wide transition-all duration-300 group rounded-none"
              >
                Read article
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              
              <span className="text-sm text-stone-600 font-medium tracking-wider uppercase">by Alice Robbins</span>
            </div>
          </div>
        </div>

        {/* Right Content - Image Section */}
        <div className="absolute inset-0 lg:relative lg:w-1/2 flex items-center justify-end">
          <div className="relative w-full h-full lg:h-4/5 lg:max-w-md xl:max-w-lg">
            {/* Model Portrait */}
            <div 
              className="w-full h-full bg-cover bg-center bg-no-repeat rounded-none lg:rounded-lg shadow-2xl"
              style={{
                backgroundImage: `url('https://images.unsplash.com/photo-1594736797933-d0501ba2fe65?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80')`
              }}
            >
              {/* Subtle gradient overlay for mobile text readability */}
              <div className="absolute inset-0 bg-gradient-to-r from-stone-100/40 via-transparent to-transparent lg:hidden"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Social Media Icons - Right Edge */}
      <div className="absolute right-8 top-1/2 transform -translate-y-1/2 z-40 flex flex-col space-y-6">
        <a href="#" className="text-stone-600 hover:text-stone-800 transition-colors duration-200 p-2 group">
          <Instagram className="h-5 w-5 group-hover:scale-110 transition-transform" />
        </a>
        <a href="#" className="text-stone-600 hover:text-stone-800 transition-colors duration-200 p-2 group">
          <Twitter className="h-5 w-5 group-hover:scale-110 transition-transform" />
        </a>
        <a href="#" className="text-stone-600 hover:text-stone-800 transition-colors duration-200 p-2 group">
          <Facebook className="h-5 w-5 group-hover:scale-110 transition-transform" />
        </a>
      </div>

      {/* Bottom Left - Follow Link */}
      <div className="absolute bottom-8 left-8 lg:left-16 xl:left-24 z-30">
        <a href="#" className="flex items-center space-x-3 text-stone-600 hover:text-stone-800 transition-colors duration-300 group">
          <span className="text-sm font-medium tracking-wider uppercase">Follow</span>
          <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
