import React, { useEffect, useState } from 'react';

const BannerSlider = () => {
  const images = [
    '/shopping-bags.jpg',
    '/coupons.avif',
    '/beauty-product.avif',
    '/discount-tag.jpg',
    '/coupon2.avif',
    '/grocery.avif',
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex(prevIndex => (prevIndex + 1) % images.length);
    }, 3000); 

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative overflow-hidden my-10 md:my-16">
      <div className="flex gap-5 transition-all duration-500" style={{ transform: `translateX(-${index * 576}px)` }}>
        {images.map((img, i) => (
          <div key={i} className="flex-shrink-0">
            <img
              src={img}
              className="rounded-box w-[576px] h-[276px]"
              alt={`banner-${i}`}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default BannerSlider;




