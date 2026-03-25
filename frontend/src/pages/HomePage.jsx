import React from 'react';
import HeroSection from '../components/HeroSection';
import ServicesSection from '../components/ServicesSection';
import AboutSection from '../components/AboutSection';
import FAQSection from '../components/FAQSection';
import SEO from '../components/SEO';

const HomePage = () => {
  return (
    <div>
      <SEO
        title="الرئيسية"
        description="عيادة د. عبد الرحمن القاري | تقويم وتجميل الأسنان في ريف دمشق - ببيلا. بورد سوري في تقويم الأسنان. خدمات: تقويم، ابتسامة هوليوود، زراعة. احجز: 0981235650"
        keywords="تقويم أسنان دمشق، طبيب أسنان ببيلا، تجميل أسنان، ابتسامة هوليوود، عيادة القاري"
        url="/"
      />
      <HeroSection />
      <ServicesSection />
      <AboutSection />
      <FAQSection />
    </div>
  );
};

export default HomePage;
