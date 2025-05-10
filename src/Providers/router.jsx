import React from 'react';
import { createBrowserRouter } from 'react-router-dom';



import { Home } from '../Pages/Home/Home';
import { Brands } from '../Pages/Brands';
import { BrandDetails } from '../Pages/BrandDetails';
import { Profile } from '../Pages/Profile/Profile';
import NotFound from '../Pages/NotFound';
import Login from '../components/Auth/Login';
import Register from '../components/Auth/Register';
import About from '../Pages/About';
import TopBrands from '../Pages/Home/TopBrands';

const brands = () => fetch('/brands.json')



const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    children : [
      {
        path: '/',
        element: <TopBrands></TopBrands>,
        loader: brands,
      }
    ],
  },
  {
    path:'/',
    element:<About></About>
  },
  {
    path: '/brands',
    element: <Brands />
  },
  {
    path: '/brand/:id',
    element: (
      <BrandDetails></BrandDetails>
    )
  },
  {
    path: '/my-profile',
    element: (
      <Profile></Profile>
    )
  },
  {
    path:'/login',
    element: <Login></Login>
  },
  {
    path: '/register',
    element: <Register></Register>
  },
  {
    path: '*',
    element: <NotFound></NotFound>
  }
]);

export default router;
