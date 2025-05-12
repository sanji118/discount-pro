import React, { useContext } from 'react'
import { AuthContext } from '../../Providers/AuthProvider'
import { Link} from 'react-router-dom';
import { FaArrowLeft, FaGreaterThan, FaLanguage, FaMoon } from 'react-icons/fa';

export const Profile = () => {

  const {user} = useContext(AuthContext);
  return (
    <div className="min-h-screen">
      <div className='bg-gradient-to-b from-[#587203] to-[#cde863] h-52 relative text-center font-bold text-[#233b03]'><Link to='/'><FaArrowLeft className='text-xl absolute top-2 left-2'></FaArrowLeft></Link>Profile</div>
      <div className="flex items-center">
        <img
          src={user?.photoURL || "https://i.ibb.co/ZVFsg37/default-profile.png"}
          alt="profile"
          className="w-32 h-32 rounded-full absolute right-24 border-4  border-[#f6f8f5]"
        />
      </div>
      <div className='flex items-center justify-center mt-20 ml-10'>
      <Link to="/update-profile">
        <button className="btn">Edit Profile</button>
      </Link>
        </div>
      <div>
        <h2 className="text-xl md:text-2xl font-bold text-gray-700 bg-[#d8f09d] oswald px-5 md:px-12 lg:px-14 my-4">Welcome, {user?.displayName || "User"} </h2>
      </div>
      <div>
        <div>
        <h2 className=' bg-[#d8f09d] px-5 md:px-12 lg:px-14 '>Personal Info</h2>
        <div className='px-5 md:px-12 lg:px-14 my-3 opacity-80'><p >Your username:   {user?.displayName || "Not provided"}</p>
        <p>Email:  {user?.email}</p></div>
      </div>
      <div>
        <h2 className=' bg-[#d8f09d] px-5 md:px-12 lg:px-14 '>Preference</h2>
        <div className='px-5 md:px-12 lg:px-14 my-3 opacity-80'><div className='opacity-80 flex justify-between items-center'>
          <p className='flex items-center gap-2'><FaLanguage className='text-2xl'></FaLanguage> <p>Language</p> </p>
          <p><FaGreaterThan></FaGreaterThan></p>
        </div>
        <div className='opacity-80 flex justify-between items-center'>
          <p className='flex items-center gap-2'><FaMoon className='text-lg' /> <p>Dark Mode</p> </p>
          <p><FaGreaterThan></FaGreaterThan></p>
        </div></div>
      </div>
      </div>
    </div>
  );

}
