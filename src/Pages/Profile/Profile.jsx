import React, { useContext } from 'react'
import { AuthContext } from '../../Providers/AuthProvider'
import { Link, useNavigate } from 'react-router-dom';

export const Profile = () => {

  const {user} = useContext(AuthContext);
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-[url(/profileBg.avif)] py-10 px-4">
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-md p-8">
        <div className="flex justify-between items-center mb-6">
          <div>
            <h2 className="text-2xl font-bold text-gray-700">Welcome, {user?.displayName || "User"} </h2>
            <p className="text-sm text-gray-500">Here is your profile information</p>
          </div>
          <Link to="/update-profile">
            <button className="btn bg-blue-500 hover:bg-blue-600 text-white">Edit</button>
          </Link>
        </div>

        <div className="flex gap-8 items-center">
          <img
            src={user?.photoURL || "https://i.ibb.co/ZVFsg37/default-profile.png"}
            alt="profile"
            className="w-32 h-32 rounded-full object-cover border-4 border-blue-300"
          />
          <div>
            <h3 className="text-xl font-semibold">{user?.displayName || "Not provided"}</h3>
            <p className="text-gray-500">{user?.email}</p>
          </div>
        </div>
      </div>
    </div>
  );

}
