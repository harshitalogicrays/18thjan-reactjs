import React, { useState } from 'react'
import { Button,Form, Card } from 'react-bootstrap'
import {  Link, useNavigate } from 'react-router-dom'

const AddCategory = () => {
    let [category,setCategory]=useState({title:'',desc:'',status:''})
    let [isActive,setIsActive]=useState(false)
    const navigate=useNavigate()
    let handleSubmit=(e)=>{
        e.preventDefault()
        alert(JSON.stringify(category))
    }
  return (
   <>
      <Card>
        <Card.Header>
            <h1>Add Category <Button variant='danger' size="lg" className='float-end' as={Link} to='/admin/viewcategory'>View Categories</Button></h1>
        </Card.Header>
        <Card.Body>
                <Form onSubmit={handleSubmit}>
                    <Form.Group className='mb-3'>
                        <Form.Label>Title</Form.Label>
                        <Form.Control value={category.title} onChange={(e)=>setCategory({...category,title:e.target.value})}></Form.Control>
                    </Form.Group>
                    <Form.Group className='mb-3'>
                        <Form.Label>Description</Form.Label>
                        <Form.Control as='textarea' value={category.desc} onChange={(e)=>setCategory({...category,desc:e.target.value})}></Form.Control>
                    </Form.Group>
                    <label className='me-3 mb-3'>Status</label>
                        <Form.Check inline type="radio" checked={isActive} 
                        onClick={(e)=>setIsActive(!isActive)}/>
                        <label>{isActive ? "(Active)" :"(Inactive)"}</label>
                    <br/>
                    <Button type="submit">Submit</Button>
                </Form>
        </Card.Body>
    </Card>
   </>
  )
}

export default AddCategory
