import React from 'react';
import { useLoaderData } from 'react-router-dom';

const BrandsOnSale = () => {
  const brands = useLoaderData();

  
  const saleBrands = brands.filter(brand => brand.isSaleOn);

  return (
    <>
    <h2 className='oswald text-5xl font-bold pb-6 border-l-8 border-[#ade953] pl-4 ml-5'>Brand On Sale</h2>
    <div className='grid md:grid-cols-2 lg:grid-cols-4 mx-5 md:mx-9 lg:mx-12 gap-7 my-10'>
      
    {saleBrands.map(brand => (
        <div key={brand._id} className="card bg-base-100 image-full w-76 md:w-96 shadow-sm">
          <figure>
            <img
              src={brand.brand_logo}
              alt={`${brand.brand_name} logo`}
              className="h-32 object-contain mx-auto"
            />
          </figure>
          <div className="card-body">
            <h2 className="text-xl font-semibold">{brand.brand_name}</h2>
            <p >
              <strong>Category:</strong> {brand.category}
            </p>
            <p className="mb-4">
              <strong>Total Coupons:</strong> {brand.coupons.length}
            </p>
            <div className="card-actions justify-start">
              <a
                href={brand.shopLink}
                target="_blank"
                rel="noopener noreferrer"
                className='no-underline'
              >
                <button className="btn">Visit Shop</button>
              </a>
            </div>
          </div>
        </div>
      ))}
    </div></>
  );
};

export default BrandsOnSale;
