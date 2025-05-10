import React from 'react'
import { FaHome, FaInfoCircle, FaUser } from 'react-icons/fa'
import { FaShop } from 'react-icons/fa6';
import { HiInformationCircle } from "react-icons/hi";
import { Link, NavLink } from 'react-router-dom'

export const Navbar = () => {
    const links = <>
        <NavLink to='/' className="nav-item"><FaHome></FaHome>Home</NavLink>
        <NavLink to='/brands' className="nav-item"><FaShop></FaShop>Brands</NavLink>
        <NavLink to='/profile' className="nav-item"><FaUser></FaUser>My Profile</NavLink>
        <NavLink to='/about' className="nav-item"><HiInformationCircle /> About</NavLink>
    </>
  return (
    <div className='navbar justify-between text-[#333333] bg-[#ade953]'>
        <div className='flex-1'>
            <img src="/logo-icon.png" alt="Logo" className='w-20 h-18'/>
        </div>
        <div >
            <ul className='menu menu-horizontal px-1 space-x-2 font-semibold opacity-80'>
                {links}
            </ul>
        </div>
        <div className='navbar w-2/5 navbar-end'>
            <button className='btn'>
                <Link>Login</Link>
            </button>
            <button className='btn'>
                <Link>Register</Link>
            </button>
        </div>
    </div>
  )
}
