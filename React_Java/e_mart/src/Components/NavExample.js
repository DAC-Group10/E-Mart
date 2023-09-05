import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

export function NavExample() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home"></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
           
            <NavDropdown title="Electronics" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Mobile</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Laptop</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">TV</NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title="Clothing" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Jeans</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">T-shirt</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Shirt</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Skirt</NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title="Home Appliances" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Furniture</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Chair</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Table</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Cupboard</NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title="Footwear" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Shoes</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Sandals</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Slippers</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Loafers</NavDropdown.Item>
            </NavDropdown>

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

// export default NavExample;