import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import './Navbar.css';
import { MdOutlineDarkMode } from "react-icons/md";

function CollapsibleExample() {
  return (
    <Navbar collapseOnSelect expand="lg" className="navbar">
      <Container >
        <Navbar.Brand href="#home" >Which country is urs?</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto"></Nav>
          <Nav>
            <Nav.Link eventKey={2} href="#memes">
            <MdOutlineDarkMode /> Dark Theme
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CollapsibleExample;
