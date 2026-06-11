import React from 'react';
import { Helmet } from 'react-helmet';
import { FaArrowRight, FaShoppingCart } from 'react-icons/fa';
import shopPromoImage from '../assets/shop-promo-generated.png';
import { shopProducts } from '../data/shopData';

const getSchemaPrice = (price) =>
  String(price).replace(/[^0-9,.-]/g, '').replace(',', '.');

const ProductCard = ({ product, isReflection = false }) => (
  <article
    className={`h-[168px] rounded-lg overflow-hidden flex ${
      isReflection
        ? 'bg-[#0e1219]/25 border border-cyan-100/12'
        : 'bg-[#11151d]/95 border border-[#2c3645] hover:border-smart-red transition-all shadow-[0_12px_24px_rgba(0,0,0,0.45)]'
    }`}
  >
    <div className="w-[56%] h-full flex items-center justify-center overflow-visible">
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-full object-contain p-0"
        style={{ transform: product.imageScale ? `scale(${product.imageScale})` : undefined }}
      />
    </div>

    <div className="w-[44%] min-w-0 py-4 pr-3 flex flex-col justify-center">
      <h3 className="text-white text-[clamp(12px,0.82vw,15px)] font-black uppercase leading-tight break-words">
        {product.name}
      </h3>

      <p className="text-gray-400 text-[clamp(10px,0.62vw,12px)] mt-1.5 leading-tight break-words">
        {product.subtitle}
      </p>

      <span className="text-white font-black text-[clamp(14px,0.9vw,17px)] mt-auto pt-5 whitespace-nowrap">
        {product.price}
      </span>
    </div>
  </article>
);

const ProductWithReflection = ({ product }) => (
  <div className="relative h-[236px]">
    <div className="relative z-40">
      <ProductCard product={product} />
    </div>

    <div className="absolute left-0 right-0 top-[168px] h-px bg-white/26 z-50 pointer-events-none" />
    <div className="absolute left-1 right-1 top-[169px] h-[2px] bg-cyan-300/36 blur-[1px] z-50 pointer-events-none" />

    <div
      className="absolute left-1 right-1 top-[168px] h-[70px] z-20 overflow-hidden opacity-44 pointer-events-none"
      style={{
        maskImage:
          'linear-gradient(to bottom, rgba(0,0,0,0.86) 0%, rgba(0,0,0,0.34) 42%, rgba(0,0,0,0.08) 72%, transparent 100%)',
        WebkitMaskImage:
          'linear-gradient(to bottom, rgba(0,0,0,0.86) 0%, rgba(0,0,0,0.34) 42%, rgba(0,0,0,0.08) 72%, transparent 100%)',
      }}
    >
      <div
        className="origin-top blur-[0.9px] brightness-90 saturate-110 contrast-105"
        style={{ transform: 'scaleY(-0.62)' }}
      >
        <ProductCard product={product} isReflection />
      </div>
    </div>

    <div
      className="absolute left-0 top-[168px] w-[56%] h-[84px] z-30 overflow-hidden pointer-events-none"
      style={{
        maskImage:
          'linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,0.72) 34%, rgba(0,0,0,0.28) 66%, transparent 100%)',
        WebkitMaskImage:
          'linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,0.72) 34%, rgba(0,0,0,0.28) 66%, transparent 100%)',
      }}
    >
      <img
        src={product.image}
        alt=""
        aria-hidden="true"
        className="w-full h-[168px] object-contain p-0 opacity-72 blur-[0.45px] brightness-115 saturate-140 contrast-115"
        style={{ transform: product.imageScale ? `scale(${product.imageScale}) scaleY(-1)` : 'scaleY(-1)' }}
      />
    </div>

    <div
      className="absolute left-0 top-[176px] w-[56%] h-[60px] z-20 overflow-hidden pointer-events-none"
      style={{
        maskImage:
          'linear-gradient(to bottom, rgba(0,0,0,0.55), transparent 82%)',
        WebkitMaskImage:
          'linear-gradient(to bottom, rgba(0,0,0,0.55), transparent 82%)',
      }}
    >
      <img
        src={product.image}
        alt=""
        aria-hidden="true"
        className="w-full h-[168px] object-contain p-0 opacity-32 blur-[3px] brightness-125 saturate-150"
        style={{ transform: product.imageScale ? `scale(${product.imageScale}) scaleY(-1)` : 'scaleY(-1)' }}
      />
    </div>

    <div className="absolute left-4 right-4 top-[170px] h-[12px] bg-cyan-300/13 blur-lg z-40 pointer-events-none" />
  </div>
);

