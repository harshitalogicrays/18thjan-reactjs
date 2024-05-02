import React from 'react'
import AHeader from './AHeader'
import { Col, Row } from 'react-bootstrap'
import SideBar from './SideBar'
import { Outlet } from 'react-router-dom'

const AdminLayout = () => {
  return (
    <>
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
