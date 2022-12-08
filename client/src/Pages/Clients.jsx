import React, { Component } from 'react';
import ClientReg from '../Components/ClientReg';
import './style/Home.css';


export default class Clients extends Component {
  render() {
    return (
      <div>
        <h2 align="center">Clients</h2>
        <div className="clientReg">
          <ClientReg />
        </div>
        <div className='clientList'>
          <table>
            <tr>
              <td>Emil</td>
              <td>Tobias</td>
              <td>Linus</td>
            </tr>
          </table>
        </div>
        <div className='clientList'>
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
