import React, { Component } from 'react';
import {Button, Navbar, FormControl, Nav, Form, Container} from 'react-bootstrap';
import logo from './DG.png';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

import Home from '../Pages/Home';
import About from '../Pages/About';
import Blog from '../Pages/Blog';
import Contacts from '../Pages/Contacts';

export default class Header extends Component {
  render() {
    return (
      <>
      <Navbar collapseOnSelect expand="md" bg="dark" variant="da" >
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
              <Nav.Link href="/"> Home </Nav.Link> 
              <Nav.Link href="/about"> About Us </Nav.Link> 
              <Nav.Link href="/contacts">Contacts </Nav.Link> 
              <Nav.Link href="/blog"> Blog </Nav.Link>  
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
          <Route exact path='/' component={Home} />
          <Route exact path='/about' component={About} />
          <Route exact path='/contacts' component={Contacts} />
          <Route exact path='/blog' component={Blog} />
        </Routes>
      </Router>
      </>
    )
  }
}
