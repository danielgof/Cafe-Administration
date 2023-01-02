import React, { useState, useMemo } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import ProtectedRoutes from './Components/ProtectedRoutes/ProtectedRoutes';
import LoginPage from './Pages/Login/LoginPage/LoginPage';
import MainPage from './Pages/WaiterPage/MainPage/MainPage';
import OrderPage from './Pages/WaiterPage/OrderPage/OrderPage';
import AnalyticsPage from './Pages/ManagerPages/AnalyticsPage/AnalyticsPage';
import WaiterLogin from './Pages/Login/WaiterLogin/WaiterLogin';
import ManagerLogin from './Pages/Login/ManagerLogin/ManagerLogin';
import FinishOrderPage from './Pages/WaiterPage/FinishOrderPage/FinishOrderPage';
import LoginContext from "./Components/Login/PerfomeLogin";

function App() {
  const [isAuth, setLogin] = useState(false);
  const value = useMemo(() => ({ isAuth, setLogin }), [isAuth]);
  return (
    <>
    <LoginContext.Provider value={value}>
      <BrowserRouter>
        <div>
        <Routes>
            <Route path="/" element={<LoginPage />} />
            <Route path="/waiter_login" element={<WaiterLogin />} />
            <Route path="/manager_login" element={<ManagerLogin />} />
            <Route element={<ProtectedRoutes isAuth={isAuth} />}>
              <Route path="/home_waiter" element={<MainPage />} />
              <Route path="/order" element={<OrderPage />} />
              <Route path="/order_create" element={<FinishOrderPage />} />
              <Route path="/analytics" element={<AnalyticsPage />} />
           </Route>        
         </Routes>
        </div>
      </BrowserRouter>
      </LoginContext.Provider>
    </>
  );
}

export default App;
