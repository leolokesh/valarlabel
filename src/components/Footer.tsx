import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';
import ContactUs from './ContactUs';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import emailjs from 'emailjs-com';

const Footer = () => {
  const [contactOpen, setContactOpen] = useState(false);
  const [subscribeEmail, setSubscribeEmail] = useState('');
  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await emailjs.send(
        'YOUR_SERVICE_ID', // replace with your EmailJS service ID
        'YOUR_TEMPLATE_ID', // replace with your EmailJS template ID
        {
          from_email: subscribeEmail,
          message: 'Newsletter subscription',
        },
        'YOUR_USER_ID' // replace with your EmailJS public key
      );
      alert('Subscribed successfully!');
      setSubscribeEmail('');
    } catch (error) {
      alert('Failed to subscribe. Please try again later.');
    }
  };
  return (
    <>
      <footer className="bg-black border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-12">
            {/* Company Info - Left */}
            <div className="space-y-4 sm:space-y-6 flex flex-col items-center text-center lg:items-start lg:text-left">
              <div>
                <h3 className="text-xl sm:text-2xl font-bold gradient-text">VALARLABEL</h3>
                <p className="text-gray-400 mt-2 text-sm sm:text-base">
                  Redefining women's fusion wear with contemporary designs that celebrate the modern Indian woman.
                </p>
              </div>
              <div className="flex space-x-3 sm:space-x-4 justify-center lg:justify-start w-full">
                <Button variant="ghost" size="icon" className="text-gray-400 hover:text-teal-400 h-8 w-8 sm:h-10 sm:w-10">
                  <Facebook className="h-4 w-4 sm:h-5 sm:w-5" />
                </Button>
                <Button variant="ghost" size="icon" className="text-gray-400 hover:text-teal-400 h-8 w-8 sm:h-10 sm:w-10">
                  <Instagram className="h-4 w-4 sm:h-5 sm:w-5" />
                </Button>
                <Button variant="ghost" size="icon" className="text-gray-400 hover:text-teal-400 h-8 w-8 sm:h-10 sm:w-10">
                  <Twitter className="h-4 w-4 sm:h-5 sm:w-5" />
                </Button>
              </div>
            </div>

            {/* Quick Links - Center */}
            <div className="space-y-4 sm:space-y-6 flex flex-col items-center text-center">
              <h4 className="text-base sm:text-lg font-semibold text-white">Quick Links</h4>
              <div className="space-y-2 sm:space-y-3">
                {[
                  { name: 'Home', href: '#' },
                  { name: 'SmartFit', href: '#sizingSection' },
                  { name: 'Collections', href: '#brandShowcase' },
                  { name: 'Contact Us', href: null }
                ].map((link) => (
                  link.name === 'Contact Us' ? (
                    <button
                      key={link.name}
                      onClick={() => setContactOpen(true)}
                      className="block text-gray-400 hover:text-teal-400 transition-colors text-sm sm:text-base w-full text-left"
                    >
                      {link.name}
                    </button>
                  ) : (
                    <a
                      key={link.name}
                      href={link.href}
                      className="block text-gray-400 hover:text-teal-400 transition-colors text-sm sm:text-base"
                    >
                      {link.name}
                    </a>
                  )
                ))}
              </div>
            </div>

            {/* Newsletter - Right */}
            <div className="space-y-4 sm:space-y-6 flex flex-col items-center text-center lg:items-end lg:text-right">
              <h4 className="text-base sm:text-lg font-semibold text-white">Stay Updated</h4>
              <p className="text-gray-400 text-xs sm:text-sm">
                Subscribe to get special offers and updates on new collections.
              </p>
              <div className="space-y-3 w-full max-w-xs">
                <form onSubmit={handleSubscribe} className="space-y-3">
                  <Input
                    type="email"
                    value={subscribeEmail}
                    onChange={e => setSubscribeEmail(e.target.value)}
                    placeholder="Enter your email"
                    className="bg-gray-800 border-gray-700 text-white placeholder-gray-400 text-sm"
                    required
                  />
                  <Button type="submit" className="w-full bg-plum-500 hover:bg-plum-600 text-white text-sm sm:text-base">
                    Subscribe
                  </Button>
                </form>
              </div>  
              <div className="space-y-2 text-xs sm:text-sm text-gray-400 w-full max-w-xs">
                <div className="flex items-center space-x-2 justify-center lg:justify-end">
                  <Phone className="h-3 w-3 sm:h-4 sm:w-4" />
                  <span>+91 98765 43210</span>
                </div>
                <div className="flex items-center space-x-2 justify-center lg:justify-end">
                  <Mail className="h-3 w-3 sm:h-4 sm:w-4" />
                  <span className="text-xs">customercare@valarlabel.com</span>
                </div>
                <div className="flex items-center space-x-2 justify-center lg:justify-end">
                  <MapPin className="h-3 w-3 sm:h-4 sm:w-4" />
                  <span>Coimbatore, India</span>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="border-t border-gray-800 mt-8 sm:mt-12 pt-6 sm:pt-8 text-center">
            <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
              <p className="text-gray-400 text-xs sm:text-sm">
                © 2025 Valarlabel. All rights reserved.
              </p>
              <div className="flex space-x-4 sm:space-x-6 text-xs sm:text-sm">
                <Link to="/privacy-policy" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</Link>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">Terms of Service</a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">Shipping Info</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <ContactUs open={contactOpen} onClose={() => setContactOpen(false)} />
    </>
  );

}
export default Footer;
