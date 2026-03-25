import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Sparkles, Award, Users, Heart, ArrowLeft } from 'lucide-react';
import ToothModel3D from './ToothModel3D';
import WaveAnimation from './WaveAnimation';
import CountUp from './CountUp';

const HeroSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const stats = [
  { icon: Users, value: 5000, label: 'مريض سعيد', suffix: '+' },
  { icon: Award, value: 10, label: 'سنوات خبرة', suffix: '+' },
  { icon: Sparkles, value: 100, label: 'نسبة الرضا', suffix: '%' },
  { icon: Heart, value: 24, label: 'دعم طوارئ', suffix: '/7' }];


  return (
    <section
      className="relative min-h-screen flex items-center overflow-hidden"
      dir="rtl"
      style={{
        background: 'linear-gradient(135deg, #0A1628 0%, #1A2B47 50%, #0A1628 100%)'
      }}>

      {/* Animated Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle, #14B8A6 1px, transparent 1px)`,
          backgroundSize: '50px 50px',
          animation: 'float 20s ease-in-out infinite'
        }} />
      </div>

      {/* Floating Orbs */}
      <motion.div
        className="absolute top-20 right-20 w-64 h-64 rounded-full blur-3xl"
        style={{ background: 'radial-gradient(circle, rgba(201, 168, 76, 0.2) 0%, transparent 70%)' }}
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3]
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }} />

      <motion.div
        className="absolute bottom-32 left-32 w-96 h-96 rounded-full blur-3xl"
        style={{ background: 'radial-gradient(circle, rgba(20, 184, 166, 0.15) 0%, transparent 70%)' }}
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.2, 0.4, 0.2]
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut"
        }} />


      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-white">

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-teal-500/20 to-sky-500/20 rounded-full border border-teal-400/30 backdrop-blur-sm mb-6">

              <Sparkles className="w-4 h-4 text-teal-400" />
              <span className="text-teal-300 text-sm font-medium">
                ابتسامتك حياتك
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 }}
              className="text-4xl md:text-5xl lg:text-7xl font-bold mb-6 leading-tight">

              <span className="text-white">د. عبد الرحمن القاري</span>
              <span className="block mt-3 bg-gradient-to-r from-[#C9A84C] via-[#E8D49A] to-[#14B8A6] bg-clip-text text-transparent">
                تقويم وتجميل الأسنان
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4 }}
              className="text-lg md:text-xl text-gray-300 mb-4 leading-relaxed">

              بورد سوري في تقويم وتجميل الأسنان من جامعة دمشق
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.5 }}
              className="relative p-5 rounded-2xl mb-8 overflow-hidden group"
              style={{
                background: 'linear-gradient(135deg, rgba(20, 184, 166, 0.1) 0%, rgba(201, 168, 76, 0.1) 100%)',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(201, 168, 76, 0.2)'
              }}>

              <div className="absolute inset-0 bg-gradient-to-r from-teal-500/10 to-gold-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <p className="text-teal-300 font-medium italic relative z-10 flex items-center gap-2">
                <span className="text-2xl"></span>
                "الإتقان وأداء العمل وكأنني المريض"
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.6 }}
              className="flex flex-wrap gap-4 mb-10">

              <Link
                to="/contact"
                className="group relative px-8 py-4 bg-gradient-to-r from-[#C9A84C] to-[#E8D49A] text-white font-medium rounded-full overflow-hidden transition-all hover:scale-105 hover:shadow-2xl hover:shadow-[#C9A84C]/50">

                <span className="relative z-10 flex items-center gap-2">
                  احجز موعدك الآن
                  <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-[#E8D49A] to-[#C9A84C] opacity-0 group-hover:opacity-100 transition-opacity" />
              </Link>
              <a
                href="tel:0981235650"
                className="px-8 py-4 bg-white/10 backdrop-blur-md text-white font-medium rounded-full border-2 border-white/20 hover:bg-white/20 hover:border-white/40 transition-all">

                اتصل بنا: 0981235650
              </a>
            </motion.div>

            {/* Stats with Counter Animation */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.7 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-4">

              {stats.map((stat, index) =>
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.8 + index * 0.1 }}
                className="relative group">

                  <div className="text-center p-5 bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 hover:bg-white/10 hover:border-teal-400/30 transition-all hover:scale-105">
                    <div className="absolute inset-0 bg-gradient-to-br from-teal-500/10 to-gold-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
                    <stat.icon className="w-7 h-7 text-teal-400 mx-auto mb-3 group-hover:scale-110 transition-transform" />
                    <div className="text-3xl font-bold text-white mb-1 relative z-10">
                      <CountUp end={stat.value} suffix={stat.suffix} />
                    </div>
                    <div className="text-xs text-gray-400 relative z-10">{stat.label}</div>
                  </div>
                </motion.div>
              )}
            </motion.div>
          </motion.div>

          {/* 3D Model */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 1, delay: 0.5 }}
            className="relative h-[500px] lg:h-[600px]">

            {/* Decorative background */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#C9A84C]/20 to-transparent rounded-full blur-3xl" />
            <div className="absolute top-10 right-10 w-40 h-40 bg-[#C9A84C]/10 rounded-full blur-2xl animate-pulse" />
            <div className="absolute bottom-10 left-10 w-48 h-48 bg-[#E8D49A]/10 rounded-full blur-3xl animate-pulse" />
            
            {/* 3D Tooth Model */}
            <div className="relative z-10 h-full">
              <ToothModel3D />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">

        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="w-6 h-10 border-2 border-teal-400 rounded-full flex items-start justify-center p-2">

          <div className="w-1.5 h-3 bg-teal-400 rounded-full" />
        </motion.div>
      </motion.div>

      {/* Wave Animation */}
      <WaveAnimation color="#14B8A6" opacity={0.08} />
    </section>);

};

export default HeroSection;