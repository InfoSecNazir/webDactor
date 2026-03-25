import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ChevronDown, HelpCircle, MessageCircle } from 'lucide-react';

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const faqs = [
    {
      q: 'كم تكلفة تقويم الأسنان؟',
      a: 'تختلف تكلفة التقويم حسب نوعه (ثابت أو شفاف) وحالة الأسنان. نقدم استشارة مجانية لتقييم حالتك وتحديد أنسب خيار بسعر مناسب. تواصل معنا لمعرفة الأسعار الدقيقة.',
      icon: '💰',
    },
    {
      q: 'هل علاج الأسنان مؤلم؟',
      a: 'نستخدم أحدث تقنيات التخدير الموضعي لضمان راحتك التامة أثناء العلاج. كما نوفر خيار الغاز الضاحك لتقليل القلق والتوتر، خاصةً للأطفال.',
      icon: '😌',
    },
    {
      q: 'كم المدة التي يستغرقها تقويم الأسنان؟',
      a: 'تتراوح مدة العلاج بالتقويم عادةً بين 12 إلى 24 شهراً حسب تعقيد الحالة. بعض الحالات البسيطة قد تنتهي في أقل من سنة.',
      icon: '⏱️',
    },
    {
      q: 'ما الفرق بين الفينير وابتسامة هوليوود؟',
      a: 'الفينير عبارة عن قشرة رقيقة من الخزف تُثبَّت على سطح السن لتحسين شكله ولونه. ابتسامة هوليوود هي تحسين شامل للأسنان الأمامية باستخدام الفينير أو التركيبات لمنح ابتسامة مثالية.',
      icon: '✨',
    },
    {
      q: 'هل زراعة الأسنان آمنة؟',
      a: 'نعم، زراعة الأسنان من أكثر العمليات أماناً في طب الأسنان الحديث. نستخدم أفضل الغرسات العالمية المعتمدة مع تعقيم تام لضمان نجاح العملية.',
      icon: '🦷',
    },
    {
      q: 'كيف أحجز موعداً؟',
      a: 'يمكنك حجز موعدك عبر: الاتصال المباشر على 0981235650، أو التواصل عبر واتساب، أو تعبئة نموذج الحجز في صفحة "احجز موعد". نرد خلال أقل من ساعة.',
      icon: '📅',
    },
    {
      q: 'هل تستقبلون الأطفال؟',
      a: 'بالتأكيد! نقدم رعاية خاصة لأسنان الأطفال في بيئة مريحة وآمنة. الدكتور متخصص في التعامل مع الأطفال وجعل تجربة طبيب الأسنان ممتعة لهم.',
      icon: '👶',
    },
    {
      q: 'ما أوقات دوام العيادة؟',
      a: 'العيادة مفتوحة يومياً من الأحد إلى الخميس والسبت، من الساعة 3:00 عصراً حتى 9:00 مساءً. مغلقة يوم الجمعة. خدمات الطوارئ متاحة على الرقم الموجود.',
      icon: '🕐',
    },
  ];

  const toggle = (i) => setOpenIndex(openIndex === i ? null : i);

  return (
    <section
      className="py-20 transition-colors duration-300"
      style={{ background: 'linear-gradient(to bottom, var(--bg-secondary), var(--bg-primary))' }}
      dir="rtl"
    >
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-14"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium mb-4"
            style={{ backgroundColor: 'var(--bg-accent)', color: '#C9A84C', border: '1px solid rgba(201,168,76,0.3)' }}
          >
            <HelpCircle size={15} />
            الأسئلة الشائعة
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-heading transition-colors mt-2 mb-4">
            إجابات على أكثر الأسئلة تكراراً
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-[#C9A84C] to-transparent mx-auto mb-4" />
          <p className="text-body transition-colors max-w-xl mx-auto">
            لديك سؤال لم تجد إجابته؟ تواصل معنا مباشرة عبر واتساب
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto space-y-3">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.07 }}
              className="overflow-hidden rounded-2xl border transition-all duration-300"
              style={{
                backgroundColor: openIndex === i ? 'var(--bg-accent)' : 'var(--bg-secondary)',
                borderColor: openIndex === i ? 'rgba(201,168,76,0.4)' : 'var(--bg-accent)',
                boxShadow: openIndex === i ? '0 4px 20px rgba(201,168,76,0.1)' : 'none',
              }}
            >
              {/* Question */}
              <button
                onClick={() => toggle(i)}
                className="w-full flex items-center gap-4 px-6 py-5 text-right"
              >
                <span className="text-2xl flex-shrink-0">{faq.icon}</span>
                <span className="flex-1 font-bold text-base text-heading transition-colors">{faq.q}</span>
                <motion.div
                  animate={{ rotate: openIndex === i ? 180 : 0 }}
                  transition={{ duration: 0.25 }}
                  className="flex-shrink-0"
                >
                  <ChevronDown size={20} style={{ color: openIndex === i ? '#C9A84C' : 'var(--text-secondary)' }} />
                </motion.div>
              </button>

              {/* Answer */}
              <AnimatePresence initial={false}>
                {openIndex === i && (
                  <motion.div
                    key="content"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                  >
                    <div className="px-6 pb-5">
                      <div className="h-px mb-4" style={{ backgroundColor: 'rgba(201,168,76,0.2)' }} />
                      <p className="text-body transition-colors leading-relaxed text-sm md:text-base">
                        {faq.a}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6 }}
          className="text-center mt-12"
        >
          <p className="text-body mb-4 text-sm">لم تجد إجابة لسؤالك؟</p>
          <a
            href="https://wa.me/963981235650?text=مرحباً، لدي سؤال عن العيادة"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 bg-green-500 text-white font-bold rounded-full hover:bg-green-600 transition-all hover:scale-105 shadow-lg hover:shadow-green-500/30"
          >
            <MessageCircle size={20} />
            <span>تحدث مع الدكتور مباشرة</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQSection;
