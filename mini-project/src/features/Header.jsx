import React, { useEffect, useState } from 'react'
import { Button, NavDropdown,Form } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FaLock, FaPenAlt, FaShoppingCart } from "react-icons/fa";
import { FaPen } from 'react-icons/fa6';
import { NavLink, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { ShowOnLogin, ShowOnLogout } from './hiddenlinks';
const Header = () => {
const navigate=useNavigate()
  let handleLogout=()=>{
    sessionStorage.removeItem("logindetails")
    toast.success("loggedOut Successfully")
    navigate('/')
  }

  let [username,setUsename]=useState('')
  useEffect(()=>{
    if(sessionStorage.getItem("logindetails") != null){
      let obj=JSON.parse(sessionStorage.getItem("logindetails"))
      setUsename(obj.name)
    }
  },[ sessionStorage.getItem("logindetails")])
  return (
    <Navbar expand="lg" bg="dark" data-bs-theme="dark">
      <Container fluid>
        <Navbar.Brand href="#">mini pro</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link as={NavLink}  style={({ isActive}) => {
                return {
                fontWeight: isActive ? "bold" : "", color: isActive ? "red" : "white",
                }}}  to='/'>Home</Nav.Link>
            <Nav.Link  as={NavLink}  style={({ isActive}) => {
                return {
                fontWeight: isActive ? "bold" : "", color: isActive ? "red" : "white",
                }}}  to='/products'>Products</Nav.Link>
          </Nav>
          <Nav
            className="my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="#action1"><FaShoppingCart size={30}/>
            <span class="badge rounded-pill text-bg-primary">0</span >
            
            </Nav.Link>

                <ShowOnLogout>
                <Nav.Link  as={NavLink}  style={({ isActive}) => {
                    return {
                    fontWeight: isActive ? "bold" : "", color: isActive ? "red" : "white",
                    }}}  to='/register'><FaPenAlt/> Register</Nav.Link>
                <Nav.Link  as={NavLink}  style={({ isActive}) => {
                    return {
                    fontWeight: isActive ? "bold" : "", color: isActive ? "red" : "white",
                    backgroundColor:isActive ? "yellow":''
                    }}}  to='/login'><FaLock/> Login</Nav.Link>
                </ShowOnLogout>
                <ShowOnLogin>
                    <Nav.Link style={{color:'white'}}>Welcome {username}</Nav.Link>
                    <Nav.Link onClick={handleLogout} style={{color:'white'}}><FaLock/> Logout</Nav.Link>
                </ShowOnLogin>
            </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Header
