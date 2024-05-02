import React from 'react'
import Nav from 'react-bootstrap/Nav';
import { NavLink } from 'react-router-dom';
const SideBar = () => {
let linkarray = [
    {name:'Dashboard' , to:'/admin'},
    {name:'View Products',to:'/admin/viewproducts'},
    {name:'View Users',to:'/admin/viewusers'},
    {name:'Orders',to:'/admin/orders'}
]
  return (
   <>
  <Nav className="flex-column fs-4">
            {linkarray.map((item,i)=> 
                <Nav.Link key={i}
                    as={NavLink} 
                    to={item.to}
                    style={({ isActive,isPending}) => {
                        return {fontWeight: isActive ? "bold" : "", 
                               color: isActive ? "red" : "black", 
                           }}}
                >
                    {item.name}
                </Nav.Link>)
                }
    
    </Nav>
   </>
  )
}

export default SideBar
