import React from 'react';
import ContactSection from '../components/ContactSection';
import SEO from '../components/SEO';

const ContactPage = () => {
  return (
    <div className="pt-20">
      <SEO
        title="احجز موعد"
        description="احجز موعدك في عيادة د. عبد الرحمن القاري لتقويم وتجميل الأسنان. ببيلا - ريف دمشق. اتصل بنا: 0981235650 | يومياً عدا الجمعة 3:00 - 9:00 مساءً"
        keywords="حجز موعد طبيب أسنان، تواصل عيادة أسنان، عيادة القاري ببيلا"
        url="/contact"
      />
      <ContactSection />
    </div>
  );
};

export default ContactPage;
