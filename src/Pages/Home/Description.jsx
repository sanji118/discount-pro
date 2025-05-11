import React from 'react'
import cart from '../../assets/shopping-cart.jpg'
import sale from '../../assets/sale.avif'

const Description = () => {
  return (
    <div className='m-5 md:m-10 lg:m-12'>
        <div className='flex justify-evenly items-center gap-5'>
            <div >
                <h2 className='oswald text-5xl font-bold pb-6 border-l-4 border-[#ade953] pl-4'>Explore Thousands of Amazing Deals!</h2>
                <p className='opacity-80'>Discover the latest promo codes, discounts, and coupons from top brands and retailers.</p>
            </div>
            <img src={cart} alt="Shopping cart" className='w-1/2'/>
        </div>
        <div className='flex justify-evenly items-center gap-5'>
            <div><h2 className='oswald text-5xl font-bold pb-6 border-l-4 border-[#ade953] pl-4'>Unlock Savings on Your Order!</h2>
            <p className='opacity-80'>Click to reveal your promo code, visit the store, and apply it at checkout to enjoy your discount.</p></div>
            <img src={sale} alt="Sale" className='w-1/2'/>
        </div>
    </div>
  )
}

export default Description