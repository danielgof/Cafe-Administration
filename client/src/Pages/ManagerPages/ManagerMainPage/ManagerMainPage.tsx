import React from 'react'
import ManagerHeader from '../../../Components/ManagerComponents/Header/ManagerHeader';
import './ManagerMainPage.css';
import logo from './DC.png';

const ManagerMainPage = () => {
  return (
    <>
      <ManagerHeader />
      {/* <h1 className='manager-main-page-title'>Manager Main Page</h1> */}
      <div className='logo-cafe'> 
        <img 
          src={logo}
          // className="d-inline-block align-top"
          alt="Logo"/>
      </div>
    </>
  )
}
export default ManagerMainPage;