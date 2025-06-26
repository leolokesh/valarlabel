import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const Footer = () => {
  return (
    <footer className="bg-black border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Company Info - Left */}
          <div className="space-y-6 flex flex-col lg:items-start items-center text-center lg:text-left">
            <div>
              <h3 className="text-2xl font-bold gradient-text">VALRLABEL</h3>
              <p className="text-gray-400 mt-2">
                Redefining women's fusion wear with contemporary designs that celebrate the modern Indian woman.
              </p>
            </div>
            <div className="flex space-x-4 justify-center lg:justify-start w-full">
              <Button variant="ghost" size="icon" className="text-gray-400 hover:text-teal-400">
                <Facebook className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-gray-400 hover:text-teal-400">
                <Instagram className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-gray-400 hover:text-teal-400">
                <Twitter className="h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Quick Links - Center */}
          <div className="space-y-6 flex flex-col items-center text-center">
            <h4 className="text-lg font-semibold text-white">Quick Links</h4>
            <div className="space-y-3">
              {['About Us', 'Size Guide', 'Return Policy', 'Care Instructions', 'Track Order'].map((link) => (
                <a
                  key={link}
                  href="#"
                  className="block text-gray-400 hover:text-teal-400 transition-colors"
                >
                  {link}
                </a>
              ))}
            </div>
          </div>

          {/* Newsletter - Right */}
          <div className="space-y-6 flex flex-col lg:items-end items-center text-center lg:text-right">
            <h4 className="text-lg font-semibold text-white">Stay Updated</h4>
            <p className="text-gray-400 text-sm">
              Subscribe to get special offers and updates on new collections.
            </p>
            <div className="space-y-3 w-full max-w-xs">
              <Input
                type="email"
                placeholder="Enter your email"
                className="bg-gray-800 border-gray-700 text-white placeholder-gray-400"
              />
              <Button className="w-full bg-teal-500 hover:bg-teal-600 text-white">
                Subscribe
              </Button>
            </div>
            <div className="space-y-2 text-sm text-gray-400 w-full max-w-xs">
              <div className="flex items-center space-x-2 justify-center lg:justify-end">
                <Phone className="h-4 w-4" />
                <span>+91 98765 43210</span>
              </div>
              <div className="flex items-center space-x-2 justify-center lg:justify-end">
                <Mail className="h-4 w-4" />
                <span>hello@aura.com</span>
              </div>
              <div className="flex items-center space-x-2 justify-center lg:justify-end">
                <MapPin className="h-4 w-4" />
                <span>Mumbai, India</span>
              </div>
            </div>
          </div>
          {/*
          Categories
          <div className="space-y-6">
            <h4 className="text-lg font-semibold text-white">Categories</h4>
            <div className="space-y-3">
              {['Kurtas', 'Sarees', 'Lehengas', 'Indo-Western', 'Palazzo Sets', 'Accessories'].map((category) => (
                <a
                  key={category}
                  href="#"
                  className="block text-gray-400 hover:text-teal-400 transition-colors"
                >
                  {category}
                </a>
              ))}
            </div>
          </div> 
          */}
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2025 VALARLABEL. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-gray-400 hover:text-teal-400 text-sm transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-400 hover:text-teal-400 text-sm transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>git
    </footer>
  );
};

export default Footer;
