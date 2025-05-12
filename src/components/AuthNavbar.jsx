import React, { useContext, useState } from 'react'
import { AuthContext } from '../Providers/AuthProvider';

const AuthNavbar = () => {
    const [isAuthOpen, setIsAuthOpen] = useState(false);
    const { user, signOutUser } = useContext(AuthContext);
    const handleLogout = () => {
        signOutUser()
        .then(() => console.log('Logged out'))
        .catch(err => console.error(err));
    };
  return (
    <div className='mt-16'>
    
        {/**Desktop auth */}
        <div className='hidden w-full md:navbar navbar-end bg-[#ade953]'>
            {!user ? (
            <>
                <Link to='/login' className='btn'>Login</Link>
                <Link to='/register' className='btn'>Register</Link>
            </>
            ) : (
            <>
                <div className='flex justify-center items-center gap-5'>
                <img src={user.photoURL} className="w-10 h-10 rounded-full border" alt="User" />
                <span className='font-semibold'>{user.email}</span>
                <button onClick={handleLogout} className='btn'>Logout</button>
                </div>
            </>
            )}
        </div>
    
          
        {/**Mobile auth */}
        {!isAuthOpen && (
            <div className='md:hidden navbar font-semibold opacity-80 bg-[#ade953] mt-16'>
            {!user ? (
                <>
                <Link to='/login' className='btn w-full'>Login</Link>
                <Link to='/register' className='btn w-full'>Register</Link>
                </>
            ) : (
                <div className='navbar justify-around bg-[#9de92b]'>
                <img src={user.photoURL} className="w-12 h-12 rounded-full border" alt="User" />
                <div className='flex flex-col'>
                    <span className='text-sm'>{user.displayName}</span>
                    <span className='text-[0.75rem]'>{user.email}</span>
                </div>
                <button onClick={handleLogout} className='btn'>Logout</button>
                </div>
            )}
            </div>
        )}
    </div>
  )
}

export default AuthNavbar