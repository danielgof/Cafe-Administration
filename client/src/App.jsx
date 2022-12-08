<<<<<<< HEAD
import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import StartPage from './Pages/StartPage';
import Home from './Pages/Home';
import Clients from './Pages/Clients';
import OrderRegistration from './Pages/OrderRegistration';
import Registration from './Pages/Registration';
import ProtectedRouts from './ProtectedRouts';


function App() {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route exact path="/" element={<StartPage />} />
          <Route exact path="/registration" element={<Registration />} />
          <Route element={<ProtectedRouts isAuth={true} />}>
            <Route exact path="/home" element={<Home />} />
            <Route exact path="/clients" element={<Clients />} />
            <Route exact path="/delivery" element={<OrderRegistration />} />  
          </Route>        
        </Routes>
      </div>
    </BrowserRouter>
  );
}


export default App;
=======
import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import StartPage from './Pages/StartPage';
import Home from './Pages/Home';
import Users from './Pages/Users';
import Delivery from './Pages/Delivery';
import Clients from './Pages/Clients';
import Registration from './Pages/Registration';
import ProtectedRouts from './ProtectedRouts';


function App() {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route exact path="/" element={<StartPage />} />
          <Route exact path="/registration" element={<Registration />} />
          <Route element={<ProtectedRouts isAuth={true} />}>
            <Route exact path="/home" element={<Home />} />
            <Route exact path="/users" element={<Users />} />
            <Route exact path="/delivery" element={<Delivery />} />  
            <Route exact path="/clients" element={<Clients />} /> 
          </Route>        
        </Routes>
      </div>
    </BrowserRouter>
  );
}


export default App;
>>>>>>> fcd647004f1b6a8017ded6183d91fa7eb7264aa3
