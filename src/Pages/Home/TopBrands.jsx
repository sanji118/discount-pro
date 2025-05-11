import React from 'react';
import Marquee from 'react-fast-marquee';
import { Link } from 'react-router-dom';

const TopBrands = ({ brands }) => {
  // Filter brands with rating 4 or higher
  const filteredBrands = brands?.filter(brand => brand.rating >= 4.3);
  console.log(filteredBrands)

  return (
    <div className="my-10 text-center">
      <h2 className="text-3xl font-bold mb-4">Top Brands</h2>
      <p className="opacity-70 pb-3">
        This section displays popular brand logos. Hover to pause, click to view details.
      </p>

      <Marquee pauseOnHover={true} speed={50} gradient={false}>
        <div className="flex items-center gap-8">
          {filteredBrands?.map((brand) => (
            <Link
              key={brand._id}
              to={`/brand/${brand._id}`}
              className="flex flex-col items-center transition-transform hover:scale-110"
            >
              <img
                src={brand.brand_logo}
                alt={brand.brand_name}
                className="h-20 object-contain"
              />
              <div className="text-sm mt-2 text-gray-600">{brand.brand_name}</div>
            </Link>
          ))}
        </div>
      </Marquee>
    </div>
  );
};

export default TopBrands;
