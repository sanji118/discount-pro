import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Providers/AuthProvider';
import { toast } from 'react-toastify';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import ForgetPassword from './ForgetPassword';

const Login = () => {
  const { signInUser, signInGoogle } = useContext(AuthContext);
  const [passwordVisible, setPasswordVisible] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || '/';

  const handleSubmit = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    signInUser(email, password)
      .then(() => {
        toast.success('Login successful!');
        navigate(from, { replace: true });
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  const handleGoogleSignin = () => {
    signInGoogle()
      .then(() => {
        toast.success('Signed in with Google!');
        navigate(from, { replace: true });
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  return (
    <div className="hero min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold oswald">Login now!</h1>
          <p className="py-6 w-2/3 mx-auto">
            Sign in to access your personalized dashboard, track favorites, and enjoy exclusive features!
          </p>
        </div>

        <div className="card w-full max-w-sm shrink-0 shadow-2xl">
          <div className="card-body">
            <form onSubmit={handleSubmit}>
              <label className="label text-black font-bold text-lg">Email</label>
              <input
                type="email"
                name="email"
                className="input bg-[#d9efa1] placeholder:text-black"
                placeholder="Email"
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
                  className="absolute right-4 top-3 cursor-pointer text-xl text-gray-700 z-10"
                >
                  {passwordVisible ? <FaEyeSlash /> : <FaEye />}
                </span>

                <div className="mt-2 text-right">
                  <Link
                    to={`/forget-password?email=${encodeURIComponent(document.querySelector('input[name="email"]')?.value || '')}`}
                    className="link link-hover text-sm text-blue-600"
                    onClick={(e) => {
                      const email = document.querySelector('input[name="email"]')?.value;
                      if (!email) {
                        e.preventDefault();
                        toast.error("Please enter your email first.");
                      }
                    }}
                  >
                    Forgot password?
                  </Link>
                </div>

              </div>


              <button type="submit" className="btn my-4 w-full">Login</button>

              <p className="text-sm text-center">
                New here?
                <Link to="/register" className="text-green-500 font-bold ml-2">Register</Link>
              </p>
            </form>

            <div className="border-t-2 border-gray-300 text-center py-3 font-semibold opacity-80">or</div>

            <button onClick={handleGoogleSignin} className="btn shadow-none  text-black font-bold w-full" style={{backgroundColor:'white', border:'2px solid lightblue'}}>
              <img src="/google.png" className='w-4 h-4 mr-2' alt="" />Log in with Google
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;

