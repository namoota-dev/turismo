import { Navbar, Nav, Container } from 'react-bootstrap';
import Image from 'react-bootstrap/Image';
export default function Header() {
  return (
    <Navbar id="navbarTop" expand="lg" sticky="top">
      <Container>
        <Navbar.Brand href="/">
            <Image src="/logo.jpeg" rounded className="img-fluid" width={100}/>   
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#services">Services</Nav.Link>
            <Nav.Link href="/tours">Destinations</Nav.Link>
            <Nav.Link href="#testimonials">Testimonials</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
