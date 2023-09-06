import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import './Footer.css'

export function Footer() {
    return (
        <>
            <Navbar bg="dark" data-bs-theme="dark" className='footer'>
                <Container>
                    <Navbar.Brand to="/home"></Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="/Home">Career</Nav.Link>
                        <Nav.Link href="/Contactus">Contact us</Nav.Link>
                        <Nav.Link href="/Login">Facebook</Nav.Link>
                        <Nav.Link href="/Register">Instagram</Nav.Link>
                    </Nav>

                </Container>
            </Navbar>
        </>
    )
}