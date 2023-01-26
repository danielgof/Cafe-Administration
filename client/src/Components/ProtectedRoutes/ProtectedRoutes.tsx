import { Outlet, Navigate } from 'react-router';

const ProtectedRoutes = ({isAuth}: any) => {
    return isAuth ? <Outlet /> : <Navigate to = "/" />;
}
export default ProtectedRoutes;