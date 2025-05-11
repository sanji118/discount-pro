import React, { useContext, useState } from 'react';
import { AuthContext } from '../../Providers/AuthProvider';
import { updateProfile, updateEmail } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage';


const UpdateProfile = () => {
  const { user } = useContext(AuthContext);
  const [name, setName] = useState(user?.displayName || '');
  const [email, setEmail] = useState(user?.email || '');
  const [photoFile, setPhotoFile] = useState(null);
  const navigate = useNavigate();

  const handlePhotoChange = (e) => {
    const file = e.target.files[0];
    if (file) setPhotoFile(file);
  };

  const handleUpdate = async (e) => {
    e.preventDefault();

    try {
      let photoURL = user?.photoURL;

      if (photoFile) {
        const storage = getStorage();
        const storageRef = ref(storage, `profile-pictures/${user.uid}`);
        await uploadBytes(storageRef, photoFile);
        photoURL = await getDownloadURL(storageRef);
      }

      if (email !== user.email) {
        await updateEmail(user, email);
        toast.success("Email updated.");
      }

      await updateProfile(user, {
        displayName: name,
        photoURL,
      });

      toast.success("Profile updated successfully!");
      navigate("/my-profile");
    } catch (err) {
      toast.error("Error: " + err.message);
    }
  };

  return (
    <div className="min-h-screen py-10 bg-[url(/profileBg.avif)] flex items-center justify-center">
      <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-lg">
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
            <label className="block text-gray-600 font-semibold py-2">Upload Photo</label>
            <input
              type="file"
              accept="image/*"
              onChange={handlePhotoChange}
              className="file-input file-input-bordered bg-[#d9efa1] placeholder:bg-[#d9efa1] w-full"
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


