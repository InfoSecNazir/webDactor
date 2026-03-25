import React from 'react';
import TestimonialsSection from '../components/TestimonialsSection';
import SEO from '../components/SEO';

const TestimonialsPage = () => {
  return (
    <div className="pt-20">
      <SEO
        title="آراء مرضانا"
        description="آراء وتجارب مرضى عيادة د. عبد الرحمن القاري. 5000+ مريض سعيد، تقييم 5 نجوم. الأفضل في تقويم وتجميل الأسنان ببيلا - ريف دمشق."
        keywords="آراء مرضى، تقييم عيادة أسنان، تجارب مرضى تقويم أسنان"
        url="/testimonials"
      />
      <TestimonialsSection />
    </div>
  );
};

export default TestimonialsPage;
