import React, { useContext } from 'react'
import { AuthContext } from './AuthProvider'
import { Navigate } from 'react-router-dom';

export const PrivateRoute = ({children}) => {
  const {user, loading} = useContext(AuthContext);
  if(loading){
    return <span class="loading loading-spinner loading-md"></span>
  }
  if(user){
    return children;
  }
  return (
    <Navigate to='/login'></Navigate>
  )
}
