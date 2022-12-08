<<<<<<< HEAD
import React, { Component } from 'react';
import { Navigate } from 'react-router';
import Login from '../Components/Login';
import "./style/StartPage.css"

export default class StartPage extends Component {
  render() {
    return (
      <div>
        <h1 align="center">Welcome to Daniel's cafe</h1>
        <Login />
        <a href="/registration" >
          <button className="RegisterBtn">
            Register
          </button>
        </a>
      </div>
    )
  }
}
=======
import React, { Component } from 'react';
import { Navigate } from 'react-router';
import Login from '../Components/Login';
import "./style/StartPage.css"

export default class StartPage extends Component {
  render() {
    return (
      <div>
        <h1 align="center">Cafe Administration</h1>
        <Login className='login'/>
        {/* <a href="/registration" >
          <button className="RegisterBtn">
            Register
          </button>
        </a> */}
      </div>
    )
  }
}
>>>>>>> fcd647004f1b6a8017ded6183d91fa7eb7264aa3
