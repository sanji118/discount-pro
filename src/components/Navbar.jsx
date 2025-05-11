import React, { useState } from 'react'
import { FaHome, FaUser } from 'react-icons/fa'
import { FaShop } from 'react-icons/fa6'
import { HiInformationCircle } from 'react-icons/hi'
import { Link, NavLink } from 'react-router-dom'
import { GiHamburgerMenu } from 'react-icons/gi'
import { IoMdClose } from 'react-icons/io'

export const Navbar = () => {
    const [isNavOpen, setIsNavOpen] = useState(false)
    const [isAuthOpen, setIsAuthOpen] = useState(false)

    const toggleNavMenu = () => {
        setIsNavOpen(!isNavOpen)
    }

    const toggleAuthMenu = () => {
        setIsAuthOpen(!isAuthOpen)
    }

    const links = (
        <>
            <NavLink to='/' className="nav-item"><FaHome /> Home</NavLink>
            <NavLink to='/brands' className="nav-item"><FaShop /> Brands</NavLink>
            <NavLink to='/profile' className="nav-item"><FaUser /> My Profile</NavLink>
            <NavLink to='/about' className="nav-item"><HiInformationCircle /> About</NavLink>
        </>
    )

    return (
        <div className='navbar justify-between text-[#333333] bg-[#ade953] px-4'>
            <div className='flex items-center justify-between w-full'>
                {/* Logo */}
                <div className='flex-1'>
                    <img src="/logo-icon.png" alt="Logo" className='w-20 h-18'/>
                </div>

                {/* Links for Desktop/Laptop */}
                <div className='hidden md:flex space-x-2 font-semibold opacity-80'>
                    {links}
                </div>

                {/* Buttons for Desktop */}
                <div className='hidden md:flex navbar-end'>
                    <button className='btn'>
                        <Link to='/login'>Login</Link>
                    </button>
                    <button className='btn'>
                        <Link to='/register'>Register</Link>
                    </button>
                </div>

                {/* Hamburger Menu for Mobile */}
                <div className='md:hidden'>
                    <button onClick={toggleNavMenu}>
                        {isNavOpen ? <IoMdClose size={28} /> : <GiHamburgerMenu size={28} />}
                    </button>
                </div>
            </div>

            {/* Mobile Dropdown for Links */}
            {isNavOpen && (
                <div className='md:hidden flex flex-col space-y-2 mt-2 font-semibold opacity-80'>
                    {links}
                </div>
            )}

            {/* Mobile Dropdown for Login/Register */}
            <div className='md:hidden ml-5'>
                <button onClick={toggleAuthMenu} className='btn mt-2'>
                    {isAuthOpen ? <IoMdClose size={28} /> : 'Login/Register'}
                </button>
                {isAuthOpen && (
                    <div className='flex flex-col space-y-2 mt-2 font-semibold opacity-80'>
                        <Link to='/login' className='btn w-full'>Login</Link>
                        <Link to='/register' className='btn w-full'>Register</Link>
                    </div>
                )}
            </div>
        </div>
    )
}

