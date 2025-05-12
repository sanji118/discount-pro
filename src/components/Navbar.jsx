import React, { useContext, useState } from 'react';
import { FaHome, FaSearch, FaUser } from 'react-icons/fa';
import { FaShop } from 'react-icons/fa6';
import { HiInformationCircle } from 'react-icons/hi';
import { NavLink, useNavigate, useLocation, Link } from 'react-router-dom';
import { IoMdClose } from 'react-icons/io';
import { useSearch } from './SearchContext';
import { AuthContext } from '../Providers/AuthProvider';
import AuthNavbar from './AuthNavbar';

export const Navbar = () => {
  const { searchTerm, setSearchTerm } = useSearch();
  const navigate = useNavigate();
  const location = useLocation();

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
    if (location.pathname !== '/brand') navigate('/brand');
  };


  

  const links = (
    <>
      <NavLink to='/' className="border-x-2 px-4 flex gap-3 items-center py-4"><FaHome className='text-2xl' /> Home</NavLink>
      <NavLink to='/brand' className="border-r-2 pr-4 flex gap-3 py-4 items-center"><FaShop className='text-2xl' /> Brands</NavLink>
      <NavLink to='/my-profile' className="border-r-2 pr-4 py-1 flex gap-3 items-center"><FaUser className='text-2xl' /> My Profile</NavLink>
      <NavLink to='/about' className="border-r-2 pr-4 flex gap-3 py-4 items-center"><HiInformationCircle className='text-3xl' /> About</NavLink>
    </>
  );

  return (
    <div>
      <div className="fixed top-0 left-0 w-full z-50 bg-[#ade953]">
        {/* (desktop) */}
        <div className='hidden md:navbar h-16 gap-5'>
          <img src="/logo-icon.png" alt="" className='w-20 h-18 '/>
          <div className='flex items-center w-2/3'>
            <input
              type="text"
              className="input rounded-r-none bg-white w-full"
              placeholder="Search Your Brand..."
              value={searchTerm}
              onChange={handleSearch}
            />
            <button onClick={()=> console.log(searchTerm)} className='bg-[#587717] p-3 rounded-r-lg text-white' disabled={!searchTerm} >
              <FaSearch />
            </button>
          </div>
          <div className='navbar navbar-end justify-center gap-4'>
            {links}
          </div>
        </div>

        
        {/**Mobile navbaar */}
        <div className='md:hidden w-full'>
          <div className='navbar flex justify-between items-center'>
            <img src="/logo-icon.png" alt="Logo" className='w-20 h-18' />

            {/* Search bar */}
            <div className='flex' style={{width:'15rem;'}}>
              <input
                type="text"
                className="input input-bordered rounded-r-none bg-white w-full"
                placeholder="Search Your Brand..."
                value={searchTerm}
                onChange={handleSearch}
              />
              <button className='bg-[#587717] rounded-r-lg text-white flex items-center p-2' disabled={!searchTerm}>
                <FaSearch />
              </button>
            </div>

            {/* Dropdown menu */}
            <div className='px-2'>
              <div className="dropdown">
                <label tabIndex={0} className="btn ">Menu</label>
                <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-[#d8f09e] rounded-box w-40">
                  <li><Link to="/"><FaHome /> Home</Link></li>
                  <li><Link to="/brand"><FaShop /> Brands</Link></li>
                  <li><Link to="/my-profile"><FaUser /> My Profile</Link></li>
                  <li><Link to="/about"><HiInformationCircle /> About</Link></li>
                </ul>
              </div>
            </div>
          </div>
        </div>

      </div>
      <hr></hr>
      <AuthNavbar></AuthNavbar>
    </div>
  );
};


