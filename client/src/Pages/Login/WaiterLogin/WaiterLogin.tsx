import React from 'react'
import LoginWaiter from '../../../Components/Login/LoginWaiter/LoginWaiter';
import './WaiterLogin.css'

const WaiterLogin = () => {
  return (
    <>
      <LoginWaiter />
      <a href='/'>
        <button className='btn-back-login'>
          Return home
        </button>
      </a>
    </>
  )
}
export default WaiterLogin;