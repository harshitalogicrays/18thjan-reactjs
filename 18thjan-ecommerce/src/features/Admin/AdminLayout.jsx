import React, { useState } from 'react'
import ANavbar from './ANavbar'
import ASidebar from './ASidebar'
import './AdminLayout.css'
import { Outlet } from 'react-router-dom'

const AdminLayout = () => {
    const [openSidebarToggle, setOpenSidebarToggle] = useState(false)

  const OpenSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle)
  }
  return (
    <>
     <div className='grid-container'>
        <ANavbar OpenSidebar={OpenSidebar}/>
        <ASidebar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar}/>
        <Outlet/>
     </div>
 </>
  )
}

export default AdminLayout
