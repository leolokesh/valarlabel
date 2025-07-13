import { Heart, ShoppingCart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion, easeInOut } from 'framer-motion';

const sectionVariants = {
  hidden: { opacity: 0, y: 60, scale: 0.98 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 1, ease: easeInOut } },
};

const ProductGrid = () => {
  const products = [
    {
      id: 1,
      name: "Mystic Silk Kurta",
      category: "Indo-Western",
      price: 3299,
      originalPrice: 4999,
      image: "bg-gradient-to-br from-purple-500/30 to-pink-500/30"
    },
    {
      id: 2,
      name: "Royal Fusion Lehenga",
      category: "Lehengas",
      price: 8999,
      originalPrice: 12999,
      image: "bg-gradient-to-br from-blue-500/30 to-cyan-500/30"
    },
    {
      id: 3,
      name: "Contemporary Saree",
      category: "Sarees",
      price: 4599,
      originalPrice: 6999,
      image: "bg-gradient-to-br from-green-500/30 to-teal-500/30"
    },
    {
      id: 4,
      name: "Bohemian Palazzo Set",
      category: "Indo-Western",
      price: 2799,
      originalPrice: 3999,
      image: "bg-gradient-to-br from-orange-500/30 to-red-500/30"
    }
  ];

  return (
    <motion.section
      className="py-20 bg-theme-dark text-theme-plum"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={sectionVariants}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Trending <span className="gradient-text">Collections</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Discover our most loved pieces that perfectly blend traditional craftsmanship 
            with contemporary design aesthetics.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product, index) => (
            <div
              key={product.id}
              className="group relative bg-gray-800/50 rounded-2xl overflow-hidden card-hover animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Product Image */}
              <div className={`aspect-[4/5] ${product.image} relative overflow-hidden`}>
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300"></div>
                
                {/* Quick Actions */}
                <div className="absolute top-4 right-4 space-y-2 opacity-0 group-hover:opacity-100 transform translate-x-2 group-hover:translate-x-0 transition-all duration-300">
                  <Button size="icon" variant="secondary" className="bg-white/90 hover:bg-white">
                    <Heart className="h-4 w-4" />
                  </Button>
                  <Button size="icon" variant="secondary" className="bg-white/90 hover:bg-white">
                    <ShoppingCart className="h-4 w-4" />
                  </Button>
                </div>

                {/* Sale Badge */}
                <div className="absolute top-4 left-4">
                  <span className="bg-coral-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}% OFF
                  </span>
                </div>
              </div>

              {/* Product Info */}
              <div className="p-6 space-y-3">
                <div>
                  <p className="text-teal-400 text-sm font-medium">{product.category}</p>
                  <h3 className="text-white font-semibold text-lg group-hover:text-teal-400 transition-colors">
                    {product.name}
                  </h3>
                </div>

                <div className="flex items-center justify-between">
                  <div className="space-y-1">
                    <div className="flex items-center space-x-2">
                      <span className="text-xl font-bold text-white">₹{product.price.toLocaleString()}</span>
                      <span className="text-gray-400 line-through text-sm">₹{product.originalPrice.toLocaleString()}</span>
                    </div>
                  </div>
                </div>

                <Button className="w-full bg-teal-500/10 hover:bg-teal-500 text-teal-400 hover:text-white border border-teal-500/20 transition-all duration-300">
                  Quick View
                </Button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button 
            variant="outline" 
            size="lg" 
            className="border-teal-500/20 text-teal-400 hover:bg-teal-500 hover:text-white px-8 py-3"
          >
            VIEW ALL PRODUCTS
          </Button>
        </div>
      </div>
    </motion.section>
  );
};

export default ProductGrid;
