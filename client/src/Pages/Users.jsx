import React, { Component } from 'react';
import ClientReg from '../Components/ClientReg';
import UsersData from '../Components/UsersData';
import './style/Users.css';


export default class Users extends Component {
  render() {
    return (
      <div>
        <h3 align="center">Users</h3>
        <div className='container'>
          <div className="clientReg">
            <ClientReg />
          </div>
          <div className='usersList'>
            <UsersData className='ud' />
          </div>
        </div>
          <div className='home'>
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
