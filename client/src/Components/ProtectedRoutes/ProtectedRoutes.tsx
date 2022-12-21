import React from 'react'
import { Outlet, Navigate } from 'react-router';

const ProtectedRoutes = ({isAuth}: any) => {
    // const isAuth = true;
    return isAuth ? <Outlet /> : <Navigate to = "/" />;
}
export default ProtectedRoutes;