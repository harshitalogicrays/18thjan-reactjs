import React, { useEffect, useState } from 'react'
import ProductList from './ProductList'
const Products = () => {
  let [products,setProducts]=useState([])
    useEffect(()=>{
        getData()
    },[])

    let getData=async()=>{
        try{
          
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
