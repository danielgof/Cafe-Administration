import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import ProtectedRoutes from './Components/ProtectedRoutes/ProtectedRoutes';
import LoginPage from './Pages/LoginPage/LoginPage';
import MainPage from './Pages/MainPage/MainPage';

function App() {
  return (
    <>
      <BrowserRouter>
       <div>
         <Routes>
           <Route path="/" element={<LoginPage />} />
           <Route element={<ProtectedRoutes isAuth={true} />}>
             <Route path="/home" element={<MainPage />} />
           </Route>        
         </Routes>
       </div>
     </BrowserRouter>
    </>
  );
}

export default App;
