import { Palette, Users, Award, Zap } from 'lucide-react';

const FeaturesSection = () => {
  const features = [
    {
      icon: Palette,
      title: "From Our Land, For Her World",
      description: "Made in India, for the world — supporting local artisans and redefining fusion wear on a global stage."
    },
    {
      icon: Users,
      title: "Community Driven",
      description: "For women, by vision — building a future powered by her"
    },
    {
      icon: Award,
      title: "Versatile by Design",
      description: "From Monday meetings to weekend brunches — one piece, multiple moods. Because your wardrobe should work as hard as you do"
    },
    {
      icon: Zap,
      title: "Designed with Intent",
      description: "Not just beautiful — every cut, curve, and contour serves comfort, grace, and ease of wear"
    }
  ];

  return (
    <section className="py-32 bg-theme-dark text-theme-plum">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-20 animate-fade-in">
          <div className="flex items-center justify-center space-x-3 mb-6">
            <div className="w-12 h-0.5 bg-gradient-to-r from-purple-400 to-plum-400"></div>
            <span className="text-purple-400 font-medium tracking-wider">VALARLABEL</span>
            <div className="w-12 h-0.5 bg-gradient-to-r from-plum-400 to-purple-400"></div>
          </div>
          <h2 className="text-5xl lg:text-6xl font-bold mb-6">
            Beyond <span className="gradient-text">Fashion</span>
          </h2>
          <p className="text-gray-400 text-xl max-w-3xl mx-auto leading-relaxed">
            We're not just creating clothes. We're crafting experiences 
            and celebrating the multifaceted nature of modern womanhood.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="text-center space-y-6 p-8 rounded-3xl bg-gradient-to-b from-gray-800/30 to-gray-900/30 hover:from-gray-800/50 hover:to-gray-900/50 transition-all duration-500 animate-fade-in group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-purple-500/20 to-plum-500/20 rounded-full group-hover:scale-110 transition-transform duration-300">
                  <Icon className="h-10 w-10 text-purple-400 group-hover:text-plum-400 transition-colors duration-300" />
                </div>
                <h3 className="text-2xl font-bold text-white group-hover:text-purple-400 transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-gray-400 leading-relaxed">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
