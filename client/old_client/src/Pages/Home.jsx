<<<<<<< HEAD
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
=======
import React, { Component } from 'react';
import "./style/Home.css"


export default class Home extends Component {
  render() {
    return (
      <div>
        <h2 align="center">Home</h2>
        <div className='main'>    
          <div className='clr'>
            <a href="/users">
              <button className='clientreg'>
                User's data
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
          <div className='us'>
            <a href="/clients">
              <button className='users'>
                Client's data
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
>>>>>>> fcd647004f1b6a8017ded6183d91fa7eb7264aa3
