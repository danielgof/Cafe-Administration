import React, { Component } from 'react';
import "./style/Home.css"


export default class Home extends Component {
  render() {
    return (
      <div>
        <h2 align="center">Home</h2>
        <div className='main'>    
          <div className='clr'>
            <a href="/clientreg">
              <button className='clientreg'>
                Registration of a new client
              </button>
            </a>
          </div>
          <div className='dl'>
            <a href="/delivery">
              <button className='delivery'>
                Delivery
              </button>
            </a>
          </div>
        </div>
        <div className='log'>
          <a href="/">
            <button className='logout'>
              Logout
            </button>
          </a>
        </div>
      </div>
    )
  }
}
