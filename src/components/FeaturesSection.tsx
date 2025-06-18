
import { Truck, Shield, Sparkles, Heart } from 'lucide-react';

const FeaturesSection = () => {
  const features = [
    {
      icon: Truck,
      title: "Free Shipping",
      description: "Complimentary shipping on all orders above ₹1,999"
    },
    {
      icon: Shield,
      title: "Quality Assured",
      description: "Premium fabrics and craftsmanship guaranteed"
    },
    {
      icon: Sparkles,
      title: "Exclusive Designs",
      description: "Unique fusion wear you won't find anywhere else"
    },
    {
      icon: Heart,
      title: "Made with Love",
      description: "Each piece crafted with passion and attention to detail"
    }
  ];

  return (
    <section className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="text-center space-y-4 p-6 rounded-2xl bg-gray-800/30 hover:bg-gray-800/50 transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-teal-500 to-coral-500 rounded-full">
                  <Icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
