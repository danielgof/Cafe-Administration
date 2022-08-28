import React, { Component } from 'react'
import Reg from '../Components/Reg'
import "./style/Registration.css"

export default class Registration extends Component {
  render() {
    return (
      <div className='container'>
        <Reg />
        <a href="/">
          <button className='login'>
            Login
          </button>
        </a>
      </div>
    )
  }
}