import React, { useEffect, useState } from 'react'
import ProductList from './ProductList'
import axios from 'axios'
const Products = () => {
  //   let products=[ {id:"101",name:"product1",image:'/src/assets/images/a.jpg',price:3000,category:"cloths",stock:10},
  //   {id:"102",name:"product2",image:'/src/assets/images/a.jpg',price:3000,category:"cloths",stock:1},
  //   {id:"103",name:"product3",image:'/src/assets/images/b.jpg',price:30000,category:"electronics",stock:20},
  //   {id:"104",name:"product4",image:'/src/assets/images/c.jpeg',price:1000,category:"accessories",stock:100},
  //   {id:"105",name:"product5",image:'/src/assets/images/d.jpg',price:3050,category:"Toys",stock:30},
  //   {id:"106",name:"product6",image:'/src/assets/images/a.jpg',price:2000,category:"cloths",stock:80},
  //   {id:"107",name:"product7",image:'/src/assets/images/d.jpg',price:300,category:"electronics",stock:90},
  //   {id:"108",name:"product8",image:'/src/assets/images/b.jpg',price:1000,category:"jewellary",stock:4}
  //  ]

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
