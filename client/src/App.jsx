import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import StartPage from './Pages/StartPage';
// import Home from './Pages/Home';
// import Clients from './Pages/Clients';
// import OrderRegistration from './Pages/OrderRegistration';
// import Registration from './Pages/Registration';
// import ProtectedRouts from './ProtectedRouts';
import Header from './Components/Header/Header';


function App() {
  return (
    <Header />
    // <BrowserRouter>
    //   <div>
    //     <Routes>
    //       <Route exact path="/" element={<StartPage />} />
    //       <Route exact path="/registration" element={<Registration />} />
    //       <Route element={<ProtectedRouts isAuth={true} />}>
    //         <Route exact path="/home" element={<Home />} />
    //         <Route exact path="/clients" element={<Clients />} />
    //         <Route exact path="/delivery" element={<OrderRegistration />} />  
    //       </Route>        
    //     </Routes>
    //   </div>
    // </BrowserRouter>
  );
}


export default App;
