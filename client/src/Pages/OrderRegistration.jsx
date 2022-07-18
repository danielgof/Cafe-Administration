import React, { Component } from 'react';
import OrderReg from '../Components/OrderReg';



export default class OrderRegistration extends Component {
  render() {
    return (
      <div>
        <h2 align="center">OrderRegistration</h2>
        <OrderReg/>
        <a href="/home">
          <button>
            Home
          </button>
        </a>
      </div>
    )
  }
}
