import { useState } from 'react';
import { Menu, X, Search, ShoppingBag, User } from 'lucide-react';
import { Button } from '@/components/ui/button';
const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navItems = [{
    name: 'New',
    href: '#'
  }, {
    name: 'Kurtas',
    href: '#'
  }, {
    name: 'Sarees',
    href: '#'
  }, {
    name: 'Lehengas',
    href: '#'
  }, {
    name: 'Indo-Western',
    href: '#'
  }, {
    name: 'Sale',
    href: '#'
  }];
  return <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-bold gradient-text">ValarLabel</h1>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navItems.map(item => <a key={item.name} href={item.href} className="text-white hover:text-teal-400 px-3 py-2 text-sm font-medium transition-colors duration-200 relative group">
                  {item.name}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-teal-400 transition-all duration-300 group-hover:w-full"></span>
                </a>)}
            </div>
          </div>

          {/* Right side icons */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="ghost" size="icon" className="text-white hover:text-teal-400">
              <Search className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="text-white hover:text-teal-400">
              <User className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="text-white hover:text-teal-400">
              <ShoppingBag className="h-5 w-5" />
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button variant="ghost" size="icon" onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-white">
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-black/90 backdrop-blur-md">
              {navItems.map(item => <a key={item.name} href={item.href} className="text-white hover:text-teal-400 block px-3 py-2 text-base font-medium" onClick={() => setIsMenuOpen(false)}>
                  {item.name}
                </a>)}
            </div>
          </div>}
      </div>
    </nav>;
};
export default Navigation;