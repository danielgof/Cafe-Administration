import React from 'react'
import { Outlet, Navigate } from 'react-router';



const useAuth = () => {
  const user = { loggedIn: true };
  return user && user.loggedIn;
}

const ProtectedRouts = () => {
  const isAuth = useAuth();
  return isAuth ? <Outlet /> : <Navigate to = "/registration" />;
}

export default ProtectedRouts
