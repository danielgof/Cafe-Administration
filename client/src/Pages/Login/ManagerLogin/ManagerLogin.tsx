import React from 'react'
import LoginManager from '../../../Components/Login/LoginManager/LoginManager';
import './ManagerLogin.css';

const ManagerLogin = () => {
  return (
    <>
      <LoginManager />
      <a href='/'>
        <button className='btn-back-login'>
          Return home
        </button>
      </a>
    </>
  )
}
export default ManagerLogin;