import React from 'react'

const ProductRendering = () => {
    let products=[ {id:"101",name:"product1",image:'images/a.jpg',price:3000,category:"cloths"},
    {id:"102",name:"product2",image:'images/a.jpg',price:3000,category:"cloths"},
    {id:"103",name:"product3",image:'images/b.jpg',price:30000,category:"electronics"},
    {id:"104",name:"product4",image:'images/c.jpeg',price:1000,category:"accessories"},
    {id:"105",name:"product5",image:'images/d.jpg',price:3050,category:"Toys"},
    {id:"106",name:"product6",image:'images/a.jpg',price:2000,category:"cloths"},
    {id:"107",name:"product7",image:'images/d.jpg',price:300,category:"electronics"},
    {id:"108",name:"product8",image:'images/b.jpg',price:1000,category:"jewellary"}
   ]

    // console.log(products[0].name)
  return (
    <div className='container mt-5'>
        <table className='table table-bordered table-striped'>
            <thead> <tr><th>ID</th><th>Name</th><th>Image</th><th>Price</th><th>Category</th></tr>
            </thead><tbody>
            {products.length ==0 && <tr><td colSpan={5}>No product found</td></tr>}
            {products.map((product,index)=>
                <tr key={product.id}>
                    <td>{product.id}</td>
                    <td>{product.name}</td>
                    <td> <img src={require(`../../assets/${product.image}`)} height={50} width={50}/>
                    </td><td>{product.price}</td>
                    <td>{product.category}</td>
                </tr>
            )}
            </tbody>       
    </table>
    </div>
  )
}

export default ProductRendering
