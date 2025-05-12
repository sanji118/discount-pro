import { FaStar, FaRegStar, FaStarHalfAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const BrandCards = ({ brands }) => {

  const rows = [0, 1, 2].map(index=>{
    const start = Math.floor((brands.length / 3)* index);
    const end = Math.floor((brands.length / 3) *(index + 1));
    return brands.slice(start, end);
  })

  return (
    <div className="md:pt-14 md:px-10 text-[#eac491]">
      {
        rows.map((row, rowIndex) => (
        <div
          key={rowIndex}
          className="carousel carousel-center rounded-box w-full md:max-w-md gap-5 p-4"
        >
          {brands.slice(
            Math.floor((brands.length / 3) * rowIndex), 
            Math.floor((brands.length /3) * (rowIndex +1))
            ).map((brand) => {
            const fullStars = Math.floor(brand.rating);
            const hasHalfStar = brand.rating % 1 >= 0.5;
            const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

            return (
              <div
                key={brand._id}
                className="carousel-item card bg-[#6d912e] w-60"
              >
                <figure className="pt-5">
                  <img
                    src={brand.brand_logo}
                    alt={brand.brand_name}
                    className="rounded-lg w-10/12 h-20"
                  />
                </figure>
                <div className="card-body items-center text-center">
                  <h2 className="card-title oswald">{brand.brand_name}</h2>
                  <p>{brand.description}</p>

                  <div className="flex justify-center mt-2 items-center">
                    
                    {[...Array(fullStars)].map((_, i) => (
                      <FaStar key={`full-${i}`} className="text-yellow-400" />
                    ))}
                    {hasHalfStar && <FaStarHalfAlt className="text-yellow-400" />}
                    {[...Array(emptyStars)].map((_, i) => (
                      <FaRegStar key={`empty-${i}`} className="text-yellow-400" />
                    ))}
                    <p className='opacity-70 pl-2 font-semibold'>{brand.rating}</p>
                  </div>

                  {brand.isSaleOn && (
                    <h1 className="text-lg font-bold text-[#f2acac] animate-bounce">
                      Sale is On!
                    </h1>
                  )}

                  <div className="card-actions">
                    <Link to={`/brand/${brand._id}`}>
                      <button className="btn mt-3">View Coupon</button>
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      ))}
    </div>
  );
};

export default BrandCards;
