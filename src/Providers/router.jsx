
import { createBrowserRouter } from 'react-router-dom';
import { Home } from '../Pages/Home/Home';
import { Brands } from '../Pages/Brands/Brands'
import { Profile } from '../Pages/Profile/Profile';
import NotFound from '../Pages/NotFound';
import Login from '../components/Auth/Login';
import Register from '../components/Auth/Register';
import About from '../Pages/About';
import BrandPage from '../Pages/Brands/BrandPage';
import CouponCard from '../Pages/Brands/CouponCard';
import { PrivateRoute } from './PrivateRoute';
import UpdateProfile from '../Pages/Profile/UpdateProfile';
import ForgetPassword from '../components/Auth/ForgetPassword';

const brandsLoader = async () => {
  try {
    const res = await fetch('https://api.jsonbin.io/v3/b/682011008960c979a59713b8');
    const data = await res.json();
    return data.record; 
  } catch (err) {
    console.error("Failed to load brands", err);
    throw err;
  }
};







const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    loader: brandsLoader,
  },
  {
    path:'/about',
    element:<About></About>
  },
  {
    path: '/brand',
    element: <BrandPage />,
    loader: brandsLoader
  },
  {
    path: '/brand/:id',
    element: <PrivateRoute><CouponCard></CouponCard></PrivateRoute>,
    loader: brandsLoader
  },
  {
    path: '/my-profile',
    element: (
      <PrivateRoute><Profile></Profile></PrivateRoute>
    )
  },
  {
    path: '/update-profile',
    element: <PrivateRoute><UpdateProfile></UpdateProfile></PrivateRoute>
  },
  {
    path:'/login',
    element: <Login></Login>
  },
  {
    path:'/forget-password',
    element: <ForgetPassword></ForgetPassword>
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
