import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Home from './pages/Home/Home';
import Brands from './pages/Brands/Brands';
import BrandDetails from './pages/BrandDetails/BrandDetails';
import Profile from './pages/Profile/Profile';
import Login from './components/Auth/Login';
import Register from './components/Auth/Register';
import NotFound from './pages/404/NotFound';
import PrivateRoute from './components/Auth/PrivateRoute';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/brands',
    element: <Brands />
  },
  {
    path: '/brand/:id',
    element: (
      <PrivateRoute>
        <BrandDetails />
      </PrivateRoute>
    )
  },
  {
    path: '/my-profile',
    element: (
      <PrivateRoute>
        <Profile />
      </PrivateRoute>
    )
  },
  {
    path: '/login',
    element: <Login />
  },
  {
    path: '/register',
    element: <Register />
  },
  {
    path: '*',
    element: <NotFound />
  }
]);

export default router;
