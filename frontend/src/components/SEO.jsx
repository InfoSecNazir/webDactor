import React from 'react';
import { Helmet } from 'react-helmet-async';

const BASE_URL = 'https://a6a8a486-12a4-4067-96d2-2eee635010ba.preview.emergentagent.com';
const DEFAULT_IMAGE = `${BASE_URL}/images/logo.png`;
const SITE_NAME = 'عيادة د. عبد الرحمن القاري';

const SEO = ({
  title,
  description,
  keywords,
  image = DEFAULT_IMAGE,
  url,
  type = 'website',
}) => {
  const fullTitle = title
    ? `${title} | ${SITE_NAME}`
    : `${SITE_NAME} | تقويم وتجميل الأسنان - ريف دمشق`;

  const fullUrl = url ? `${BASE_URL}${url}` : BASE_URL;

  const defaultDesc =
    'عيادة متخصصة في تقويم وتجميل الأسنان في ريف دمشق - ببيلا. بورد سوري في تقويم الأسنان. احجز موعدك: 0981235650';

  const fullDesc = description || defaultDesc;

  return (
    <Helmet>
      {/* Primary */}
      <html lang="ar" dir="rtl" />
      <title>{fullTitle}</title>
      <meta name="title" content={fullTitle} />
      <meta name="description" content={fullDesc} />
      {keywords && <meta name="keywords" content={keywords} />}
      <link rel="canonical" href={fullUrl} />

      {/* Open Graph */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={fullDesc} />
      <meta property="og:image" content={image} />
      <meta property="og:locale" content="ar_AR" />
      <meta property="og:site_name" content={SITE_NAME} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={fullDesc} />
      <meta name="twitter:image" content={image} />
    </Helmet>
  );
};

export default SEO;
