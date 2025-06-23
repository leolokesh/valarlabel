
import { useState } from 'react';
import { Menu, X, Search, ShoppingBag, User, MoreHorizontal } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-4 left-4 right-4 z-50">
      <div className="max-w-7xl mx-auto">
        {/* Main Navigation Bar */}
        <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-6 py-3 shadow-lg">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex-shrink-0">
              <h1 className="text-2xl font-bold tracking-[0.2em] text-white drop-shadow-lg">VOGUE</h1>
            </div>

            {/* Right side - More icon and Menu */}
            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="icon" className="text-white/70 hover:text-white hover:bg-white/10 rounded-full">
                <MoreHorizontal className="h-5 w-5" />
              </Button>
              
              <div className="flex items-center space-x-2">
                <span className="text-white/70 font-medium tracking-wide text-sm uppercase">Menu</span>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  className="text-white/70 hover:text-white hover:bg-white/10 rounded-full"
                >
                  {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile/Desktop menu overlay */}
        {isMenuOpen && (
          <div className="absolute top-16 right-0 w-80 bg-white/95 backdrop-blur-md rounded-2xl shadow-2xl border border-white/30 p-6 mt-2">
            <div className="space-y-4">
              <a href="#" className="block text-stone-800 hover:text-stone-600 text-lg font-medium transition-colors duration-200 py-2">
                New
              </a>
              <a href="#" className="block text-stone-800 hover:text-stone-600 text-lg font-medium transition-colors duration-200 py-2">
                Kurtas
              </a>
              <a href="#" className="block text-stone-800 hover:text-stone-600 text-lg font-medium transition-colors duration-200 py-2">
                Sarees
              </a>
              <a href="#" className="block text-stone-800 hover:text-stone-600 text-lg font-medium transition-colors duration-200 py-2">
                Lehengas
              </a>
              <a href="#" className="block text-stone-800 hover:text-stone-600 text-lg font-medium transition-colors duration-200 py-2">
                Indo-Western
              </a>
              <a href="#" className="block text-stone-800 hover:text-stone-600 text-lg font-medium transition-colors duration-200 py-2">
                Sale
              </a>
              
              <div className="flex items-center justify-center space-x-4 pt-6 border-t border-stone-200">
                <Button variant="ghost" size="icon" className="text-stone-600 hover:text-stone-800 rounded-full">
                  <Search className="h-5 w-5" />
                </Button>
                <Button variant="ghost" size="icon" className="text-stone-600 hover:text-stone-800 rounded-full">
                  <User className="h-5 w-5" />
                </Button>
                <Button variant="ghost" size="icon" className="text-stone-600 hover:text-stone-800 rounded-full">
                  <ShoppingBag className="h-5 w-5" />
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
