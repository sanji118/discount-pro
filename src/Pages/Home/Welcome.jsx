import React, { useContext } from 'react'
import { AuthContext } from '../../Providers/AuthProvider';

const Welcome = () => {
  const {user} = useContext(AuthContext);


  return (
    <div className='mt-32 oswald'>
      {user && (
        <div className='text-center font-bold text-lg md:text-xl lg:text-2xl py-1 bg-[#cde47d] text-[#394907]'>
          {user.displayName || 'User'}! Welcome to Discount Pro — your one-stop shop for the best coupons and deals!unlock the best deals and start saving now!
        </div>
      )}
    </div>
  )
}

export default Welcome;