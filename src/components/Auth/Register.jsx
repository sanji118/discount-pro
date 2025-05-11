import React, { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { AuthContext } from '../../Providers/AuthProvider'
import { toast } from 'react-toastify';

const Register = () => {
  const {createUser , signInGoogle, updateUserProfile} = useContext(AuthContext);
  const navigate = useNavigate();
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const validationPass = (password)=>{
    if (password?.length < 6){
      toast.warn("Password must be at least 6 characters.");
    }
    if(!/[A-Z]/.test(password)){
      toast.warn("Password must contain at least one uppercase letter.");
    }
    if(!/[a-z]/.test(password)){
      toast.warn('Password must be contain at least one lowecase letter.')
    }
    return '';
  }

  const handleSubmit = e => {
    e.preventDefault();
    const name = e.target.name.value;
    const photo = e.target.photo.files[0];
    const email = e.target.email.value;
    const password = e.target.password.value;


    const error = validationPass(password);
    if (error) {
      setPasswordError(error);
      return;
    }

    setPasswordError('');
    createUser(email, password)
      .then(()=>{
        return updateUserProfile({displayName: name, photoURL});
      })
      .then(result => {
        const user = result.user;
        toast.success("Registered successfully!");
        navigate('/')
      })
      .catch(error => {
        toast.error(error.message);
      });
  };

  const handleGoogleSignin = () =>{
    signInGoogle()
    .then(result =>{
      toast.success("Signed in with Google!");
    })
    .catch (error =>{
      toast.error(error.message);
    })
  }

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
            <form onSubmit={
              handleSubmit} className="fieldset">
              <label className="label text-black font-bold text-lg">Name</label>
              <input
                type="text"
                name="name"
                className="input bg-[#d9efa1] placeholder:bg-[#d9efa1] placeholder:text-black"
                placeholder="Full Name"
              />

              <label className="label text-black font-bold text-lg">Email</label>
              <input
                type="email"
                name="email"
                className="input bg-[#d9efa1] placeholder:bg-[#d9efa1] placeholder:text-black"
                placeholder="Email"
              />

              <label className="label text-black font-bold text-lg">Photo URL</label>
              <input
                type="file"
                name="photo"
                accept='image/*'
                className="file-input bg-[#d9efa1] placeholder:bg-[#d9efa1] placeholder:text-black"
                placeholder="Link to Photo"
              />

              <label className="label text-black font-bold text-lg">Password</label>
              <input
                type="password"
                name="password"
                className="input bg-[#d9efa1] placeholder:bg-[#d9efa1] placeholder:text-black"
                placeholder="Password"
              />

              <button className="btn my-4 ">Register</button>

              <hr />
              <p className="text-sm py-2">
                Already have an account?
                <Link to="/login" className="text-green-500 font-bold ml-2">Login</Link>
              </p>
            </form>

            <hr />

            <button onClick={handleGoogleSignin} class="flex items-center gap-2 w-full justify-center border-2 border-blue-500 px-8 py-2 my-2 rounded-lg text-black font-bold">
              <svg aria-label="Google logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g><path d="m0 0H512V512H0" fill="#fff"></path><path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path><path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path><path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path><path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path></g></svg>
              Sign In with Google
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Register
