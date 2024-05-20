import React from 'react'
import ProductCard from './ProductCard'

const ProductList = ({products}) => {
  return (
   <>
    {products.length ==0 && <h1>No product found</h1>}
    <div className="row">
        {products.map((product,index)=><ProductCard key={product.id} product={product}></ProductCard>)}
    </div>
   
   </>
  )
}

export default ProductList
