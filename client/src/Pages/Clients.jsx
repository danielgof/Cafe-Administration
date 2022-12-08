<<<<<<< HEAD
import React, { Component } from 'react';
import ClientReg from '../Components/ClientReg';
import './style/Home.css';
=======
import React, { Component } from 'react'
import ClientsData from '../Components/ClientsData';
import './style/Clients.css';
>>>>>>> fcd647004f1b6a8017ded6183d91fa7eb7264aa3


export default class Clients extends Component {
  render() {
    return (
<<<<<<< HEAD
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
=======
      <>
        <div className='container '>
            <ClientsData />
        </div>
        <div className='home'>
            <a href="/home">
              <button>
                Home
              </button>
            </a>
          </div>
      </>
>>>>>>> fcd647004f1b6a8017ded6183d91fa7eb7264aa3
    )
  }
}
