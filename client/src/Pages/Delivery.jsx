import React, { Component } from 'react';
import Drinks from '../Components/Food/Drinks.jsx';
import Desserts from '../Components/Food/Desserts';
import Salads from '../Components/Food/Salads';
import SeaFood from '../Components/Food/SeaFood.jsx';
import Starters from '../Components/Food/Starters.jsx';
import Steaks from '../Components/Food/Steaks.jsx';
import './style/Delivery.css';
import Menu from '../Components/Menu.jsx';


export default class OrderRegistration extends Component {
  render() {
    return (
      <div>
        <h2 align="center">OrderRegistration</h2>
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
