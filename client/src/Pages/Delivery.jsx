import React, { Component } from 'react';
import Drinks from '../Components/Food/Drinks.jsx';
import Desserts from '../Components/Food/Desserts';
import Salads from '../Components/Food/Salads';
import SeaFood from '../Components/Food/SeaFood.jsx';
import Starters from '../Components/Food/Starters.jsx';
import Steaks from '../Components/Food/Steaks.jsx';
import './style/Delivery.css';


export default class OrderRegistration extends Component {
  render() {
    return (
      <div>
        <h2 align="center">OrderRegistration</h2>
        <div className='foodTypes'>
          <Drinks color="#FFA737"/>
          <Desserts color="#FAA843"/>
          <Salads color="#FAA843"/>
          <SeaFood color="#FAA843"/>
          <Starters color="#FAA843"/>
          <Steaks color="#FAA843"/>
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
