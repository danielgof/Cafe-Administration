import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from './DC.png';

const Header = () => {
  return (
    <>
      <Navbar fixed='top' bg="light" expand="md">
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
              <Nav.Link href="/order">Order</Nav.Link>
              {/* <Nav.Link href="/analytics">Analytics</Nav.Link> */}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      {/* <BrowserRouter>
        <Routes>
          <Route path="/home" element={<MainPage />} />
          <Route path="/order" element={<OrderPage />} />
          <Route path="/analytics" element={<AnalyticsPage />} />
        </Routes>
      </BrowserRouter> */}
    </>
  )
}
export default Header;