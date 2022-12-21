import { Routes, Route, BrowserRouter } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import LoginPage from "../../Pages/LoginPage/LoginPage";
import MainPage from "../../Pages/MainPage/MainPage";

const NavBar = () => {
  return (
    <>
        <Navbar fixed='top' bg="light" expand="md">
            <Container>
            <Navbar.Brand href="/">
                <img 
                //   src={logo}
                height="45"
                width="45"
                className="d-inline-block align-top"
                alt="Logo"
                />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse className="basic-navbar-nav">
                <Nav className="me-auto">
                <Nav.Link href="/">Login</Nav.Link>
                <Nav.Link href="/main_page">Main Page</Nav.Link>
                </Nav>
            </Navbar.Collapse>
            </Container>
        </Navbar>
        <BrowserRouter>
            <Routes>
            <Route path="/" element={<LoginPage />} />
            <Route path="/main_page" element={<MainPage />} />
            </Routes>
        </BrowserRouter>
    </>
   )
}
export default NavBar;