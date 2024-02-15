import { Container, Nav, Navbar as BootstrapNavbar } from "react-bootstrap";
import { Link } from "react-router-dom";

import './style.css'

const Navbar = () => {
  return (
    <BootstrapNavbar bg="primary" variant="dark">
      <Container>
        <Nav>
          <Link to="/">Inicio</Link>
          <Link to="/contacto">Contacto</Link>
        </Nav>
        <Nav>
          <BootstrapNavbar.Brand>Happy Cake</BootstrapNavbar.Brand>
        </Nav>
      </Container>
    </BootstrapNavbar>
  )
}

export default Navbar