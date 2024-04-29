import React, { useContext, useEffect } from 'react'
import { Col, Container, Row, Table } from 'react-bootstrap'
import { DataContext } from '../11day/ContextforCart'

const Cart = () => {
    const data=useContext(DataContext)
    const {cart,total,INCREASE,DECREASE,REMOVE_ITEM_BY_INDEX,REMOVE_ITEM_BY_ID,EMPTY_CART,CALCULATE_TOTAL}=data
    useEffect(()=>{
        CALCULATE_TOTAL() },[cart])
  return (
   <> <Container className='mt-5 '>
        <h1>Cart Page</h1><hr/>
        <Table className='table table-bordered table-striped'>
            <thead>  <tr>
                    <th>Sr. No</th><th>Name</th><th>Image</th><th>Price</th><th>qty</th>
                    <th>Total Price</th><th>Remove</th>
                </tr>
            </thead>
            <tbody>
                {cart.length==0 &&    <tr><td colSpan={7}>No Item in Cart</td></tr> }
             {cart.map((c,i)=>
                <tr key={c.id}>
                    <td>{i+1}</td>
                    <td>{c.name}</td>
                    <td><img src={require(`../../assets/${c.image}`)} height={50} width={50}/></td>
                    <td>{c.price}</td>
                    <td>
                        <button type="button" onClick={()=>DECREASE(c)}>-</button>
                        <input type="text" style={{width:'40px',textAlign:'center'}} value= {c.qty}/>
                        <button type="button" onClick={()=>INCREASE(c)}>+</button>
                       </td>
                    <td>{c.qty*c.price}</td>
                    <td>
                        <button type="button" class="btn btn-danger me-2" onClick={()=>REMOVE_ITEM_BY_ID(c.id)}  >
                           <i className='bi bi-trash'></i> by id
                        </button>
                        <button type="button" class="btn btn-danger" onClick={()=>REMOVE_ITEM_BY_INDEX(i)}  >
                           <i className='bi bi-trash'></i> by index
                        </button>
                        </td>
                </tr>
                )}
            </tbody>
        </Table>
        <Row>
            <Col xs={9}>
                    <button type="button" class="btn btn-danger btn-lg"  
                    onClick={()=>EMPTY_CART()}>
                        Empty Cart
                    </button>
                    
            </Col>
            <Col xs={3}>
                <h1>Total: <span className='float-end'>${total}</span></h1>
                <div class="d-grid gap-2">
                    <button
                        type="button"
                        name=""
                        id=""
                        class="btn btn-primary"
                    >
                        Checkout
                    </button>
                </div>
                
            </Col>
        </Row>
    </Container>
   </>
  )
}

export default Cart
