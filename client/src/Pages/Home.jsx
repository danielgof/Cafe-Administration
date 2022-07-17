import React, { Component } from 'react';



export default class Home extends Component {
  render() {
    return (
      <div>
        <h2 align="center">Home</h2>
        <a href="/">
          <button>
            Logout
          </button>
        </a>
        <a href="/client_reg">
          <button>
            Client_reg
          </button>
        </a>
        <a href="/order_reg">
          <button>
            Order_reg
          </button>
        </a>
      </div>
    )
  }
}
