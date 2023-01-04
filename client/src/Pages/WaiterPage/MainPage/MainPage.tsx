import React from 'react'
import Header from '../../../Components/WaiterComponents/Header/Navbar';
import './MainPage.css';
import map from './plan.png';

const MainPage = () => {
  return (
    <>
      <Header />
      <p className='waiter-main-page-title'>Main Page</p>
      <img className='waiter-main-page-map' src={map}/>
    </>
  )
}
export default MainPage;