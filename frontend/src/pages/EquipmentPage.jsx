import React from 'react';
import EquipmentSection from '../components/EquipmentSection';
import SEO from '../components/SEO';

const EquipmentPage = () => {
  return (
    <div className="pt-20">
      <SEO
        title="التجهيزات الطبية"
        description="أحدث التجهيزات الطبية في عيادة د. عبد الرحمن القاري: طبعات رقمية، أشعة مع سنسور، Ultra Sonic مع Endo، الغاز الضاحك. عيادة معتمدة في ببيلا - ريف دمشق."
        keywords="تجهيزات أسنان، طبعات رقمية، غاز ضاحك، أشعة أسنان، عيادة معتمدة دمشق"
        url="/equipment"
      />
      <EquipmentSection />
    </div>
  );
};

export default EquipmentPage;
