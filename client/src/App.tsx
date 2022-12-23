import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import ProtectedRoutes from './Components/ProtectedRoutes/ProtectedRoutes';
import LoginPage from './Pages/Login/LoginPage/LoginPage';
import MainPage from './Pages/MainPage/MainPage';
import OrderPage from './Pages/OrderPage/OrderPage';
import AnalyticsPage from './Pages/AnalyticsPage/AnalyticsPage';
import WaiterLogin from './Pages/Login/WaiterLogin/WaiterLogin';
import ManagerLogin from './Pages/Login/ManagerLogin/ManagerLogin';

function App() {
  const isAuth = true;
  return (
    <>
      <BrowserRouter>
        <div>
        <Routes>
            <Route path="/" element={<LoginPage />} />
            <Route path="/waiter_login" element={<WaiterLogin />} />
            <Route path="/manager_login" element={<ManagerLogin />} />
            <Route element={<ProtectedRoutes isAuth={isAuth} />}>
              <Route path="/home" element={<MainPage />} />
              <Route path="/order" element={<OrderPage />} />
              <Route path="/analytics" element={<AnalyticsPage />} />
           </Route>        
         </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;