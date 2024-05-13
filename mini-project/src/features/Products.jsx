import React, { useEffect, useState } from 'react'
import ProductList from './ProductList'
import axios from 'axios'
const Products = () => {
  let [products,setProducts]=useState([])
    useEffect(()=>{
        getData()
    },[])

    let getData=async()=>{
        try{
           let res = await axios.get("https://662f214343b6a7dce30e77c5.mockapi.io/products")
           setProducts(res.data)
        }
        catch(err){toast.error(err.message)}
    }
  return (
  <>
    <ProductList products={products}/>
  </>
  )
}

export default Products
