import React, { Component } from 'react';
import {Button, Navbar, FormControl, Nav, Form, Container} from 'react-bootstrap';
import logo from './DG.png';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import Home from '../Pages/Home';
import Clients from '../Pages/Clients';
import Clients_Table from '../test/table';
import TableResevation from '../Pages/TableResevation';
import DataAnalisys from '../Pages/DataAnalisys';
import Delivery from '../Pages/Delivery';
import ClientRegistration from '../Pages/ClientRegistration';
// import DishDection from '../Pages/DishDection';


export default class Header extends Component {
  render() {
    return (
      <>
      <Navbar collapseOnSelect expand="md" bg="dark" variant="dark" >
        <Container>
          <Navbar.Brand href="/">
            <img
              src={logo}
              height="45"
              width="45" 
              className="d-inline-block align-top"
              alt="logo"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls='responsive-navbar-nav'/>
          <Navbar.Collapse id='responsive-navbar-nav'>
          <Nav className='mr-auto'>
              <Nav.Link href="/">Home</Nav.Link> 
              <Nav.Link href="/clients">Clients</Nav.Link>  
              <Nav.Link href="/clients_table">Clients_Table</Nav.Link>
              <Nav.Link href="/tableresevation">TableResevation</Nav.Link>
              <Nav.Link href="/data_analisys">DataAnalisys</Nav.Link>
              <Nav.Link href="/delivery">Delivery</Nav.Link>
              <Nav.Link href="/clientregistration">ClientRegistration</Nav.Link>
              {/* <Nav.Link href="/dishdection">DishDection</Nav.Link>         */}
            </Nav>
            {/* <Form inline>
              <FormControl 
                type='text'
                placeholder='Search'
                className='mr-sm-2'
              />
              <Button variant='outline-info'> Search</Button> 
            </Form> */}
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Router>
        <Routes>
          <Route exact path='/' element={<Home />}/>
          <Route exact path='/clients' element={<Clients />}/>
          <Route exact path='/clients_table' element={<Clients_Table />}/>
          <Route exact path='/tableresevation' element={<TableResevation />}/>
          <Route exact path='/data_analisys' element={<DataAnalisys />}/>
          <Route exact path='/delivery' element={<Delivery />}/>
          <Route exact path='/clientregistration' element={<ClientRegistration />}/>
          {/* <Route exact path='/dishdection' element={<DishDection />}/> */}
        </Routes>
      </Router>
      </>
    )
  }
}




// export default class Header extends Component {
//   render() {
//     return (
//       <>
//       <Navbar collapseOnSelect expand="md" bg="dark" variant="da" >
//         <Container>
//           <Navbar.Brand href="/">
//             <img
//               src={logo}
//               height="45"
//               width="45" 
//               className="d-inline-block align-top"
//               alt="logo"
//             />
//           </Navbar.Brand>
//           <Navbar.Toggle aria-controls='responsive-navbar-nav'/>
//           <Navbar.Collapse id='responsive-navbar-nav'>
//             <Nav className='mr-auto'>
//               <Nav.Link href="/">Home</Nav.Link> 
//               <Nav.Link href="/about">About Us</Nav.Link> 
//               <Nav.Link href="/contacts">Contacts</Nav.Link> 
//               <Nav.Link href="/clients">Clients</Nav.Link>  
//               <Nav.Link href="/clients_table">Clients_Table</Nav.Link>

//               <Nav.Link href="/tableresevation">TableResevation</Nav.Link>
//               <Nav.Link href="/data_analisys">DataAnalisys</Nav.Link>
//               <Nav.Link href="/delivery">Delivery</Nav.Link>
//               <Nav.Link href="/clientregistration">ClientRegistration</Nav.Link>        
//             </Nav>
//             {/* <Form inline>
//               <FormControl 
//                 type='text'
//                 placeholder='Search'
//                 className='mr-sm-2'
//               />
//               <Button variant='outline-info'> Search</Button> 
//             </Form> */}
//           </Navbar.Collapse>
//         </Container>
//       </Navbar>

//       <Router>
//         <Routes>
//           <Route exact path='/' element={<Home />}/>
//           <Route exact path='/about' element={<About />}/>
//           <Route exact path='/contacts' element={<Contacts />}/>
//           <Route exact path='/clients' element={<Clients />}/>
//           <Route exact path='/clients_table' element={<Clients_Table />}/>
//           {/* <Route exact path="/tableresevation"> element={<TableResevation />}/>
//           <Route exact path="/data_analisys"> element={<DataAnalisys />}/>
//           <Route exact path="/delivery"> element={<Delivery />}/>
//           <Route exact path="/clientregistration"> element={<ClientRegistration />}/>
//         </Routes> */}
//       </Router>
//       </>
//     )
//   }
// }
