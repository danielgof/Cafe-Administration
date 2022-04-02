import React from 'react'
import logo from './logo.svg';
import './App.css';
import Fcomponent from './Fcomponent';
import Ccomponent from './Ccomponent'
import Menu from './Menu';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Ccomponent name/>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          CAFE_PO client
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
