
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
import BrandsOnSale from '../Pages/Home/BrandsOnSale';

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
    path:'/',
    element:<About></About>
  },
  {
    path: '/brands',
    element: <Brands />,
    loader: brandsLoader
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
