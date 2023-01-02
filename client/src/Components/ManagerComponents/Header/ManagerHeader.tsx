import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from './DC.png';
import { HiShoppingCart } from 'react-icons/hi';
import { IconContext } from "react-icons";
import './ManagerHeader.css';

const ManagerHeader = () => {
  return (
    <>
      <Navbar fixed='top' className='header' expand="md">
        <Container>
          <Navbar.Brand href="/home_waiter">
            <img 
              src={logo}
              height="45"
              width="45"
              className="d-inline-block align-top"
              alt="Logo"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse className="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/analytics">Order</Nav.Link>
              
            </Nav>
            <Nav>
              <Nav.Link href="order_create">
                <IconContext.Provider value={{ size: "100px",  className: "global-class-name" }}>
                  <HiShoppingCart />
                </IconContext.Provider>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  )
}
export default ManagerHeader;