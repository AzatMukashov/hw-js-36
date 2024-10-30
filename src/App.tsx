import { BrowserRouter as Router, Route, Routes,  NavLink } from 'react-router-dom';
import { Container, Nav, Navbar } from 'react-bootstrap';
import Page from './components/Page/Page.tsx';
import Admin from './components/Admin/Admin.tsx';

const App = () => {
  return (
    <Router>
      <div>
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
        <Container className="mt-4">
          <Routes>
            <Route path="/" element={<div>Welcome to the Website</div>}/>
            <Route path="/pages/:pageName" element={<Page/>}/>
            <Route path="/pages/admin" element={<Admin/>}/>
          </Routes>
        </Container>
      </div>
    </Router>
  )
};

export default App
