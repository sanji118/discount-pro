import React from 'react';
import { useNavigate } from 'react-router-dom';

const NotFound = () => {
  const navigate = useNavigate();

  const goToHome = () => {
    navigate('/');
  };

  return (
    <div className="hero min-h-screen bg-gray-100">
      <div className="hero-content text-center">
        <div className="max-w-md">
          <img 
            src="/error.avif" 
            alt="404 Error" 
            className="w-64 mx-auto my-4 rounded-lg"
          />
          <p className="py-3 text-lg oswald">Oops! The page you're looking for doesn't exist.</p>
          <button onClick={goToHome} className="btn btn-primary mt-4">
            Go Back to Home
          </button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
