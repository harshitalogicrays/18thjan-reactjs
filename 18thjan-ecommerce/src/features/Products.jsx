import React, { useEffect, useState } from 'react'
import ProductList from './ProductList'
import useFetchCollection from '../customhook/useFetchCollection'
import { useDispatch, useSelector } from 'react-redux'
import { STORE_PRODUCTS, selectproducts } from '../redux/productSlice'
import { Col, Container, Row } from 'react-bootstrap'
const Products = () => {
  const {data}=useFetchCollection("products")
  const dispatch=useDispatch()
  useEffect(()=>{
    dispatch(STORE_PRODUCTS(data))
  },[data])
  const products=useSelector(selectproducts)

  const {data:categories}=useFetchCollection("categories")
  return (
  <Container className='mt-5'>
      <h1>Products Page</h1> <hr/>
      <Row className='mb-3'>
        <Col xs={{span:'4'}}>
            <div className="row">
              <label className='col-form-label col-3'><b>Category</b></label>
              <div className="col-7">
                <select className='form-select'>
                  <option value='' selected disabled>Select One</option>
                  {categories.map((c)=><option key={c.id}>{c.title}</option>)}
                </select>
              </div>
            </div>
        </Col>
        <Col xs={{span:'4',offset:'4'}}>
        <div className="row">
              <label className='col-form-label col-3'><b>Sort By</b></label>
              <div className="col-7">
                <select className='form-select'>
                  <option value='' selected disabled>Select One</option>
                  <option value='low'>Low to High</option>
                  <option value='high'>High to Low</option>
                </select>
              </div>
            </div>
        </Col>
      </Row>
    <ProductList products={products}/>
  </Container>
  )
}

export default Products
