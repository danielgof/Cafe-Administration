import React from 'react'
import logo from './logo.svg';
import './App.css';
// import Fcomponent from './Fcomponent';
// import Ccomponent from './Ccomponent'
import Datafetching from '.Components/Datafetching';
// import Menu from './Menu';


function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Datafetching />
        <p>
          CAFE_PO client
        </p>

      </header>
    </div>
  );
}

export default App;
