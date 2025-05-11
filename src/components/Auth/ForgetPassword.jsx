import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { getAuth, sendPasswordResetEmail, signOut } from 'firebase/auth';
import { toast } from 'react-toastify';

const ForgetPassword = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const auth = getAuth();

  const [email, setEmail] = useState('');

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const emailParam = params.get('email');
    if (emailParam) setEmail(emailParam);
  }, [location.search]);

  const handleReset = async (e) => {
    e.preventDefault();
    if (!email) {
      toast.error("Please enter a valid email.");
      return;
    }

    try {
      await sendPasswordResetEmail(auth, email);
      toast.success('Password reset email sent!');
      await signOut(auth); 
      window.location.href = 'https://mail.google.com'; 
    } catch (error) {
      console.error(error);
      toast.error("Failed to send reset email.");
    }
  };

  return (
    <div className="hero min-h-screen">
      <div className="card w-full max-w-md shadow-2xl bg-base-100">
        <div className="card-body">
          <h2 className="text-3xl font-bold mb-4 text-center">Reset Your Password</h2>
          <p className="text-sm text-center mb-4">
            Please enter your email address below. A password reset link will be sent to your email.
          </p>
          <form onSubmit={handleReset}>
            <label className="label font-semibold">Email Address</label>
            <input
              type="email"
              className="input input-bordered w-full bg-[#d9efa1]"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
            />
            <button type="submit" className="btn btn-primary mt-4 w-full">
              Send Reset Link
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ForgetPassword;

