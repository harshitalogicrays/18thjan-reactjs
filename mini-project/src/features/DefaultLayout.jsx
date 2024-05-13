import React, { useContext } from 'react'
import Header from './Header'
import Footer from './Footer'
import { Container } from 'react-bootstrap'
import ContextforCart, { DataContext } from './ContextforCart'

const DefaultLayout = ({children}) => {
  return (
    <>
        <ContextforCart>        
            <Header/>
            <Container className="mt-5">
                {children}
            </Container>
        <Footer/>  
        </ContextforCart>

    </>
    )
}

export default DefaultLayout
