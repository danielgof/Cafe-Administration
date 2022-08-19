import React, { Component } from 'react';
// import OrderReg from '../Components/OrderReg';
import Drinks from '../Components/Food/Drinks.jsx';



export default class OrderRegistration extends Component {
  render() {
    return (
      <div>
        <h2 align="center">Delivery</h2>
        {/* <OrderReg/> */}
        <div className='foodTypes'>
          <Drinks color="#FFA737"/>
        </div>
        
        <a href="/home">
          <button>
            Home
          </button>
        </a>
      </div>
    )
  }
}
