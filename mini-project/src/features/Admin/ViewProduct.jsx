import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Button, Card, Container, Table } from 'react-bootstrap'
import { FaPenAlt, FaTrashAlt } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify'

const ViewProduct = () => {
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

    let handleDelete=async(id)=>{
        if(window.confirm("are you sure to delete this??")){
            await axios.delete(`https://662f214343b6a7dce30e77c5.mockapi.io/products/${id}`)       
            getData()
            toast.success("product deleted")
        }
    }
  return (
  <>
    <Container className='mt-5'>
            <Card>
                <Card.Header>
                    <h1>View Products
                        <Button variant='primary' className='float-end btn-lg' as={Link} to='/admin/addproduct'>Add Product</Button>
                    </h1>
                </Card.Header>
                <Card.Body>
                <Table striped bordered hover>
      <thead>
        <tr>
          <th>ID</th>
          <th>Category</th>
          <th>Name</th>
          <th>Image</th><th>Price</th>
            <th>Stock</th> <th>Action</th>        </tr>
      </thead>
      <tbody>
        {products.length==0 && <tr><td colSpan={7}>No product found</td></tr>}
        {products.map((product,i)=>
            <tr key={product.id}>
            <td>{product.id}</td>
            <td>{product.category}</td>
            <td>{product.name}</td>
            <td><img src={product.image} height="50px" width={50}/></td>
            <td>{product.price}</td>
            <td>{product.stock}</td>
            <td> <Link type="button" class="btn btn-success me-2" 
            to={`/admin/editproduct/${product.id}`}><FaPenAlt/></Link>
                 <button type="button" class="btn btn-danger me-2" 
                 onClick={()=>handleDelete(product.id)}><FaTrashAlt/></button>
             </td>
            </tr>
        )}      
        </tbody>
    </Table>
                </Card.Body>
            </Card>
        </Container>
  </>
  )
}

export default ViewProduct
