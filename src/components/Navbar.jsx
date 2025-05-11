import React, { useState } from 'react'
import { FaHome, FaSearch, FaUser } from 'react-icons/fa'
import { FaShop } from 'react-icons/fa6'
import { HiInformationCircle } from 'react-icons/hi'
import { Link, NavLink, useNavigate, useLocation } from 'react-router-dom'
import { IoMdClose } from 'react-icons/io'
import { useSearch } from './SearchContext'


export const Navbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false)
  const [isAuthOpen, setIsAuthOpen] = useState(false)

  const { searchTerm, setSearchTerm } = useSearch()
  const navigate = useNavigate()
  const location = useLocation()

  const toggleNavMenu = () => setIsNavOpen(!isNavOpen)
  const toggleAuthMenu = () => setIsAuthOpen(!isAuthOpen)

  const handleSearch = (e) => {
    setSearchTerm(e.target.value)
    if (location.pathname !== '/brand') navigate('/brand')
  }

  const links = (
    <>
      <NavLink to='/' className="border-x-2 px-4 flex gap-3 items-center py-4"><FaHome className='text-2xl'/> Home</NavLink>
      <NavLink to='/brand' className="border-r-2 pr-4 flex gap-3 py-4 items-center"><FaShop className='text-2xl'/> Brands</NavLink>
      <NavLink to='/profile'className="border-r-2 pr-4 py-4 flex gap-3 items-center"><FaUser className='text-2xl'/> My Profile</NavLink>
      <NavLink to='/about' className="border-r-2 pr-4 flex gap-3 py-4 items-center"><HiInformationCircle className='text-3xl'/> About</NavLink>
    </>
  )

  return (
    <div className="fixed top-0 left-0 w-full z-50 bg-[#ade953] shadow-md">
      <div className='hidden md:flex justify-between items-center px-4 py-2'>
        <div className='flex items-center w-2/3'>
          <input
            type="text"
            className="input input-bordered rounded-r-none bg-white w-full"
            placeholder="Search Your Brand..."
            value={searchTerm}
            onChange={handleSearch}
          />
          <div className='bg-[#587717] p-3 rounded-r-lg text-white'>
            <FaSearch />
          </div>
        </div>

        <div className='navbar navbar-end'>
          <Link to='/login' className='btn'>Login</Link>
          <Link to='/register' className='btn'>Register</Link>
        </div>
      </div>

      <hr />

      <div className='navbar flex justify-between items-center px-4 py-2'>
        <img src="/logo-icon.png" alt="Logo" className='w-20 h-18' />

        <div className='hidden md:flex space-x-2 font-semibold opacity-80 gap-5 mx-8'>
          {links}
        </div>

        <div className='md:hidden flex items-center space-x-2'>
          <button className='btn' onClick={toggleAuthMenu}>
            {isAuthOpen ? <IoMdClose size={28} /> : 'Login/Register'}
          </button>
        </div>
      </div>

      <div className='md:hidden px-4'>
        <div className="dropdown w-full">
          <label tabIndex={0} className="btn w-full mb-2">Menu</label>
          <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-[#d8f09e] rounded-box w-full">
            <li><Link to="/"><FaHome /> Home</Link></li>
            <li><Link to="/brand"><FaShop /> Brands</Link></li>
            <li><Link to="/profile"><FaUser /> My Profile</Link></li>
            <li><Link to="/about"><HiInformationCircle /> About</Link></li>
          </ul>
        </div>
      </div>

      {isAuthOpen && (
        <div className='md:hidden flex flex-col px-4 space-y-2 mt-2 font-semibold opacity-80'>
          <Link to='/login' className='btn w-full'>Login</Link>
          <Link to='/register' className='btn w-full'>Register</Link>
        </div>
      )}
    </div>
  )
}

