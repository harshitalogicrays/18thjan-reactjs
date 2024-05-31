import React, { useEffect, useState } from 'react'
import ProductList from './ProductList'
import useFetchCollection from '../customhook/useFetchCollection'
import { useDispatch, useSelector } from 'react-redux'
import { STORE_PRODUCTS, selectproducts } from '../redux/productSlice'
const Products = () => {
  const {data}=useFetchCollection("products")
  const dispatch=useDispatch()
  useEffect(()=>{
    dispatch(STORE_PRODUCTS(data))
  },[data])
  const products=useSelector(selectproducts)
  return (
  <>
    <ProductList products={products}/>
  </>
  )
}

export default Products
