import React from 'react'
import { Route, Routes } from 'react-router-dom'
import DefaultLayout from './components/10day/DefaultLayout'
import Home from './components/10day/Home'
import Products from './components/04day/Products'
import Register from './components/03day/Register'
import Pagenotfound from './components/10day/Pagenotfound'
import Cart from './components/10day/Cart'

const Routing = () => {
  return (
    <div>
         <Routes>
          {/* <Route path='/' element={<DefaultLayout><Home/></DefaultLayout>}></Route>
          <Route path='/products' element={<DefaultLayout><Products/></DefaultLayout>}/>
          <Route path='/reg' element={<Register/>}/> */}

            <Route path='/' element={<DefaultLayout/>}>
                <Route path='' element={<Home/>}/>
                <Route path='products' element={<Products/>}/>
                <Route path='cart' element={<Cart/>}/>
            </Route>
            <Route path='/reg' element={<Register/>}/>
          <Route path="*" element={<Pagenotfound/>}/>
      </Routes>

    </div>
  )
}

export default Routing
