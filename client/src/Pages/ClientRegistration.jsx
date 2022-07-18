import React, { Component } from 'react';
import ClientReg from '../Components/ClientReg';


export default class ClientRegistration extends Component {
  render() {
    return (
      <div>
        <h2 align="center">ClientRegistration</h2>
        <ClientReg />
        <a href="/home">
          <button>
            Home
          </button>
        </a>
      </div>
    )
  }
}
