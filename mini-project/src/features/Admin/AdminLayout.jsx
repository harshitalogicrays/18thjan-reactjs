import React from 'react'
import AHeader from './AHeader'
import { Col, Row } from 'react-bootstrap'
import SideBar from './SideBar'
import { Outlet } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

const AdminLayout = () => {
  return (
    <>
          <ToastContainer
position="top-left"
autoClose={2000}
hideProgressBar={true}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="colored"
/>
        <AHeader/>
        <Row>
            <Col xs={2}>
                <SideBar/>
            </Col>
            <Col>
                <Outlet/>
            </Col>
        </Row>
    </>
  )
}

export default AdminLayout
