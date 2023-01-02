import React from 'react'
import './LoginPage.css';

const LoginPage = () => {
  return (
    <>
      <div className='container'>
        <div className='login-page-title'>
          <h2>Login Page</h2>
        </div>
        <div className='waiter-login'>
          <a href='/waiter_login'>
            <button className='login-waiter-btn' type="submit">
              login as a waiter
            </button>
          </a>
        </div>
        <div className='manager-login'>
          <a href='/manager_login'>
            <button className="login-manager-btn" type="submit">
              login as a manager
            </button>
          </a>
        </div>
      </div>
    </>
  )
}
export default LoginPage;