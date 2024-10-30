import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const ToolBar = () => {
  return (
    <Navbar bg="primary" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand href="/">Static Pages</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav"/>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={NavLink} to="/pages/about" end>About</Nav.Link>
            <Nav.Link as={NavLink} to="/pages/contacts" end>Contacts</Nav.Link>
            <Nav.Link as={NavLink} to="/pages/services" end>Services</Nav.Link>
            <Nav.Link as={NavLink} to="/pages/faq" end>FAQ</Nav.Link>
            <Nav.Link as={NavLink} to="/pages/blog" end>Blog</Nav.Link>
            <Nav.Link as={NavLink} to="/pages/admin" end>Admin</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default ToolBar;