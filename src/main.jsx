import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import router from './Providers/router';
import { RouterProvider } from 'react-router-dom';
import { SearchProvider } from './components/SearchContext';
import { ToastContainer } from 'react-toastify';
import { AuthProvider } from './Providers/AuthProvider';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <SearchProvider>
        <RouterProvider router={router} />
      </SearchProvider>
      <ToastContainer />
    </AuthProvider>
  </StrictMode>
);


