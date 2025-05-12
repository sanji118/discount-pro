import { useEffect, useState } from "react";
import BrandCards from "./BrandCard"
import { useSearch } from "../../components/SearchContext";

 

export const Brands = ({brands}) => {
  const {searchTerm} = useSearch();
  const [selected, SetSelected] = useState('All');
  const [filteredBrands, setFilteredBrands] = useState(brands);


  const uniquecategories = ['All', ... new Set(brands.map(brand=> brand.category))]
  
  
  useEffect(()=>{
    let updated = brands;

    if(selected !== 'All'){
      updated = updated.filter(brand => brand.category === selected);
    }

    if(searchTerm.trim()){
      updated = updated.filter(brand=>
        brand.brand_name.toLowerCase().includes(searchTerm.toLowerCase())
      )
    }

    setFilteredBrands(updated);
}, [selected, searchTerm, brands])



  const handleCategoryClick = category =>{
    SetSelected(category);
  }

  return (
    <div className='my-7 mx-5 md:mx-10 lg:mx-12 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-10'>
      <div>
        <h2 className='oswald text-2xl font-bold pb-2 border-l-4 border-[#ade953] pl-4 my-4'>All Categories </h2>
        <div className='flex flex-col font-semibold opacity-80 border border-[#bbf570] rounded-lg'>
        {
          uniquecategories.map((category, id) =>(
              <button 
              key={category} 
              className={`hover:bg-[#bce661] p-7
              ${selected === category? 'bg-[#5f8715]': 'border border-[#bbf570]'}`}
              onClick={()=> handleCategoryClick(category)}
              >
                  {category}
              </button>
          ))
        }
      </div></div> 
      <div className='md:col-span-2 lg:col-span-3'>
        <BrandCards brands={filteredBrands} /> 
      </div>
    </div>
  )
}

