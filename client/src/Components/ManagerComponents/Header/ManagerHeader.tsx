import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from './DC.png';
import './ManagerHeader.css';
import Logout from '../../Logout/Logout';

const ManagerHeader = () => {
  return (
    <>
      <Navbar fixed='top' className='header' expand="md">
        <Container>
          <Navbar.Brand href="/home_manager">
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
              <Nav.Link href="/analytics">Analytics</Nav.Link>
              <Nav.Link href="/personal_managment">Personal Managment</Nav.Link>
              <Nav.Link href="/add_empl">Add Employee</Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link href="/">
                <Logout />
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  )
}
export default ManagerHeader;