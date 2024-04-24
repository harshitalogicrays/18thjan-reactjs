import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, NavLink } from 'react-router-dom';
const DefaultLayout = ({children}) => {
  return (
    <>
    <Navbar bg="dark" data-bs-theme="dark">
    <Container fluid>
      <Navbar.Brand href="#home">routing</Navbar.Brand>
      <Nav className="me-auto">
        <Nav.Link as={NavLink} to='/'  
        style={({ isActive}) => {
    return {
      fontWeight: isActive ? "bold" : "",
      color: isActive ? "red" : ""
    };
  }}>Home</Nav.Link>
        <Nav.Link as={NavLink} to='/products'  style={({ isActive}) => {
    return {
      fontWeight: isActive ? "bold" : "",
      color: isActive ? "red" : ""
    };
  }}>Product</Nav.Link>
      </Nav>
      <Nav>
        <Nav.Link as={Link} to='/'>Login</Nav.Link>
        <Nav.Link as={NavLink} to='/reg'  style={({ isActive}) => {
    return {
      fontWeight: isActive ? "bold" : "",
      color: isActive ? "red" : ""
    };
  }}><i class="bi bi-pencil-square" ></i>Register</Nav.Link>
      </Nav>
    </Container>
  </Navbar>

  <Container>
    {children}
  </Container>
  </>
  )
}

export default DefaultLayout
