import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/Header';



function App() {
  return (
    <div>
      <Header />
    </div>
  );
}

// function App() {
//   return (
//       <BrowserRouter>
//         <Router>
//           <Route exact path="/" component={LoginPage}/>
//           <Route exact path="/dashboard" component={Dashboard}/>
//         </Router>
//       </BrowserRouter>
//   );
// }

export default App;
