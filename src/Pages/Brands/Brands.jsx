import BrandCards from "./BrandCard"
import Categories from "./Categories"

 

export const Brands = ({brands}) => {
  return (
    <div className='mt-20 mx-5 md:mx-10 lg:mx-12 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-10'>
      <div><Categories brands={brands}></Categories></div> 
      <div className='md:col-span-2 lg:col-span-3'>
        <BrandCards brands={brands} /> 
      </div>
    </div>
  )
}

