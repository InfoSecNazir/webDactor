import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Scan, Radio, Wind, Zap, Award } from 'lucide-react';

const EquipmentSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const equipment = [
    {
      icon: Scan,
      title: 'طبعات رقمية',
      description: 'أحدث تقنيات الطبعات الرقمية للأسنان بدقة عالية وراحة أكبر للمريض',
      image: '/images/equipment/equipment1.jpg',
      gradient: 'from-blue-500 to-cyan-500',
    },
    {
      icon: Radio,
      title: 'أشعة مع سنسور',
      description: 'أجهزة أشعة رقمية متطورة مع سنسور حساس للحصول على صور دقيقة وواضحة',
      image: '/images/equipment/equipment2.jpg',
      gradient: 'from-purple-500 to-pink-500',
    },
    {
      icon: Zap,
      title: 'Ultra Sonic مع Endo',
      description: 'أجهزة الموجات فوق الصوتية لتنظيف الأسنان وعلاج جذور الأسنان بدقة',
      image: '/images/equipment/equipment3.jpg',
      gradient: 'from-teal-500 to-emerald-500',
    },
    {
      icon: Wind,
      title: 'الغاز الضاحك',
      description: 'تقنية التخدير بالغاز الضاحك لراحة المريض وتقليل القلق أثناء العلاج',
      image: '/images/equipment/equipment4.jpg',
      gradient: 'from-amber-500 to-orange-500',
    },
  ];

  return (
    <section className="py-20 transition-colors duration-300" style={{ background: 'linear-gradient(to bottom, var(--bg-primary), var(--bg-secondary), var(--bg-primary))' }} dir="rtl">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-5 py-2 bg-teal-500/10 text-teal-600 font-medium text-sm rounded-full border border-teal-400/30 mb-4">
            التجهيزات
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-heading transition-colors mt-2 mb-4">
            أحدث التقنيات والتجهيزات الطبية
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-teal-500 to-transparent mx-auto mb-4" />
          <p className="text-body transition-colors max-w-2xl mx-auto text-lg">
            نستخدم أحدث الأجهزة والتقنيات العالمية لضمان أفضل النتائج والراحة القصوى
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {equipment.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-3xl card-bg shadow-lg hover:shadow-2xl transition-all duration-500"
            >
              {/* Image Background */}
              <div className="relative h-80 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                  decoding="async"
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${item.gradient} opacity-60 group-hover:opacity-70 transition-opacity`} />
                
                {/* Icon Badge */}
                <div className={`absolute top-6 right-6 w-16 h-16 bg-gradient-to-br ${item.gradient} rounded-2xl shadow-xl flex items-center justify-center transform group-hover:scale-110 group-hover:rotate-12 transition-all duration-300`}>
                  <item.icon className="text-white" size={32} />
                </div>

                {/* Available Badge */}
                <div className="absolute bottom-6 left-6 flex items-center gap-2 px-4 py-2 bg-white/90 backdrop-blur-sm rounded-full">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                  <span className="text-xs font-bold text-gray-700">متاح الآن</span>
                </div>
              </div>

              {/* Content */}
              <div className="p-8">
                <h3 className="text-2xl font-bold text-heading transition-colors mb-3 group-hover:text-teal-600 transition-colors">
                  {item.title}
                </h3>
                <p className="text-body transition-colors leading-relaxed">
                  {item.description}
                </p>
              </div>

              {/* Hover Glow Effect */}
              <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500 pointer-events-none rounded-3xl`} />
            </motion.div>
          ))}
        </div>

        {/* Reception/Certificates Image */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6 }}
          className="rounded-3xl overflow-hidden shadow-2xl"
        >
          <div className="relative h-96 md:h-[500px]">
            <img
              src="/images/equipment/equipment5.jpg"
              alt="مكتب الاستقبال والشهادات"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0A1628]/80 via-[#0A1628]/40 to-transparent" />
            
            <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12">
              <div className="max-w-3xl">
                <div className="flex items-center gap-3 mb-4">
                  <Award className="text-[#C9A84C]" size={48} />
                  <h3 className="text-3xl md:text-4xl font-bold text-white">
                    معتمدون ومرخصون
                  </h3>
                </div>
                <p className="text-xl text-gray-200 leading-relaxed">
                  عيادتنا معتمدة ومرخصة من قبل وزارة الصحة السورية. نلتزم بأعلى معايير التعقيم والتطهير لضمان سلامتك وصحتك.
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Feature Highlight */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.7 }}
          className="mt-12 p-8 md:p-10 rounded-3xl border-2 border-teal-400/20 transition-colors duration-300" style={{ background: 'var(--bg-secondary)' }}
        >
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="w-20 h-20 bg-gradient-to-br from-teal-500 to-cyan-500 rounded-3xl flex items-center justify-center flex-shrink-0 shadow-xl">
              <Zap className="text-white" size={40} />
            </div>
            <div className="flex-1 text-center md:text-right">
              <h3 className="text-2xl md:text-3xl font-bold text-heading transition-colors mb-3">
                تعقيم وتطهير على أعلى مستوى
              </h3>
              <p className="text-body transition-colors text-lg leading-relaxed">
                نلتزم بأعلى معايير التعقيم والتطهير لضمان سلامتك وصحتك. جميع الأدوات يتم تعقيمها بأحدث الأجهزة المعتمدة عالمياً بعد كل استخدام.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default EquipmentSection;
