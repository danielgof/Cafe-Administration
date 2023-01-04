import React, { useState, useMemo } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import ProtectedRoutes from './Components/ProtectedRoutes/ProtectedRoutes';
import LoginPage from './Pages/Login/LoginPage/LoginPage';
import WaiterMainPage from './Pages/WaiterPage/WaiterMainPage/WaiterMainPage';
import OrderPage from './Pages/WaiterPage/OrderPage/OrderPage';
import AnalyticsPage from './Pages/ManagerPages/AnalyticsPage/AnalyticsPage';
import WaiterLogin from './Pages/Login/WaiterLogin/WaiterLogin';
import ManagerLogin from './Pages/Login/ManagerLogin/ManagerLogin';
import FinishOrderPage from './Pages/WaiterPage/FinishOrderPage/FinishOrderPage';
import LoginContext from "./Components/Login/LoginContext";
import ManagerMainPage from './Pages/ManagerPages/ManagerMainPage/ManagerMainPage';
import OrderContext from './Components/WaiterComponents/Order/OrderContext/OrderContext';
import PersonalPage from './Pages/ManagerPages/PersonalPage/PersonalPage';

function App() {
  const [login, setLogin] = useState(true);
  const value = useMemo(() => ({ login, setLogin }), [login]);
  const [food, setFood] = useState([]);
  const array = useMemo(() => ({ food, setFood }), [food]);
  return (
    <>
    <OrderContext.Provider value={array}>
      <LoginContext.Provider value={value}>
        <BrowserRouter>
          <div>
          <Routes>
              <Route path="/" element={<LoginPage />} />
              <Route path="/waiter_login" element={<WaiterLogin />} />
              <Route path="/manager_login" element={<ManagerLogin />} />
              <Route element={<ProtectedRoutes isAuth={login} />}>
                <Route path="/home_waiter" element={<WaiterMainPage />} />
                <Route path="/home_manager" element={<ManagerMainPage />} />
                <Route path="/order" element={<OrderPage />} />
                <Route path="/order_create" element={<FinishOrderPage />} />
                <Route path="/analytics" element={<AnalyticsPage />} />
                <Route path="/personal_managment" element={<PersonalPage />} />
            </Route>        
          </Routes>
          </div>
        </BrowserRouter>
        </LoginContext.Provider>
      </OrderContext.Provider>
    </>
  );
}

export default App;
