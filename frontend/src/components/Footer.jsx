import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Clock, Instagram, MessageCircle, Send, Mail } from 'lucide-react';
import ClinicStatus from './ClinicStatus';

const Footer = () => {
  const navLinks = [
    { name: 'الرئيسية', path: '/' },
    { name: 'عن الدكتور', path: '/about' },
    { name: 'الخدمات', path: '/services' },
    { name: 'التجهيزات', path: '/equipment' },
    { name: 'آراء المرضى', path: '/testimonials' },
    { name: 'احجز موعد', path: '/contact' },
  ];

  return (
    <footer className="bg-[#0A1628] text-white pt-16 pb-8" dir="rtl">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* About */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-14 h-14 rounded-full overflow-hidden bg-white shadow-md flex-shrink-0">
                <img 
                  src="/images/logo.png" 
                  alt="شعار عيادة د. عبد الرحمن القاري"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h3 className="text-lg font-bold">د. عبد الرحمن القاري</h3>
                <p className="text-sm text-[#C9A84C]">ابتسامتك حياتك</p>
              </div>
            </div>
            <p className="text-sm text-gray-300 leading-relaxed">
              بورد سوري في تقويم وتجميل الأسنان. نوفر بيئة هادئة ومريحة لضمان خروج المريض بشعور الراحة النفسية والسنية.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-4">روابط سريعة</h4>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-sm text-gray-300 hover:text-[#C9A84C] transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold mb-4">معلومات التواصل</h4>
            
            {/* Clinic Status */}
            <div className="mb-4">
              <ClinicStatus compact={true} />
            </div>

            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-[#C9A84C] flex-shrink-0 mt-1" />
                <span className="text-sm text-gray-300 leading-relaxed">
                  ريف دمشق - ببيلا - الشارع العام قبل دوار ببيلا من جهة طريق الشام بـ 100 متر - مقابل صيدلية الظاظا - طابق أول
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-[#C9A84C]" />
                <a href="tel:0981235650" className="text-sm text-gray-300 hover:text-[#C9A84C] transition-colors">
                  0981235650
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-[#C9A84C]" />
                <a href="mailto:dr.abd.alqari@gmail.com" className="text-sm text-gray-300 hover:text-[#C9A84C] transition-colors break-all">
                  dr.abd.alqari@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Clock size={18} className="text-[#C9A84C] flex-shrink-0 mt-1" />
                <div className="text-sm text-gray-300">
                  <p className="font-medium">يومياً عدا الجمعة</p>
                  <p>من 3:00 عصراً حتى 9:00 مساءً</p>
                </div>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h4 className="text-lg font-bold mb-4">تابعنا</h4>
            <div className="flex flex-col gap-3">
              <a
                href="https://www.instagram.com/dr_al_qari"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 px-4 py-2 bg-white/10 rounded-lg hover:bg-white/20 transition-colors"
              >
                <Instagram size={20} className="text-[#C9A84C]" />
                <span className="text-sm">@dr_al_qari</span>
              </a>
              <a
                href="https://wa.me/963981235650"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 px-4 py-2 bg-white/10 rounded-lg hover:bg-white/20 transition-colors"
              >
                <MessageCircle size={20} className="text-[#C9A84C]" />
                <span className="text-sm">واتساب</span>
              </a>
              <a
                href="https://t.me/+963981235650"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 px-4 py-2 bg-white/10 rounded-lg hover:bg-white/20 transition-colors"
              >
                <Send size={20} className="text-[#C9A84C]" />
                <span className="text-sm">تلغرام</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-gray-400">
              © 2026 عيادة د. عبد الرحمن القاري - جميع الحقوق محفوظة
            </p>
            <p className="text-sm text-[#C9A84C] font-medium">
              "الإتقان وأداء العمل وكأنني المريض"
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
