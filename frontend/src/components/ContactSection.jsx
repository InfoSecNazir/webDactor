import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  MapPin, 
  Phone, 
  Clock, 
  Send, 
  MessageCircle,
  User,
  Mail,
  Calendar,
  MessageSquare
} from 'lucide-react';
import { toast } from 'sonner';
import ClinicStatus from './ClinicStatus';
import GoogleMap from './GoogleMap';

const ContactSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: '',
    date: '',
    time: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [focusedField, setFocusedField] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('https://formspree.io/f/xeerwoer', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        toast.success('تم إرسال طلب الحجز بنجاح! سنتواصل معك قريباً.');
        setFormData({
          name: '',
          phone: '',
          email: '',
          service: '',
          date: '',
          time: '',
          message: '',
        });
      } else {
        toast.error('حدث خطأ أثناء إرسال الطلب. يرجى المحاولة مرة أخرى.');
      }
    } catch (error) {
      toast.error('حدث خطأ أثناء إرسال الطلب. يرجى المحاولة مرة أخرى.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const services = [
    'تقويم الأسنان',
    'تبييض وفينير وابتسامة هوليوود',
    'علاج الأعصاب واللثة',
    'زراعة وتركيبات الأسنان',
    'طب أسنان الأطفال',
    'خدمات الطوارئ',
    'استشارة عامة',
  ];

  const contactInfo = [
    {
      icon: MapPin,
      title: 'العنوان',
      content: 'ريف دمشق - ببيلا - الشارع العام قبل دوار ببيلا من جهة طريق الشام بـ 100 متر - مقابل صيدلية الظاظا - طابق أول',
      gradient: 'from-teal-500 to-cyan-500',
    },
    {
      icon: Phone,
      title: 'الهاتف',
      content: '0981235650',
      link: 'tel:0981235650',
      gradient: 'from-amber-500 to-yellow-500',
    },
    {
      icon: Clock,
      title: 'أوقات الدوام',
      content: 'يومياً عدا الجمعة، من 3:00 عصراً حتى 9:00 مساءً',
      gradient: 'from-purple-500 to-pink-500',
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-[var(--bg-primary)] via-[var(--bg-secondary)] to-[var(--bg-primary)] transition-colors" dir="rtl">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-5 py-2 bg-teal-500/10 text-teal-600 font-medium text-sm rounded-full border border-teal-400/30 mb-4">
            تواصل معنا
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-heading transition-colors mt-2 mb-4">
            احجز موعدك الآن
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-teal-500 to-transparent mx-auto mb-4" />
          <p className="text-body transition-colors max-w-2xl mx-auto text-lg">
            املأ النموذج أدناه أو تواصل معنا مباشرة عبر الهاتف أو واتساب
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-12">
          {/* Contact Form - 3 columns */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-3"
          >
            <div className="card-bg rounded-3xl shadow-2xl p-8 md:p-10 border border-light transition-colors">
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name & Phone */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="relative">
                    <label className="block text-sm font-medium text-heading transition-colors mb-2 flex items-center gap-2">
                      <User size={16} className="text-teal-500" />
                      الاسم الكامل *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      onFocus={() => setFocusedField('name')}
                      onBlur={() => setFocusedField('')}
                      required
                      className="w-full px-5 py-4 border-2 rounded-2xl focus:ring-2 focus:ring-teal-500 focus:border-teal-500 outline-none transition-all"
                      placeholder="أدخل اسمك الكامل"
                    />
                    {focusedField === 'name' && (
                      <motion.div
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: 1 }}
                        className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-teal-500 to-cyan-500"
                      />
                    )}
                  </div>
                  <div className="relative">
                    <label className="block text-sm font-medium text-heading transition-colors mb-2 flex items-center gap-2">
                      <Phone size={16} className="text-teal-500" />
                      رقم الهاتف *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      onFocus={() => setFocusedField('phone')}
                      onBlur={() => setFocusedField('')}
                      required
                      className="w-full px-5 py-4 border-2 rounded-2xl focus:ring-2 focus:ring-teal-500 focus:border-teal-500 outline-none transition-all"
                      placeholder="0981235650"
                    />
                    {focusedField === 'phone' && (
                      <motion.div
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: 1 }}
                        className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-teal-500 to-cyan-500"
                      />
                    )}
                  </div>
                </div>

                {/* Email */}
                <div className="relative">
                  <label className="block text-sm font-medium text-heading transition-colors mb-2 flex items-center gap-2">
                    <Mail size={16} className="text-teal-500" />
                    البريد الإلكتروني
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    onFocus={() => setFocusedField('email')}
                    onBlur={() => setFocusedField('')}
                    className="w-full px-5 py-4 border-2 rounded-2xl focus:ring-2 focus:ring-teal-500 focus:border-teal-500 outline-none transition-all"
                    placeholder="example@email.com"
                  />
                  {focusedField === 'email' && (
                    <motion.div
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: 1 }}
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-teal-500 to-cyan-500"
                    />
                  )}
                </div>

                {/* Service */}
                <div className="relative">
                  <label className="block text-sm font-medium text-heading transition-colors mb-2 flex items-center gap-2">
                    <MessageSquare size={16} className="text-teal-500" />
                    الخدمة المطلوبة *
                  </label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    onFocus={() => setFocusedField('service')}
                    onBlur={() => setFocusedField('')}
                    required
                    className="w-full px-5 py-4 border-2 rounded-2xl focus:ring-2 focus:ring-teal-500 focus:border-teal-500 outline-none transition-all"
                  >
                    <option value="">اختر الخدمة</option>
                    {services.map((service, index) => (
                      <option key={index} value={service}>
                        {service}
                      </option>
                    ))}
                  </select>
                  {focusedField === 'service' && (
                    <motion.div
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: 1 }}
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-teal-500 to-cyan-500"
                    />
                  )}
                </div>

                {/* Date & Time */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="relative">
                    <label className="block text-sm font-medium text-heading transition-colors mb-2 flex items-center gap-2">
                      <Calendar size={16} className="text-teal-500" />
                      التاريخ المفضل
                    </label>
                    <input
                      type="date"
                      name="date"
                      value={formData.date}
                      onChange={handleChange}
                      onFocus={() => setFocusedField('date')}
                      onBlur={() => setFocusedField('')}
                      className="w-full px-5 py-4 border-2 rounded-2xl focus:ring-2 focus:ring-teal-500 focus:border-teal-500 outline-none transition-all"
                    />
                    {focusedField === 'date' && (
                      <motion.div
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: 1 }}
                        className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-teal-500 to-cyan-500"
                      />
                    )}
                  </div>
                  <div className="relative">
                    <label className="block text-sm font-medium text-heading transition-colors mb-2 flex items-center gap-2">
                      <Clock size={16} className="text-teal-500" />
                      الوقت المفضل
                    </label>
                    <select
                      name="time"
                      value={formData.time}
                      onChange={handleChange}
                      onFocus={() => setFocusedField('time')}
                      onBlur={() => setFocusedField('')}
                      className="w-full px-5 py-4 border-2 rounded-2xl focus:ring-2 focus:ring-teal-500 focus:border-teal-500 outline-none transition-all"
                    >
                      <option value="">اختر الوقت</option>
                      <option value="3:00 PM">3:00 مساءً</option>
                      <option value="4:00 PM">4:00 مساءً</option>
                      <option value="5:00 PM">5:00 مساءً</option>
                      <option value="6:00 PM">6:00 مساءً</option>
                      <option value="7:00 PM">7:00 مساءً</option>
                      <option value="8:00 PM">8:00 مساءً</option>
                    </select>
                    {focusedField === 'time' && (
                      <motion.div
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: 1 }}
                        className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-teal-500 to-cyan-500"
                      />
                    )}
                  </div>
                </div>

                {/* Message */}
                <div className="relative">
                  <label className="block text-sm font-medium text-heading transition-colors mb-2 flex items-center gap-2">
                    <MessageSquare size={16} className="text-teal-500" />
                    ملاحظات إضافية
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    onFocus={() => setFocusedField('message')}
                    onBlur={() => setFocusedField('')}
                    rows="4"
                    className="w-full px-5 py-4 border-2 rounded-2xl focus:ring-2 focus:ring-teal-500 focus:border-teal-500 outline-none transition-all resize-none"
                    placeholder="أي ملاحظات أو استفسارات..."
                  />
                  {focusedField === 'message' && (
                    <motion.div
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: 1 }}
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-teal-500 to-cyan-500"
                    />
                  )}
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="group w-full py-5 bg-gradient-to-r from-teal-500 to-cyan-500 text-white font-bold rounded-2xl hover:shadow-2xl hover:shadow-teal-500/50 transition-all hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3 relative overflow-hidden"
                >
                  <span className="relative z-10 flex items-center gap-3">
                    {isSubmitting ? (
                      <>جاري الإرسال...</>
                    ) : (
                      <>
                        <Send size={20} className="group-hover:rotate-12 transition-transform" />
                        إرسال طلب الحجز
                      </>
                    )}
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-teal-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                </button>
              </form>
            </div>
          </motion.div>

          {/* Contact Info - 2 columns */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="lg:col-span-2 space-y-6"
          >
            {/* Clinic Status Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.5 }}
            >
              <ClinicStatus />
            </motion.div>

            {/* Contact Cards */}
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.5 + index * 0.1 }}
                className="group p-6 card-bg rounded-3xl shadow-lg hover:shadow-2xl transition-all border border-light hover:border-teal-400/30"
              >
                <div className="flex items-start gap-4">
                  <div className={`w-14 h-14 bg-gradient-to-br ${info.gradient} rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 group-hover:rotate-6 transition-all shadow-lg`}>
                    <info.icon className="text-white" size={24} />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-heading transition-colors mb-2 text-lg">{info.title}</h3>
                    {info.link ? (
                      <a
                        href={info.link}
                        className="text-body hover:text-teal-600 transition-colors text-lg font-medium"
                      >
                        {info.content}
                      </a>
                    ) : (
                      <p className="text-body text-sm leading-relaxed">
                        {info.content}
                      </p>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}

            {/* Quick Contact Buttons */}
            <div className="grid grid-cols-2 gap-4 pt-4">
              <a
                href="https://wa.me/963981235650"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-center gap-2 p-5 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-2xl hover:shadow-xl hover:shadow-green-500/50 transition-all hover:scale-105"
              >
                <MessageCircle size={20} className="group-hover:rotate-12 transition-transform" />
                <span className="font-bold">واتساب</span>
              </a>
              <a
                href="tel:0981235650"
                className="group flex items-center justify-center gap-2 p-5 bg-gradient-to-r from-amber-500 to-yellow-500 text-white rounded-2xl hover:shadow-xl hover:shadow-amber-500/50 transition-all hover:scale-105"
              >
                <Phone size={20} className="group-hover:rotate-12 transition-transform" />
                <span className="font-bold">اتصل الآن</span>
              </a>
            </div>

            {/* Google Maps */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.9 }}
            >
              <GoogleMap />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
