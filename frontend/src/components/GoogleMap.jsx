import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Navigation, ExternalLink, Copy, Check } from 'lucide-react';

const GoogleMap = () => {
  const [copied, setCopied] = useState(false);

  const address = 'ريف دمشق - ببيلا - الشارع العام قبل دوار ببيلا من جهة طريق الشام بـ 100 متر - مقابل صيدلية الظاظا - طابق أول';
  const shortAddress = 'ببيلا، ريف دمشق، سوريا';
  const mapsUrl = 'https://maps.google.com/?q=ببيلا+ريف+دمشق+سوريا';
  const embedUrl = 'https://maps.google.com/maps?q=ببيلا،ريف+دمشق،سوريا&output=embed&hl=ar&z=15';

  const handleCopy = () => {
    navigator.clipboard.writeText(address);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="rounded-3xl overflow-hidden shadow-2xl border-2 transition-colors duration-300" 
      style={{ borderColor: 'var(--bg-accent)' }}>

      {/* Map Header */}
      <div className="p-4 flex items-center justify-between"
        style={{ backgroundColor: 'var(--bg-secondary)' }}>
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-gradient-to-br from-teal-500 to-cyan-500 rounded-xl flex items-center justify-center shadow-md">
            <MapPin size={18} className="text-white" />
          </div>
          <div>
            <p className="font-bold text-sm text-heading transition-colors">موقع العيادة</p>
            <p className="text-xs text-body transition-colors">{shortAddress}</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          {/* Copy Button */}
          <button
            onClick={handleCopy}
            title="نسخ العنوان"
            className="w-9 h-9 flex items-center justify-center rounded-xl transition-all hover:scale-105"
            style={{ backgroundColor: 'var(--bg-accent)', color: 'var(--text-secondary)' }}
          >
            {copied ? <Check size={16} className="text-green-500" /> : <Copy size={16} />}
          </button>
          {/* Open in Google Maps */}
          <a
            href={mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            title="فتح في خرائط جوجل"
            className="w-9 h-9 flex items-center justify-center rounded-xl transition-all hover:scale-105 bg-[#4285F4] text-white"
          >
            <ExternalLink size={16} />
          </a>
        </div>
      </div>

      {/* Embedded Map */}
      <div className="relative" style={{ height: '320px' }}>
        <iframe
          src={embedUrl}
          width="100%"
          height="100%"
          style={{ border: 0, display: 'block' }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="موقع عيادة د. عبد الرحمن القاري - ببيلا ريف دمشق"
        />
      </div>

      {/* Map Footer - Navigation CTA */}
      <div className="p-4 flex items-center justify-between"
        style={{ backgroundColor: 'var(--bg-secondary)' }}>
        <p className="text-xs text-body transition-colors flex-1 leading-relaxed line-clamp-2">
          {address}
        </p>
        <a
          href={`https://www.google.com/maps/dir/?api=1&destination=ببيلا+ريف+دمشق+سوريا`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-shrink-0 mr-3 flex items-center gap-2 px-4 py-2.5 bg-gradient-to-r from-teal-500 to-cyan-500 text-white rounded-xl hover:shadow-lg hover:shadow-teal-500/30 transition-all hover:scale-105 text-sm font-bold"
        >
          <Navigation size={15} />
          <span>اتجاهات</span>
        </a>
      </div>
    </div>
  );
};

export default GoogleMap;
