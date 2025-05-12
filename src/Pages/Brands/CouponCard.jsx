import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

import { toast } from 'react-toastify';
import { FaStar, FaStarHalfAlt, FaRegStar } from 'react-icons/fa';
import 'react-toastify/dist/ReactToastify.css';
import CopyToClipboard from 'react-copy-to-clipboard';
import { Navbar } from '../../components/Navbar';

const CouponCard = () => {
  const { id } = useParams();
  const [brand, setBrand] = useState(null);

  useEffect(() => {
    fetch('https://api.jsonbin.io/v3/b/682011008960c979a59713b8')
      .then(res => res.json())
      .then(data => {
        const foundBrand = data.record.find((b) => b._id === id);
        setBrand(foundBrand);
      })
      .catch(err => console.error(err));
  }, [id]);

  const handleCopy = () => {
    toast.success('Coupon code copied!');
  };

  if (!brand) return <p className="text-center">Loading...</p>;

  const fullStars = Math.floor(brand.rating);
  const hasHalfStar = brand.rating % 1 >= 0.5;
  const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

  return (
    <div className="px-4 md:px-10 py-6">
      <Navbar></Navbar>
      
      <div className="text-center mt-40 mb-8">
        <img src={brand.brand_logo} alt={brand.brand_name} className="mx-auto h-24" />
        <h1 className="text-3xl font-bold oswald mt-2">{brand.brand_name}</h1>
        <div className="flex justify-center mt-2">
          {[...Array(fullStars)].map((_, i) => <FaStar key={`full-${i}`} className="text-yellow-400" />)}
          {hasHalfStar && <FaStarHalfAlt className="text-yellow-400" />}
          {[...Array(emptyStars)].map((_, i) => <FaRegStar key={`empty-${i}`} className="text-yellow-400" />)}
        </div>
      </div>

      
      <div className="grid md:grid-cols-3 gap-6">
        {brand.coupons.map((coupon, index) => (
          <div key={index} className="card border shadow-md p-5 space-y-3">
            <h2 className="text-2xl font-bold oswald">{coupon.description}</h2>
            <h2 className='text-lg font-semibold'><p className='opacity-70 '>Coupon Type:</p> {coupon.coupon_type}</h2>
            
            <p className='text-green-500'>{coupon.condition}</p>
            <p className='text-red-500'>Expire: {coupon.expiry_date}</p>
            <p className="font-mono bg-gray-100 p-2 rounded">Code: <span className="font-bold">{coupon.coupon_code}</span></p>

            {/* Copy Code */}
            <CopyToClipboard text={coupon.code} onCopy={handleCopy}>
              <button className="btn btn-outline btn-sm">Copy Code</button>
            </CopyToClipboard>

            <Link to={brand.shopLink} target="_blank" rel="noopener noreferrer">
              <button className="btn mt-2">Use Now</button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CouponCard;
