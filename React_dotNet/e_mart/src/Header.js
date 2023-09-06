import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import './Header.css'
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export function Header() {

  const isLoggedIn = useSelector((state) => state.user.isLoggedIn);

  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark" className='header'>
        <Container>
          <Nav className="me-auto">
            <Link to="/Home">Home</Link>
          </Nav>
          <Nav className="me-auto">
            <Link to="/Contactus">Contact us</Link>
          </Nav>
          <Nav className='me-auto'>
            <Link
              to='/Login'
              className={`header-link ${isLoggedIn ? "logout-link" : ""}`}
            >
              {isLoggedIn ? "Logout" : "Login"}
            </Link>
          </Nav>
          <Nav className="me-auto">
            <Link to="/RegisterPage">Register</Link>
          </Nav>
          <Nav className="me-auto">
          {isLoggedIn ? <Link to="/Cart">MyCart</Link> : <Link to="/Login">MyCart</Link>}
          </Nav>
        </Container>
      </Navbar>

    </>
  );
}