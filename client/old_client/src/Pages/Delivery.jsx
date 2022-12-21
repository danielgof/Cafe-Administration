import React, { Component } from 'react';
import './style/Delivery.css';
import Menu from '../Components/Menu.jsx';


export default class OrderRegistration extends Component {
  render() {
    return (
      <div>
        <h2 align="center">Delivery</h2>
        <div>
          <Menu />
        </div>
        <h2></h2>
        <div className='btnHome'>
          <a href="/home">
            <button>
              Home
            </button>
          </a>  
        </div>
      </div>
    )
  }
}
