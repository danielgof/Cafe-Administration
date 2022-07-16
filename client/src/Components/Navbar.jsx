import React, { Component } from 'react'
import { Navbar, Nav,  Container} from 'react-bootstrap';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import logo from './DC.png'
import Home from '../Pages/Home.jsx'
import ClientRegistration from './Pages/ClientRegistration';
import OrderRegistration from './Pages/OrderRegistration';

export default class Header extends Component {
  render() {
    return (
        <div>
        <Navbar collapseOnSelect expand="md" bg="secondary" variant='dark' >
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
              <Nav.Link href="/home">About me</Nav.Link> 
              <Nav.Link href="/projects">My Projects</Nav.Link>  
              <Nav.Link href="/contact">Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Router>
        <Routes>
          <Route exact path='/home' element={<Home />}/>
          <Route exact path="/client_reg" element={<ClientRegistration />} />
          <Route exact path="/order_reg" element={<OrderRegistration />} />
        </Routes>
      </Router>
      </div>
    )
  }
}
