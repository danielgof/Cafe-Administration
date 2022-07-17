import React, { Component } from 'react'
import { Navigate } from 'react-router';
import Login from '../Components/Login'


export default class StartPage extends Component {
  render() {
    return (
      <div>
        <h2 align="center">Login</h2>
        <Login />
        <a href="/registration">
          <button>
            Register
          </button>
        </a>
      </div>
    )
  }
}
