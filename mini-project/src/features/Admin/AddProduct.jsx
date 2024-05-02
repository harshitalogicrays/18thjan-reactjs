import axios from 'axios'
import React, { useState } from 'react'
import { Button, Card,  Container,  Form,   Row } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

const AddProduct = () => {
    let categories= ["Toys","Cloths","Electronics",'Grocery']
    let addProductsSet={name:'',price:'',category:'',image:'',brand:'',desc:'',stock:''}
    const [product,setProduct]=useState({...addProductsSet})
    const navigate=useNavigate()
    let handleImage=(e)=>{
        // console.log(e.target.files[0])
        let file =e.target.files[0]
        const reader=new FileReader()
        reader.readAsDataURL(file)
        reader.onload=()=>{
            // console.log(reader.result)
            setProduct({...product,image:reader.result})
        }
    }
    let handleSubmit=async(e)=>{
        e.preventDefault()
        // alert(JSON.stringify(product))
        try{
        await axios.post("https://662f214343b6a7dce30e77c5.mockapi.io/products",product)
            toast.success('product added')
            navigate('/admin/viewproducts')
        }
        catch(error){toast.error(error.message)}
        
    }
  return (
    <>
        <Container  className='mt-5'>
            <Card>
                <Card.Header>
                    <h1>Add Product
                        <Button variant='danger' className='float-end btn-lg' as={Link} to='/admin/viewproducts'>View  Products</Button>
                    </h1>
                </Card.Header>
                <Card.Body>
                <Form onSubmit={handleSubmit}>
                                <Form.Group>
                                            <Form.Label>Category</Form.Label>
                                            <Form.Select name="category" value={product.category} onChange={(e)=>setProduct({...product,category:e.target.value})}>
                                                <option value='' disabled>select one </option>
                                                {categories.map((c,i)=><option key={i}>{c}</option>)}
                                            </Form.Select>
                                        </Form.Group>
                                        <Row>
                                        <Form.Group className='mb-3 col-6'>
                                        <Form.Label>Name</Form.Label>
                                        <Form.Control  name="name" value={product.name} onChange={(e) => setProduct({ ...product, name: e.target.value })} />
                                    </Form.Group>
                                    <Form.Group className='mb-3 col-6'>
                                        <Form.Label>Brand</Form.Label>
                                        <Form.Control  name="brand" value={product.brand} onChange={(e)=>setProduct({...product,brand:e.target.value})} />
                                    </Form.Group>
                                    </Row>                                  
                                    <Row>
                                    <Form.Group className='mb-3 col-6'>
                                        <Form.Label>Price</Form.Label>
                                        <Form.Control type="number"  name="price" value={product.price} onChange={(e)=>setProduct({...product,price:e.target.value})}/>
                                    </Form.Group>
                                    <Form.Group className='mb-3 col-6'>
                                        <Form.Label>Stock</Form.Label>
                                        <Form.Control  type="number" name="stock" value={product.stock} onChange={(e)=>setProduct({...product,stock:e.target.value})}/>
                                    </Form.Group>
                                    </Row>
                                    <Form.Group controlId="formFile" className="mb-3">
                                        <Form.Label> file upload </Form.Label>
                                        <Form.Control type="file" name="image" onChange={handleImage} />
                                    </Form.Group>
                                    <Form.Group controlId="formFile" className="mb-3">
                                        <Form.Label>Description</Form.Label>
                                  
                                        <Form.Control as="textarea" name='desc' value={product.desc} onChange={(e)=>setProduct({...product,desc:e.target.value})}/>
                                    </Form.Group>
                                    <Button variant='primary' type="submit" 
                                  >Submit</Button>
                                </Form>
                </Card.Body>
            </Card>
        </Container>
    </>
)
}

export default AddProduct
