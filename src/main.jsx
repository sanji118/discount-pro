import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import router from './Providers/router';
import { RouterProvider } from 'react-router-dom';
import { SearchProvider } from './components/SearchContext';
import { ToastContainer } from 'react-toastify';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <SearchProvider><RouterProvider router={router} />
    <ToastContainer></ToastContainer>
    </SearchProvider>
    
  </StrictMode>
);

