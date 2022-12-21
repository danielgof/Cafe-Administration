import { Routes, Route, BrowserRouter } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import LoginPage from "../../Pages/LoginPage/LoginPage";
import MainPage from "../../Pages/MainPage/MainPage";

const Header = () => {
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
              <Nav.Link href="/users">Даннные о пользователях</Nav.Link>
              <Nav.Link href="/add_user">Добавить пользователя</Nav.Link>
              <Nav.Link href="/positions">Должности</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<LoginPage />} />
          <Route exact path="/main_page" element={<MainPage />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}
export default Header;