const PromoPanel = () => (
  <div className="relative z-10 min-h-[272px] w-full flex-shrink-0 overflow-hidden md:-mr-20 md:w-[390px] lg:-mr-24 lg:w-[430px]">
    <img
      src={shopPromoImage}
      alt="SmartFix Shop Produkte"
      className="absolute inset-0 h-full w-full object-cover object-[33%_50%]"
    />

    <div className="absolute inset-y-0 left-0 w-[72%] bg-gradient-to-r from-black/72 via-black/34 to-transparent" />
    <div className="absolute left-6 top-6 z-20 max-w-[280px]">
      <h2 className="text-white text-[clamp(26px,2vw,36px)] font-black leading-none">
        SmartFix Shop
      </h2>
      <p className="mt-2 text-[10px] sm:text-xs font-semibold leading-tight text-white/85">
        Hochwertige Produkte fuer mehr Sicherheit & Komfort.
      </p>
    </div>

    <div className="absolute inset-y-0 right-0 w-44 bg-gradient-to-r from-transparent via-[#090b10]/72 to-[#090b10]" />
    <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-r from-transparent to-[#090b10]" />
  </div>
);

const ShopButton = () => (
  <div className="w-full md:w-[132px] h-[236px] flex items-center justify-center flex-shrink-0 z-30">
    <button
      aria-label="Zum SmartFix Online Shop"
      className="group bg-transparent border border-[#384354] text-white w-[112px] h-[76px] rounded-lg flex items-center justify-center gap-3 hover:bg-smart-red hover:border-smart-red transition-all whitespace-nowrap shadow-[0_12px_24px_rgba(0,0,0,0.35)]"
    >
      <span className="flex flex-col items-center gap-1">
        <FaShoppingCart className="text-xl" />
        <span className="font-bold text-xs">Zum Shop</span>
      </span>
      <FaArrowRight className="text-xs opacity-80 transition-transform group-hover:translate-x-1" />
    </button>
  </div>
);

const ShopSection = () => {
  const structuredData = {
    '@context': 'https://schema.org/',
    '@type': 'ItemList',
    itemListElement: shopProducts.map((product, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      item: {
        '@type': 'Product',
        name: product.name,
        description: product.subtitle,
        offers: {
          '@type': 'Offer',
          priceCurrency: 'EUR',
          price: getSchemaPrice(product.price),
          availability: 'https://schema.org/InStock',
        },
      },
    })),
  };

  return (
    <section id="shop" className="bg-[#0b0c10] pt-[10px] pb-20 px-6">
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>

      <div className="max-w-[1540px] mx-auto relative overflow-hidden rounded-2xl border border-[#2a3442] bg-[#090b10]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_12%_16%,rgba(93,185,220,0.08),transparent_28%),radial-gradient(circle_at_74%_100%,rgba(36,130,255,0.08),transparent_22%),radial-gradient(circle_at_92%_100%,rgba(220,38,38,0.12),transparent_20%)] pointer-events-none" />
        <div className="absolute left-6 right-6 bottom-[15px] h-px bg-gradient-to-r from-transparent via-cyan-200/14 to-transparent pointer-events-none" />
        <div className="absolute right-0 bottom-0 h-px w-52 bg-smart-red/60 pointer-events-none" />

        <div className="relative flex flex-col md:flex-row items-stretch">
          <PromoPanel />

          <div className="relative flex-1 z-30 px-4 pt-5 pb-5 lg:px-5">
            <div className="absolute left-4 right-4 top-[158px] h-[64px] bg-[linear-gradient(180deg,rgba(77,208,255,0.08)_0%,rgba(20,80,110,0.04)_42%,rgba(4,8,12,0)_100%)] pointer-events-none z-0 lg:left-5 lg:right-5" />
            <div className="absolute left-[2%] right-[8%] top-[206px] h-[24px] bg-[linear-gradient(90deg,transparent,rgba(150,230,255,0.18),rgba(40,130,255,0.09),transparent)] blur-sm pointer-events-none z-0" />
            <div className="absolute left-[4%] right-[12%] top-[230px] h-[36px] bg-cyan-400/8 blur-2xl pointer-events-none z-0" />
            <div className="absolute left-[42%] right-[22%] top-[164px] h-[30px] bg-blue-500/8 blur-2xl pointer-events-none z-0" />
            <div className="absolute right-[2%] top-[196px] h-[34px] w-44 bg-smart-red/16 blur-2xl pointer-events-none z-0" />

            <div className="relative grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 z-30">
              {shopProducts.map((product) => (
                <ProductWithReflection key={product.id} product={product} />
              ))}
            </div>
          </div>

          <div className="px-4 pt-5 pb-4">
            <ShopButton />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShopSection;
