import { useState } from 'react';
import { Menu, X, Search, ShoppingBag, User, MoreHorizontal } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion, AnimatePresence } from 'framer-motion'; // Add this import

const menuVariants = {
  hidden: { opacity: 0, y: -30, scale: 0.98 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { type: "spring", stiffness: 300, damping: 30 } },
  exit: { opacity: 0, y: -30, scale: 0.98, transition: { duration: 0.2 } }
};

const itemVariants = {
  hidden: { opacity: 0, x: 30 },
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: { delay: 0.08 * i }
  })
};

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    "New",
    "Kurtas",
    "Sarees",
    "Lehengas",
    "Indo-Western",
    "Sale"
  ];

  return (
    <nav className="fixed top-3 sm:top-6 md:top-12 left-2 sm:left-4 right-2 sm:right-4 z-50">
      <div className="max-w-7xl mx-auto">
        {/* Main Navigation Bar */}
        <div className="bg-plum/10 backdrop-blur-md border border-white/20 rounded-full px-3 sm:px-6 py-2 sm:py-3 shadow-lg transition-all duration-500">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex-shrink-0 flex items-center"> {/* Added flex and items-center here */}
              <img
                src="/valarlabelLogo.png" // Adjust the path if your image is in a different directory
                alt="ValarLabel Logo"
                className="h-6 sm:h-7 md:h-8 mr-2 sm:mr-3" // Adjust height and margin as needed
              />
              <h1 className="text-lg sm:text-xl md:text-2xl font-bold tracking-[0.1em] sm:tracking-[0.2em] text-plum-600 drop-shadow-lg">VALARLABEL</h1>
            </div>

            {/* Right side - More icon and Menu */}
            {/* <div className="flex items-center space-x-2 sm:space-x-4">
              <Button variant="ghost" size="icon" className="text-white/70 hover:text-white hover:bg-white/10 rounded-full hidden sm:flex">
                <MoreHorizontal className="h-4 w-4 sm:h-5 sm:w-5" />
              </Button>
              
              <div className="flex items-center space-x-1 sm:space-x-2">
                <span className="text-white/70 font-medium tracking-wide text-xs sm:text-sm uppercase hidden sm:block">Menu</span>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  className="text-white/70 hover:text-white hover:bg-white/10 rounded-full"
                >
                  {isMenuOpen ? <X className="h-4 w-4 sm:h-5 sm:w-5" /> : <Menu className="h-4 w-4 sm:h-5 sm:w-5" />}
                </Button>
              </div>
            </div> */}
          </div>
        </div>

        {/* Mobile/Desktop menu overlay with animation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              key="menu"
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={menuVariants}
              className="absolute top-12 sm:top-16 right-0 w-72 sm:w-80 bg-white/95 backdrop-blur-md rounded-2xl shadow-2xl border border-white/30 p-4 sm:p-6 mt-2"
            >
              <div className="space-y-3 sm:space-y-4">
                {menuItems.map((item, i) => (
                  <motion.a
                    key={item}
                    href="#"
                    custom={i}
                    initial="hidden"
                    animate="visible"
                    exit="hidden"
                    variants={itemVariants}
                    className="block text-stone-800 hover:text-stone-600 text-base sm:text-lg font-medium transition-colors duration-200 py-2"
                  >
                    {item}
                  </motion.a>
                ))}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0, transition: { delay: 0.5 } }}
                  exit={{ opacity: 0, y: 20 }}
                  className="flex items-center justify-center space-x-3 sm:space-x-4 pt-4 sm:pt-6 border-t border-stone-200"
                >
                  <Button variant="ghost" size="icon" className="text-stone-600 hover:text-stone-800 rounded-full">
                    <Search className="h-4 w-4 sm:h-5 sm:w-5" />
                  </Button>
                  <Button variant="ghost" size="icon" className="text-stone-600 hover:text-stone-800 rounded-full">
                    <User className="h-4 w-4 sm:h-5 sm:w-5" />
                  </Button>
                  <Button variant="ghost" size="icon" className="text-stone-600 hover:text-stone-800 rounded-full">
                    <ShoppingBag className="h-4 w-4 sm:h-5 sm:w-5" />
                  </Button>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Navigation;