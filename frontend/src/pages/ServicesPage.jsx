import React from 'react';
import ServicesSection from '../components/ServicesSection';
import SEO from '../components/SEO';

const ServicesPage = () => {
  return (
    <div className="pt-20">
      <SEO
        title="خدماتنا الطبية"
        description="خدمات طب الأسنان: تقويم الأسنان، ابتسامة هوليوود، فينير، تبييض، زراعة أسنان، علاج أعصاب، طب أطفال، طوارئ. عيادة د. عبد الرحمن القاري - ببيلا ريف دمشق."
        keywords="تقويم أسنان، ابتسامة هوليوود، فينير أسنان، تبييض أسنان، زراعة أسنان، علاج أعصاب، طب أطفال دمشق"
        url="/services"
      />
      <ServicesSection />
    </div>
  );
};

export default ServicesPage;
