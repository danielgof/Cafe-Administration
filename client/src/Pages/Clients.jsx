import React, { Component } from 'react'
import ClientsData from '../Components/ClientsData';
import './style/Clients.css';


export default class Clients extends Component {
  render() {
    return (
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
    )
  }
}
