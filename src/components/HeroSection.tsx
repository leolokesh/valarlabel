
import { ArrowRight, Menu, Instagram, Twitter, Facebook } from 'lucide-react';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-stone-100 to-stone-200 overflow-hidden">
      {/* Navigation */}
      <nav className="absolute top-0 left-0 right-0 z-50 p-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="text-3xl font-bold tracking-wider text-black">
            VOGUE
          </div>
          
          {/* Menu */}
          <div className="flex items-center space-x-6">
            <span className="text-black font-medium tracking-wide">MENU</span>
            <Button variant="ghost" size="icon" className="text-black hover:bg-black/10">
              <Menu className="h-6 w-6" />
            </Button>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="relative h-screen flex">
        {/* Left Side - Editorial Content */}
        <div className="flex-1 flex items-center justify-center px-8 lg:px-16">
          <div className="max-w-lg space-y-8">
            {/* Cover Story Label */}
            <div className="text-sm tracking-[0.3em] text-gray-600 uppercase font-medium">
              Cover Story
            </div>
            
            {/* Main Headline */}
            <h1 className="text-6xl lg:text-7xl xl:text-8xl font-black leading-[0.9] text-black tracking-tight">
              BEYOND
              <br />
              BEAUTY
            </h1>
            
            {/* Description */}
            <p className="text-lg text-gray-700 leading-relaxed max-w-md font-light">
              A deep dive into the evolution of modern femininity, exploring how contemporary 
              women are redefining beauty standards and embracing authenticity.
            </p>
            
            {/* CTA Button */}
            <Button 
              className="bg-black text-white hover:bg-gray-800 px-8 py-6 text-base font-medium tracking-wide transition-all duration-300 group shadow-lg hover:shadow-xl"
            >
              READ ARTICLE
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            
            {/* Byline */}
            <div className="pt-4">
              <span className="text-sm text-gray-600 font-medium">by Alice Robbins</span>
            </div>
          </div>
        </div>

        {/* Right Side - Hero Image */}
        <div className="flex-1 relative">
          <div className="absolute inset-0 bg-gradient-to-l from-transparent via-transparent to-stone-200/20"></div>
          <div 
            className="h-full w-full bg-cover bg-center bg-no-repeat shadow-2xl"
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80')`
            }}
          >
            {/* Overlay for better contrast */}
            <div className="absolute inset-0 bg-black/10"></div>
          </div>
        </div>
      </div>

      {/* Social Media Icons - Right Edge */}
      <div className="fixed right-6 top-1/2 transform -translate-y-1/2 z-40 flex flex-col space-y-6">
        <a href="#" className="text-gray-600 hover:text-black transition-colors duration-200">
          <Instagram className="h-5 w-5" />
        </a>
        <a href="#" className="text-gray-600 hover:text-black transition-colors duration-200">
          <Twitter className="h-5 w-5" />
        </a>
        <a href="#" className="text-gray-600 hover:text-black transition-colors duration-200">
          <Facebook className="h-5 w-5" />
        </a>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-8 left-8 w-16 h-0.5 bg-black"></div>
      <div className="absolute bottom-8 right-8 text-xs text-gray-500 tracking-widest transform -rotate-90 origin-bottom-right">
        ISSUE 247
      </div>
    </section>
  );
};

export default HeroSection;
