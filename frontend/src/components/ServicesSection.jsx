import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  Smile, 
  Sparkles, 
  Stethoscope, 
  Heart, 
  Baby, 
  AlertCircle,
  ArrowLeft
} from 'lucide-react';

const ServicesSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const services = [
    {
      icon: Smile,
      title: 'تقويم الأسنان',
      description: 'تقويم الأسنان الثابت والمتحرك لجميع الأعمار بأحدث التقنيات العالمية',
      image: 'https://images.pexels.com/photos/6528909/pexels-photo-6528909.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
      featured: true,
      gradient: 'from-teal-500 to-cyan-500',
      iconColor: 'text-teal-400',
    },
    {
      icon: Sparkles,
      title: 'تبييض وفينير وابتسامة هوليوود',
      description: 'تبييض الأسنان بالليزر، فينير الأسنان، وابتسامة هوليوود المميزة',
      image: 'https://images.pexels.com/photos/3762453/pexels-photo-3762453.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
      featured: false,
      gradient: 'from-amber-500 to-yellow-500',
      iconColor: 'text-amber-400',
    },
    {
      icon: Stethoscope,
      title: 'علاج الأعصاب واللثة',
      description: 'علاج جذور الأسنان وأمراض اللثة بأحدث الأجهزة والتقنيات',
      image: 'https://images.pexels.com/photos/6502635/pexels-photo-6502635.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
      featured: false,
      gradient: 'from-rose-500 to-pink-500',
      iconColor: 'text-rose-400',
    },
    {
      icon: Heart,
      title: 'زراعة وتركيبات الأسنان',
      description: 'زراعة الأسنان بأحدث التقنيات وتركيبات الأسنان الثابتة والمتحركة',
      image: 'https://images.pexels.com/photos/305567/pexels-photo-305567.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
      featured: false,
      gradient: 'from-purple-500 to-indigo-500',
      iconColor: 'text-purple-400',
    },
    {
      icon: Baby,
      title: 'طب أسنان الأطفال',
      description: 'رعاية خاصة لأسنان الأطفال في بيئة مريحة وآمنة',
      image: 'https://images.pexels.com/photos/4687341/pexels-photo-4687341.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
      featured: false,
      gradient: 'from-sky-500 to-blue-500',
      iconColor: 'text-sky-400',
    },
    {
      icon: AlertCircle,
      title: 'خدمات الطوارئ',
      description: 'خدمات طوارئ الأسنان متاحة على مدار الساعة',
      image: 'https://images.unsplash.com/photo-1643660526741-094639fbe53a?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzZ8MHwxfHNlYXJjaHwzfHxkZW50YWwlMjBjbGluaWN8ZW58MHx8fHwxNzc0MzAxMjkxfDA&ixlib=rb-4.1.0&q=85',
      featured: false,
      gradient: 'from-red-500 to-orange-500',
      iconColor: 'text-red-400',
    },
  ];

  return (
    <section className="py-20 transition-colors duration-300" style={{ background: 'linear-gradient(to bottom, var(--bg-secondary), var(--bg-primary), var(--bg-secondary))' }} dir="rtl">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-[#C9A84C] font-medium text-sm uppercase tracking-wider">
            خدماتنا
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-heading transition-colors mt-2 mb-4">
            الخدمات الطبية المتميزة
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-[#C9A84C] to-transparent mx-auto mb-4" />
          <p className="text-body transition-colors max-w-2xl mx-auto">
            نقدم مجموعة شاملة من خدمات طب الأسنان بأعلى معايير الجودة والاحترافية
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative"
            >
              <div className={`relative overflow-hidden rounded-3xl card-bg shadow-md hover:shadow-2xl transition-all duration-500 ${
                service.featured ? 'md:col-span-2 lg:col-span-1' : ''
              }`}>
                {/* Image with Overlay */}
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    loading="lazy"
                    decoding="async"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t ${service.gradient} opacity-60 group-hover:opacity-70 transition-opacity`} />
                  
                  {/* Featured Badge */}
                  {service.featured && (
                    <div className="absolute top-4 right-4 px-4 py-2 bg-white/90 backdrop-blur-sm rounded-full">
                      <span className="text-xs font-bold bg-gradient-to-r from-teal-600 to-cyan-600 bg-clip-text text-transparent">
                        ⭐ الخدمة البطلة
                      </span>
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="p-6 relative">
                  {/* Icon */}
                  <div className={`absolute -top-8 right-6 w-16 h-16 bg-gradient-to-br ${service.gradient} rounded-2xl shadow-lg flex items-center justify-center transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-300`}>
                    <service.icon className="text-white" size={28} />
                  </div>

                  <div className="pt-10">
                    <h3 className="text-xl font-bold text-heading transition-colors mb-3 group-hover:text-[#14B8A6] transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-body transition-colors text-sm leading-relaxed mb-4">
                      {service.description}
                    </p>
                    
                    <button className={`flex items-center gap-2 ${service.iconColor} font-medium text-sm group-hover:gap-3 transition-all`}>
                      <span>اعرف المزيد</span>
                      <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>

                {/* Hover Glow Effect */}
                <div className={`absolute inset-0 bg-gradient-to-t ${service.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500 pointer-events-none rounded-3xl`} />
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8 }}
          className="mt-16 text-center"
        >
          <div className="inline-block p-10 bg-gradient-to-br from-[#0A1628] via-[#14B8A6] to-[#0A1628] rounded-3xl shadow-2xl relative overflow-hidden">
            {/* Animated Background */}
            <div className="absolute inset-0 bg-gradient-to-r from-teal-500/10 to-gold-500/10 animate-pulse" />
            
            <div className="relative z-10">
              <h3 className="text-3xl font-bold text-white mb-3">
                هل تحتاج استشارة طبية؟
              </h3>
              <p className="text-gray-300 mb-8 max-w-md mx-auto">
                احجز موعدك الآن واحصل على استشارة مجانية مع أفضل الخبراء
              </p>
              <Link
                to="/contact"
                className="group inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-[#C9A84C] to-[#E8D49A] text-white font-medium rounded-full hover:shadow-lg hover:shadow-[#C9A84C]/50 transition-all hover:scale-105"
              >
                <span>احجز الآن</span>
                <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
