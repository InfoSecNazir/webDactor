import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { GraduationCap, Award, Users, Heart } from 'lucide-react';

const AboutSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const qualifications = [
    {
      icon: GraduationCap,
      title: 'المؤهلات العلمية',
      items: ['بورد سوري في تقويم وتجميل الأسنان', 'جامعة دمشق - 2015'],
    },
    {
      icon: Award,
      title: 'الخبرة',
      items: ['5 - 10 سنوات من الخبرة العملية', 'متخصص في التقويم والتجميل'],
    },
    {
      icon: Users,
      title: 'الفريق الطبي',
      items: ['د. رنيم سليك - طبيبة مساعدة', 'فريق تمريض مؤهل ومدرب'],
    },
  ];

  return (
    <section className="py-20 section-bg-light transition-colors duration-300" dir="rtl">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-[#C9A84C] font-medium text-sm uppercase tracking-wider">
            من نحن
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-heading transition-colors mt-2 mb-4">
            عن الدكتور عبد الرحمن القاري
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-[#C9A84C] to-transparent mx-auto" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="/images/doctor.jpg"
                alt="د. عبد الرحمن القاري"
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A1628]/50 to-transparent" />
              
              {/* Experience Badge */}
              <div className="absolute bottom-6 right-6 card-bg rounded-xl p-4 shadow-lg transition-colors">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#C9A84C] to-[#E8D49A] rounded-full flex items-center justify-center">
                    <Award className="text-white" size={24} />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-heading transition-colors">10+</div>
                    <div className="text-sm text-body transition-colors">سنوات خبرة</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-[#C9A84C]/20 rounded-full blur-2xl" />
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-[#0A1628]/10 rounded-full blur-2xl" />
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-heading transition-colors mb-4">
                رؤيتنا المهنية
              </h3>
              <p className="text-body transition-colors leading-relaxed mb-4">
                نؤمن بأن الإتقان في العمل هو أساس النجاح. نقدم خدماتنا بأعلى معايير الجودة والاحترافية، مع الحرص على راحة المريض النفسية والسنية.
              </p>
              <div className="bg-[#FFF8E7] dark-mode:bg-[#2A3B57] border-r-4 border-[#C9A84C] p-4 rounded-lg transition-colors">
                <p className="text-heading transition-colors font-medium flex items-center gap-2">
                  <Heart className="text-[#C9A84C]" size={20} />
                  نوفر بيئة هادئة ومريحة لضمان خروج المريض بشعور الراحة التامة
                </p>
              </div>
            </div>

            {/* Qualifications */}
            <div className="space-y-4">
              {qualifications.map((qual, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.6 + index * 0.1 }}
                  className="flex gap-4 p-4 card-bg rounded-xl border border-light hover:border-[#C9A84C]/30 hover:shadow-md transition-all"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-[#C9A84C] to-[#E8D49A] rounded-lg flex items-center justify-center flex-shrink-0">
                    <qual.icon className="text-white" size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-heading transition-colors mb-2">{qual.title}</h4>
                    <ul className="space-y-1">
                      {qual.items.map((item, i) => (
                        <li key={i} className="text-sm text-body transition-colors flex items-center gap-2">
                          <span className="w-1.5 h-1.5 bg-[#C9A84C] rounded-full" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Target Audience */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.9 }}
              className="mt-6 p-6 bg-gradient-to-br from-[#0A1628] to-[#1A2B47] rounded-xl text-white"
            >
              <h4 className="font-bold mb-2">الفئة المستهدفة</h4>
              <p className="text-gray-300">
                نستقبل جميع الفئات العمرية من الأطفال إلى كبار السن
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
