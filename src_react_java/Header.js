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
            
            <Link to="/Home"><img src='Images/e-Mart-logos_white.png'></img></Link>
          </Nav>
          <Nav className="me-auto">
            <Link to="/ContactUs">Contact us</Link>
          </Nav>
          <Nav className='me-auto'>
            <Link
              to={isLoggedIn ? '/Profile' : '/Login'}
              className={`header-link ${isLoggedIn ? "logout-link" : ""}`}
            >
              {isLoggedIn ? "Profile" : "Login"}
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