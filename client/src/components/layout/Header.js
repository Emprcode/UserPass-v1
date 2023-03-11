import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

export const Header = ()=>{
  return (
    <Navbar bg="light" expand="md">
      <Container className='bg-info p-3 '>
        <Navbar.Brand href="#home">E-commerce</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Link className='nav-link' to="/">Login</Link> {" "}
            <Link  className='nav-link' to="/register">Register</Link>
          
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
