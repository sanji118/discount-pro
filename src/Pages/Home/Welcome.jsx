import React, { useContext } from 'react'
import { AuthContext } from '../../Providers/AuthProvider';

const Welcome = () => {
  const {user} = useContext(AuthContext);


  return (
    <div className='mt-5 md:mt-10 oswald'>
      {user && (
        <div className='text-center font-bold text-lg md:text-xl lg:text-2xl bg-[#cde47d] text-[#394907] px-5'>
          {user.displayName || 'User'}! Welcome to Discount Pro — your one-stop shop for the best coupons and deals!unlock the best deals and start saving now!
        </div>
      )}
    </div>
  )
}

export default Welcome;