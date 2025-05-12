import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Providers/AuthProvider';
import { toast } from 'react-toastify';
import { FaEye, FaEyeSlash, FaGoogle } from 'react-icons/fa';

const Register = () => {
  const { createUser, signInGoogle, updateUserProfile } = useContext(AuthContext);
  const navigate = useNavigate();

  const [passwordVisible, setPasswordVisible] = useState(false);

  const validatePassword = (password) => {
    let isValid = true;
    if (password.length < 6) {
      toast.warn(' Password must be at least 6 characters.');
      isValid = false;
    }
    if (!/[A-Z]/.test(password)) {
      toast.warn('Password must include at least one uppercase letter.');
      isValid = false;
    }
    if (!/[a-z]/.test(password)) {
      toast.warn('Password must include at least one lowercase letter.');
      isValid = false;
    }
    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const name = e.target.name.value.trim();
    const email = e.target.email.value.trim();
    const password = e.target.password.value;
    const photoUrl = e.target.photoURL.value.trim(); 

    const isValid = validatePassword(password);
    if (!isValid) return;

    createUser(email, password)
      .then(() => updateUserProfile({ 
        displayName: name, 
        photoURL : photoUrl }))
      .then(() => {
        navigate('/');
        toast.success('Registered successfully!');
        
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  const handleGoogleSignin = () => {
    signInGoogle()
      .then(() => {
        navigate('/');
        toast.success('Signed in with Google!');
        
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  return (
    <div className="hero min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold oswald">Register now!</h1>
          <p className="py-6 mx-auto w-2/3">
            Create your account to discover trusted brands, receive tailored deals, and unlock members-only savings.
          </p>
        </div>

        <div className="card w-full max-w-sm shrink-0 shadow-2xl">
          <div className="card-body">
            <form onSubmit={handleSubmit}>
              <label className="label text-black font-bold text-lg">Name</label>
              <input
                type="text"
                name="name"
                className="input bg-[#d9efa1] placeholder:text-black"
                placeholder="Full Name"
                required
              />

              <label className="label text-black font-bold text-lg">Email</label>
              <input
                type="email"
                name="email"
                className="input bg-[#d9efa1] placeholder:text-black"
                placeholder="Email"
                required
              />

              <label className="label text-black font-bold text-lg">Photo URl</label>
              <input
                type="text"
                name="photoURL"
                accept="image/*"
                placeholder='https://example.com/image.extention'
                className="input bg-[#d9efa1]"
                required
              />

              <label className="label text-black font-bold text-lg">Password</label>
              <div className="relative">
                <input
                  type={passwordVisible ? 'text' : 'password'}
                  name="password"
                  className="input bg-[#d9efa1] w-full placeholder:text-black"
                  placeholder="Password"
                  required
                />
                <span
                  onClick={() => setPasswordVisible(!passwordVisible)}
                  className="absolute right-4 top-3 cursor-pointer z-10 text-xl text-gray-700"
                >
                  {passwordVisible ? <FaEyeSlash /> : <FaEye />}
                </span>
              </div>

              <button type="submit" className="btn my-4 w-full">Register</button>

              <p className="text-sm py-2 text-center">
                Already have an account?
                <Link to="/login" className="text-green-500 font-bold ml-2">Login</Link>
              </p>
            </form>

            <div className="border-t-2 border-gray-300 text-center py-3 font-semibold opacity-80">or</div>

            <button onClick={handleGoogleSignin} className="btn shadow-none  text-black font-bold w-full" style={{backgroundColor:'white', border:'2px solid lightblue'}}>
              <img src="/google.png" className='w-4 h-4 mr-2' alt="" />Sign in with Google
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
