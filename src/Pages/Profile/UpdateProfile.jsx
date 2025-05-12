import React, { useContext, useState } from 'react';
import { AuthContext } from '../../Providers/AuthProvider';
import { updateProfile, updateEmail } from 'firebase/auth';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { FaArrowLeft } from 'react-icons/fa';


const UpdateProfile = () => {
  const { user } = useContext(AuthContext);
  const [name, setName] = useState(user?.displayName || '');
  const [email, setEmail] = useState(user?.email || '');
  const [photoUrl, setPhotoUrl] = useState(user?.photoURL || '');
  const navigate = useNavigate();


  const handleUpdate = async (e) => {
    e.preventDefault();

    try {
      await updateProfile(user, {
        displayName: name,
        photoURL: photoUrl,
      });

      toast.success("Profile updated successfully!");
      navigate("/my-profile");
    } catch (err) {
      toast.error("Error: " + err.message);
    }
  };

  return (
    <div className="min-h-screen">
      <div className='bg-gradient-to-b from-[#587203] to-[#cde863] h-52 relative text-center font-bold text-[#233b03]'><Link to='/my-profile'><FaArrowLeft className='text-xl absolute top-2 left-2'></FaArrowLeft></Link>Edit Profile</div>
      <div className="flex items-center">
        <img
          src={user?.photoURL || "https://i.ibb.co/ZVFsg37/default-profile.png"}
          alt="profile"
          className="w-32 h-32 rounded-full absolute left-24 border-4  border-[#f6f8f5]"
        />
      </div>
      <div className="bg-white p-8 rounded-2xl w-full max-w-lg py-20 md:py-28">
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-700">Update Profile</h2>
        <form onSubmit={handleUpdate} className="space-y-4">
          <div>
            <label className="block text-gray-600 font-semibold">Name</label>
            <input
              type="text"
              value={name}
              onChange={e => setName(e.target.value)}
              className="input bg-[#d9efa1] placeholder:bg-[#d9efa1] placeholder:text-black w-full"
              placeholder="Your Name"
              required
            />
          </div>
          <div>
            <label className="block text-gray-600 font-semibold">Email</label>
            <input
              type="email"
              onChange={e => setEmail(e.target.value)}
              className="input bg-[#d9efa1] placeholder:bg-[#d9efa1] placeholder:text-black w-full"
              placeholder="Your Email"
              required
            />
          </div>
          <div>
            <label className="block text-gray-600 font-semibold py-2">Photo URL</label>
            <input
              type="text"
              accept="image/*"
              onChange={e=> setPhotoUrl(e.target.value)}
              className="input bg-[#d9efa1] placeholder:bg-[#d9efa1] placeholder:text-black w-full"
              placeholder='https://example.com/photo.jpg' required
            />
          </div>
          <button type="submit" className="btn w-full">
            Update Information
          </button>
        </form>
      </div>
    </div>
  );
};

export default UpdateProfile;


