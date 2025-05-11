import React from 'react'

const Categories = ({brands}) => {
    const uniquecategories = [... new Set(brands.map(brand=> brand.category))]
  return (
    <div>
        <h2 className='oswald text-2xl font-bold pb-2 border-l-4 border-[#ade953] pl-4 my-4'>All Categories </h2>
        <div className='flex flex-col font-semibold opacity-80 border border-[#bbf570] rounded-lg'>
            {
                uniquecategories.map((category, id) =>(
                    <div key={id} className='hover:bg-[#bce661] border p-7 border-[#bbf570]'>
                        {category}
                    </div>
                ))
            }
        </div>
    </div>
  )
}

export default Categories