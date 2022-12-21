import React from 'react'
import { Outlet, Navigate } from 'react-router';


// const useAuth = () => {
//   var user = { loggedIn: true };
//   return user && user.loggedIn;
// }

function ProtectedRouts({isAuth}) {
  // const isAuth = auth;
  return isAuth ? <Outlet /> : <Navigate to = "/registration" />;
}

export default ProtectedRouts
