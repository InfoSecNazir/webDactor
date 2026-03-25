import React, { useCallback } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Star, Quote, ChevronLeft, ChevronRight, ArrowLeft } from 'lucide-react';
import useEmblaCarousel from 'embla-carousel-react';
import CountUp from './CountUp';

const TestimonialsSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [emblaRef, emblaApi] = useEmblaCarousel({ 
    loop: true,
    align: 'start',
    skipSnaps: false,
  });

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const testimonials = [
    {
      name: 'أحمد محمد',
      text: 'تجربة رائعة مع الدكتور عبد الرحمن. كان صبوراً جداً ومهتماً بأدق التفاصيل. النتيجة فاقت توقعاتي!',
      rating: 5,
      service: 'تقويم الأسنان',
      avatar: '👨',
    },
    {
      name: 'سارة علي',
      text: 'أفضل عيادة أسنان زرتها. البيئة مريحة، الطاقم محترف، والدكتور خبرة ومهارة عالية.',
      rating: 5,
      service: 'تبييض الأسنان',
      avatar: '👩',
    },
    {
      name: 'محمد خالد',
      text: 'عملت ابتسامة هوليوود عند الدكتور والنتيجة مذهلة. شكراً لك دكتور على الإبداع والاهتمام.',
      rating: 5,
      service: 'ابتسامة هوليوود',
      avatar: '🧔',
    },
    {
      name: 'نور حسن',
      text: 'ابني كان خائفاً جداً من طبيب الأسنان، لكن الدكتور عبد الرحمن تعامل معه بطريقة رائعة وأصبح يحب الزيارة!',
      rating: 5,
      service: 'طب أسنان الأطفال',
      avatar: '👱‍♀️',
    },
    {
      name: 'ياسمين أحمد',
      text: 'احترافية عالية، نظافة تامة، وأسعار معقولة. أنصح الجميع بزيارة عيادة د. عبد الرحمن القاري.',
      rating: 5,
      service: 'تركيبات الأسنان',
      avatar: '👩‍🦰',
    },
    {
      name: 'عمر سليمان',
      text: 'التقنيات المستخدمة حديثة جداً، والمعاملة راقية. تجربة مريحة من البداية للنهاية.',
      rating: 5,
      service: 'زراعة الأسنان',
      avatar: '👨‍💼',
    },
  ];

  const stats = [
    { number: 5000, label: 'مريض راضٍ', suffix: '+' },
    { number: 10, label: 'سنوات خبرة', suffix: '+' },
    { number: 100, label: 'نسبة الرضا', suffix: '%' },
    { number: 15, label: 'خدمة متميزة', suffix: '+' },
  ];

  return (
    <section 
      className="py-20 relative overflow-hidden"
      dir="rtl"
      style={{
        background: 'linear-gradient(135deg, #0A1628 0%, #14B8A6 50%, #0A1628 100%)',
      }}
    >
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle, #14B8A6 2px, transparent 2px)`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-5 py-2 bg-teal-500/20 text-teal-300 font-medium text-sm rounded-full border border-teal-400/30 mb-4">
            آراء المرضى
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mt-2 mb-4">
            ماذا يقول مرضانا عنا؟
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-teal-400 to-transparent mx-auto mb-4" />
          <p className="text-gray-300 max-w-2xl mx-auto text-lg">
            نفخر بثقة مرضانا ورضاهم عن خدماتنا. إليك بعض تجاربهم
          </p>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.3 + index * 0.1 }}
              className="text-center p-6 bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 hover:bg-white/10 hover:scale-105 transition-all"
            >
              <div className="text-4xl md:text-5xl font-bold text-teal-400 mb-2">
                <CountUp end={stat.number} suffix={stat.suffix} />
              </div>
              <div className="text-sm text-gray-300">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Testimonials Carousel */}
        <div className="relative">
          {/* Navigation Buttons */}
          <button
            onClick={scrollPrev}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center hover:bg-white/20 transition-all hover:scale-110 border border-white/20"
            aria-label="Previous"
          >
            <ChevronRight className="text-white" size={24} />
          </button>
          <button
            onClick={scrollNext}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center hover:bg-white/20 transition-all hover:scale-110 border border-white/20"
            aria-label="Next"
          >
            <ChevronLeft className="text-white" size={24} />
          </button>

          {/* Carousel */}
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex gap-6">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex-[0_0_100%] md:flex-[0_0_calc(50%-12px)] lg:flex-[0_0_calc(33.333%-16px)] min-w-0"
                >
                  <div className="relative p-8 bg-white/10 backdrop-blur-md rounded-3xl border border-white/20 hover:bg-white/15 hover:border-teal-400/50 transition-all group h-full">
                    {/* Quote Icon */}
                    <div className="absolute top-6 left-6 opacity-10 group-hover:opacity-20 transition-opacity">
                      <Quote size={60} className="text-teal-400" />
                    </div>

                    {/* Avatar */}
                    <div className="flex items-center gap-4 mb-6 relative z-10">
                      <div className="w-16 h-16 bg-gradient-to-br from-teal-400 to-cyan-400 rounded-2xl flex items-center justify-center text-3xl shadow-lg">
                        {testimonial.avatar}
                      </div>
                      <div>
                        <p className="text-white font-bold text-lg">{testimonial.name}</p>
                        <p className="text-teal-300 text-sm">{testimonial.service}</p>
                      </div>
                    </div>

                    {/* Rating */}
                    <div className="flex gap-1 mb-4 relative z-10">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star
                          key={i}
                          size={18}
                          className="text-amber-400 fill-amber-400"
                        />
                      ))}
                    </div>

                    {/* Text */}
                    <p className="text-white text-base leading-relaxed relative z-10">
                      "{testimonial.text}"
                    </p>

                    {/* Hover Glow Effect */}
                    <div className="absolute inset-0 bg-gradient-to-br from-teal-500/10 to-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity rounded-3xl" />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8 }}
          className="mt-16"
        >
          {/* Patient Success Story with Image */}
          <div className="relative rounded-3xl overflow-hidden shadow-2xl mb-8">
            <div className="grid md:grid-cols-2 gap-0">
              {/* Image Side */}
              <div className="relative h-80 md:h-auto">
                <img
                  src="/images/testimonials/patient-testimonial.jpg"
                  alt="مريض سعيد مع د. عبد الرحمن القاري"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-[#0A1628] to-transparent opacity-70" />
              </div>

              {/* Content Side */}
              <div className="relative bg-gradient-to-br from-[#0A1628] to-[#14B8A6] p-8 md:p-12 flex flex-col justify-center">
                <div className="absolute inset-0 bg-gradient-to-br from-teal-500/10 to-cyan-500/10" />
                
                <div className="relative z-10">
                  <div className="inline-block px-4 py-2 bg-[#C9A84C]/20 rounded-full border border-[#C9A84C] mb-6">
                    <span className="text-[#C9A84C] text-sm font-medium">
                      ✨ قصة نجاح
                    </span>
                  </div>
                  
                  <h3 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
                    آلاف المرضى السعداء يثقون بنا
                  </h3>
                  
                  <p className="text-gray-200 text-lg leading-relaxed mb-8">
                    نحن نؤمن بأن كل ابتسامة لها قصة. مرضانا هم أفضل شهادة على جودة خدماتنا والتزامنا بتقديم أفضل رعاية ممكنة.
                  </p>

                  <div className="flex flex-wrap gap-4">
                    <div className="text-center">
                      <div className="text-4xl font-bold text-teal-300 mb-1">98%</div>
                      <div className="text-sm text-gray-300">معدل الرضا</div>
                    </div>
                    <div className="w-px bg-white/20" />
                    <div className="text-center">
                      <div className="text-4xl font-bold text-teal-300 mb-1">5000+</div>
                      <div className="text-sm text-gray-300">مريض سعيد</div>
                    </div>
                    <div className="w-px bg-white/20" />
                    <div className="text-center">
                      <div className="text-4xl font-bold text-teal-300 mb-1">10+</div>
                      <div className="text-sm text-gray-300">سنوات خبرة</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Button */}
          <div className="text-center">
            <p className="text-white text-xl mb-6 font-medium">
              كن واحداً من مرضانا السعداء!
            </p>
            <Link
              to="/contact"
              className="group inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-[#C9A84C] to-[#E8D49A] text-white font-bold rounded-full hover:shadow-2xl hover:shadow-[#C9A84C]/50 transition-all hover:scale-105 text-lg"
            >
              <span>احجز موعدك الآن</span>
              <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
