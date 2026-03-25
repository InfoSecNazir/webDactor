import React from 'react';
import AboutSection from '../components/AboutSection';
import SEO from '../components/SEO';

const AboutPage = () => {
  return (
    <div className="pt-20">
      <SEO
        title="عن د. عبد الرحمن القاري"
        description="د. عبد الرحمن القاري - بورد سوري في تقويم وتجميل الأسنان، جامعة دمشق 2015. خبرة 10+ سنوات في تقويم الأسنان. ريف دمشق - ببيلا."
        keywords="د عبد الرحمن القاري، طبيب أسنان ببيلا، بورد سوري تقويم أسنان، جامعة دمشق"
        url="/about"
      />
      <AboutSection />
    </div>
  );
};

export default AboutPage;
