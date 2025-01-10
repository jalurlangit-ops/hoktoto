'use client';

import { Inter } from 'next/font/google';
import './globals.css';

const nameDomain = "https://www.dexterhq.com";

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin']
});

function rank() {
    return {
      __html: `{
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "https://www.dexterhq.com",
    "operatingSystem": "ANDROID",
    "applicationCategory": "GameApplication",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "5",
      "ratingCount": "7143729"
    },
	"review": {
          "@type": "Review",
          "reviewRating": {
            "@type": "Rating",
            "ratingValue": "5",
            "bestRating": "5",
            "worstRating": "1"
          },
	"author": {
            "@type": "Person",
            "name": "Hoktoto : Slot Bonus New Member 100 Di Awal To 10X Dan slot Gacor 2025",
            "reviewBody": "Hoktoto hadir dengan promo menarik yang sayang untuk dilewatkan! Nikmati bonus new member 100% di awal hanya dengan melakukan deposit pertama Anda. Dengan turnover (TO) yang rendah, yaitu hanya 10x, Anda bisa lebih mudah meraih kemenangan dan menikmati keuntungan besar. Ini adalah kesempatan sempurna untuk pemain baru yang ingin memulai perjalanan seru di dunia slot online"
          }
        },
    "offers": {
      "@type": "Offer",
      "price": "10000",
      "priceCurrency": "IDR"
    }
  }
  `,
    };
  }

function histats() {
    return {
      __html: `
        var _Hasync= _Hasync|| [];
        _Hasync.push(['Histats.start', '1,4921035,4,5,172,25,00010000']);
        _Hasync.push(['Histats.fasi', '1']);
        _Hasync.push(['Histats.track_hits', '']);
        (function() {
        var hs = document.createElement('script'); hs.type = 'text/javascript'; hs.async = true;
        hs.src = ('//s10.histats.com/js15_as.js');
        (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(hs);
        })();
      `,
    };
  };

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" data-browser="chrome">
      <head>
        <title>Hoktoto : Slot Bonus New Member 100 Di Awal To 10X Dan slot Gacor 2025</title>
        <meta name="description" content="Hoktoto hadir dengan promo menarik yang sayang untuk dilewatkan! Nikmati bonus new member 100% di awal hanya dengan melakukan deposit pertama Anda. Dengan turnover (TO) yang rendah, yaitu hanya 10x, Anda bisa lebih mudah meraih kemenangan dan menikmati keuntungan besar. Ini adalah kesempatan sempurna untuk pemain baru yang ingin memulai perjalanan seru di dunia slot online" />
        <meta name="keywords" content="Hoktoto, Slot Bonus New Member 100 Di Awal To 10X, slot Gacor 2025, Deposit Via Dana, Deposit Pulsa Tanpa Potongan, Depo 50 Bonus 50 To 3X, Link Gacor Deposit Dana, Situs Slot Gacor Hari Ini, slot resmi pragmatic play, Link Slot Gates OF Olympus" />
        <meta name="google-site-verification" content="qeql0PmWocmN6Pb_DexNO3owND6oYimXZALrc3-M8KA" />
        <meta name="application-name" content="hoktoto" />
        <link rel="author" href={nameDomain} />
        <link rel="canonical" href={nameDomain} />
        <meta name="author" content="hoktoto" />
        <meta name="publisher" content="hoktoto" />
        <meta name="copyright" content="hoktoto" />
        <meta name="robots" content="index, follow" />
        <meta name="googlebot" content="index, follow" />
        <meta name="category" content="slot" />
        <meta name="geo.region" content="ID" />
        <meta name="geo.placename" content="Indonesia" />
        <meta name="language" content="id-ID" />
        <meta name="rating" content="general" />
        <meta name="geo.country" content="ID" />
        <meta name="page-locale" content="id,en" />
        <meta name="HandheldFriendly" content="true" />
        <meta name="MobileOptimized" content="width" />
        <meta name="distribution" content="global" />
        <meta name="format-detection" content="telephone=no, address=no, email=no" />
        <meta property="og:title" content="Hoktoto : Slot Bonus New Member 100 Di Awal To 10X Dan slot Gacor 2025" />
        <meta property="og:description" content="Hoktoto hadir dengan promo menarik yang sayang untuk dilewatkan! Nikmati bonus new member 100% di awal hanya dengan melakukan deposit pertama Anda. Dengan turnover (TO) yang rendah, yaitu hanya 10x, Anda bisa lebih mudah meraih kemenangan dan menikmati keuntungan besar. Ini adalah kesempatan sempurna untuk pemain baru yang ingin memulai perjalanan seru di dunia slot online" />
        <meta property="og:url" content={nameDomain} />
        <meta property="og:site_name" content="hoktoto" />
        <meta property="og:locale" content="id_ID" />
        <meta property="og:image" content={nameDomain} />
        <meta property="og:image:width" content="840" />
        <meta property="og:image:height" content="480" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:creator" content="hoktoto" />
        <meta name="twitter:title" content="Hoktoto : Slot Bonus New Member 100 Di Awal To 10X Dan slot Gacor 2025" />
        <meta name="twitter:description" content="Hoktoto hadir dengan promo menarik yang sayang untuk dilewatkan! Nikmati bonus new member 100% di awal hanya dengan melakukan deposit pertama Anda. Dengan turnover (TO) yang rendah, yaitu hanya 10x, Anda bisa lebih mudah meraih kemenangan dan menikmati keuntungan besar. Ini adalah kesempatan sempurna untuk pemain baru yang ingin memulai perjalanan seru di dunia slot online" />
        <meta name="twitter:image" content={nameDomain} />
        <link rel="icon" href="/favicon.ico?favicon.088e6c96.ico" sizes="256x256" type="image/x-icon" />
        <meta name="next-size-adjust" content="" />
        <script type="application/ld+json" dangerouslySetInnerHTML={rank()} key="product-jsonld" />
        <script dangerouslySetInnerHTML={histats()} type="text/javascript" />
      </head>
      <body className={`${inter.variable} antialiased`}>{children}</body>
    </html>
  );
}
