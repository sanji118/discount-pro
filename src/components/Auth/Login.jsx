import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Providers/AuthProvider';
import { toast } from 'react-toastify';

const Login = () => {
  const navigate = useNavigate();
  const { signInUser, signInGoogle } = useContext(AuthContext);
  const [emailInput, setEmailInput] = useState('');

  const handleLogin = e => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    setEmailInput(email); 
    signInUser(email, password)
      .then(userCredential => {
        e.target.reset();
        toast.success('Logged in successfully!');
        navigate('/');
      })
      .catch(error => {
        toast.error('Invalid email or password');
        console.error(error.message);
      });
  };

  const handleGoogleLogin = () => {
    signInGoogle()
      .then(() => {
        toast.success('Logged in with Google!');
        navigate('/');
      })
      .catch(error => {
        toast.error(error.message);
      });
  };

  return (
    <div className="hero min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold oswald">Login now!</h1>
          <p className="py-6">
            Access your account to manage saved brands, track exclusive offers, and stay updated on the latest verified coupons.
          </p>
        </div>
        <div className="card w-full max-w-sm shrink-0 shadow-2xl">
          <div className="card-body">
            <form onSubmit={handleLogin} className="fieldset">
              <label className="label text-black font-bold text-lg">Email</label>
              <input
                type="email"
                name="email"
                className="input bg-[#d9efa1] placeholder:bg-[#d9efa1] placeholder:text-black"
                placeholder="Email"
                onChange={(e) => setEmailInput(e.target.value)}
                value={emailInput}
              />
              <label className="label text-black font-bold text-lg">Password</label>
              <input
                type="password"
                name="password"
                className="input bg-[#d9efa1] placeholder:bg-[#d9efa1] placeholder:text-black"
                placeholder="Password"
              />
              <div>
                <Link
                  to={`/forget-password?email=${encodeURIComponent(emailInput)}`}
                  className="link link-hover text-sm text-blue-500"
                >
                  Forgot password?
                </Link>
              </div>
              <button className="btn my-4">Login</button>

              <hr />
              <p className="text-sm py-2">
                Don't have an account?{' '}
                <Link to="/register" className="text-red-500 font-bold ml-2">
                  Register
                </Link>
              </p>
            </form>

            <hr />
            <button
              onClick={handleGoogleLogin}
              className="flex items-center gap-2 w-full justify-center border-2 border-blue-500 px-8 py-2 my-2 rounded-lg text-black font-bold"
            >
              <svg aria-label="Google logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g><path d="m0 0H512V512H0" fill="#fff"></path><path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path><path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path><path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path><path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path></g></svg>
              Login with Google
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
