import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, NavLink, Outlet } from 'react-router-dom';
import Header from './Header';
const DefaultLayout = ({children}) => {
  return (
    <>
  
  <Header/>
  <Container>
    {/* {children} */}
      <Outlet/>
  </Container>
  </>
  )
}

export default DefaultLayout
