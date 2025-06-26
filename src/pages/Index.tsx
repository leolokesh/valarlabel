import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import BrandStory from '@/components/BrandStory';
import SizingSection from '@/components/SizingSection';
import BrandShowcase from '@/components/BrandShowcase';
import ConfidenceSection from '@/components/ConfidenceSection';
import FeaturesSection from '@/components/FeaturesSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-black text-white relative">
      <Navigation />
      <div className="pt-0">
        <HeroSection />
        <BrandStory />
        <SizingSection />
        <ConfidenceSection />
        <BrandShowcase />
        <FeaturesSection />
        <Footer />
      </div>
    </div>
  );
};

export default Index;
