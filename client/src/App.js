import './App.css';
// import Ccmponent from './Components/Ccmponent';
// import Fcomponent from './Components/Fcomponent';
// import Datafetching from './Components/Datafetching';
import JsonDataDisplay from './test/table.jsx';

function App() {
  return (
    <div className="App">
      <h1> Clients </h1>
        {/* <Datafetching /> */}
        <JsonDataDisplay />
    </div>
  );
}

export default App;
