
import { useState } from 'react';
import { Menu, X, Search, ShoppingBag, User, MoreHorizontal } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-8 left-8 right-8 z-50">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-3xl font-bold tracking-wider text-white drop-shadow-lg">VOGUE</h1>
          </div>

          {/* Right side - More icon and Menu */}
          <div className="flex items-center space-x-6">
            <Button variant="ghost" size="icon" className="text-white/80 hover:text-white hover:bg-white/10">
              <MoreHorizontal className="h-6 w-6" />
            </Button>
            
            <div className="flex items-center space-x-3">
              <span className="text-white/80 font-medium tracking-wide text-sm">MENU</span>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-white/80 hover:text-white hover:bg-white/10"
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile/Desktop menu overlay */}
        {isMenuOpen && (
          <div className="absolute top-16 right-0 w-80 bg-white/95 backdrop-blur-md rounded-lg shadow-2xl border border-white/20 p-6">
            <div className="space-y-4">
              <a href="#" className="block text-stone-800 hover:text-stone-600 text-lg font-medium transition-colors duration-200">
                New
              </a>
              <a href="#" className="block text-stone-800 hover:text-stone-600 text-lg font-medium transition-colors duration-200">
                Kurtas
              </a>
              <a href="#" className="block text-stone-800 hover:text-stone-600 text-lg font-medium transition-colors duration-200">
                Sarees
              </a>
              <a href="#" className="block text-stone-800 hover:text-stone-600 text-lg font-medium transition-colors duration-200">
                Lehengas
              </a>
              <a href="#" className="block text-stone-800 hover:text-stone-600 text-lg font-medium transition-colors duration-200">
                Indo-Western
              </a>
              <a href="#" className="block text-stone-800 hover:text-stone-600 text-lg font-medium transition-colors duration-200">
                Sale
              </a>
              
              <div className="flex items-center space-x-4 pt-4 border-t border-stone-200">
                <Button variant="ghost" size="icon" className="text-stone-600 hover:text-stone-800">
                  <Search className="h-5 w-5" />
                </Button>
                <Button variant="ghost" size="icon" className="text-stone-600 hover:text-stone-800">
                  <User className="h-5 w-5" />
                </Button>
                <Button variant="ghost" size="icon" className="text-stone-600 hover:text-stone-800">
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
