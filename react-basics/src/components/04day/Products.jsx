import React from 'react'
import ProductList from './ProductList'
const Products = () => {
    let products=[ {id:"101",name:"product1",image:'images/a.jpg',price:3000,category:"cloths"},
    {id:"102",name:"product2",image:'images/a.jpg',price:3000,category:"cloths"},
    {id:"103",name:"product3",image:'images/b.jpg',price:30000,category:"electronics"},
    {id:"104",name:"product4",image:'images/c.jpeg',price:1000,category:"accessories"},
    {id:"105",name:"product5",image:'images/d.jpg',price:3050,category:"Toys"},
    {id:"106",name:"product6",image:'images/a.jpg',price:2000,category:"cloths"},
    {id:"107",name:"product7",image:'images/d.jpg',price:300,category:"electronics"},
    {id:"108",name:"product8",image:'images/b.jpg',price:1000,category:"jewellary"}
   ]
  return (
  <>
    <ProductList products={products}/>
  </>
  )
}

export default Products
