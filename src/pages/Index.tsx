import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import BrandStory from '@/components/BrandStory';
import SizingSection from '@/components/SizingSection';
import BrandShowcase from '@/components/BrandShowcase';
import ConfidenceSection from '@/components/ConfidenceSection';
import FeaturesSection from '@/components/FeaturesSection';
import Footer from '@/components/Footer';
import FashionSpread from '@/components/fashionspread';
import Beyondfashion from '@/components/beyondfashion';

const Index = () => {
  return (
    <div className="min-h-screen bg-black text-white relative overflow-x-hidden">
      <Navigation />
      <div className="pt-0">
        <HeroSection />
        {/* <BrandStory /> */}
        <FashionSpread/>
        <SizingSection />
        <ConfidenceSection />
        <BrandShowcase />
        {/* <FeaturesSection /> */}
        <Beyondfashion/>
        <Footer />
      </div>
    </div>
  );
};

export default Index;
