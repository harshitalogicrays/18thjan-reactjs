import React, {useState } from 'react'
import { Button, Card, Col, Container, Form,  Row } from 'react-bootstrap'
import { Link, useNavigate} from 'react-router-dom'
import { toast } from 'react-toastify'
import { Timestamp, addDoc, collection } from 'firebase/firestore'
import { db } from '../../firebase/config'

const AddProduct = () => {
    let addProductsSet={name:'',price:'',category:'',image:[],brand:'',desc:'',stock:''}
    const [product,setProduct]=useState({...addProductsSet})
    const navigate=useNavigate()
    const [uploadProgress,setUploadProgress]=useState(0)


    let handleImage=(e)=>{
        let images=e.target.files
    }
 let handleSubmit=async(e)=>{
        e.preventDefault()
            try{
                const docRef=collection(db,"products")
                await addDoc(docRef,{...product,createdAt:Timestamp.now().toMillis() })
                toast.success("product added")
                navigate('/admin/viewproduct')
            }
            catch(error){
                toast.error(error.message)
            }
    }
    return (
        <>
            <Card>
                <Card.Header><h1>Add Product
                    <Link to='/admin/viewproduct' type="button" class="btn btn-danger btn-lg float-end" >
                        View Products</Link>
                </h1></Card.Header>
                <Card.Body>
                    <Container>
                        <Row>
                            <Col>
                                <Form onSubmit={handleSubmit}>
                                <Form.Group>
                                            <Form.Label>Category</Form.Label>
                                            <Form.Select name="category" value={product.category} onChange={(e)=>setProduct({...product,category:e.target.value})}>
                                                <option value='' disabled>select one </option>
                                              
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
                                    {uploadProgress > 0 &&
                        <div class="progress">
                        <div class="progress-bar" style={{width: `${uploadProgress}%`}}>
                            {uploadProgress < 100 ? `uploading ${uploadProgress}%` : `uploaded ${uploadProgress}%`}
                        </div>
                      </div>
                    }
                                    <Form.Group controlId="formFile" className="mb-3">
                                        <Form.Label> file upload </Form.Label>
                                        <Form.Control type="file"  onChange={handleImage} multiple/>
                                    </Form.Group>
                                        <Form.Group controlId="formFile" className="mb-3">
                                        <Form.Label>Description</Form.Label>
                                  
                                        <Form.Control as="textarea" name='desc' value={product.desc} onChange={(e)=>setProduct({...product,desc:e.target.value})}/>
                                    </Form.Group>
                                    <Button variant='primary' type="submit" 
                                  >Submit</Button>
                                </Form>
                            </Col>
                        </Row>


                    </Container>
                    </Card.Body>
            </Card>
        </>
    )
}

export default AddProduct
