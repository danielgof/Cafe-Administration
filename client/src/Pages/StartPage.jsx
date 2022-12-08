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
