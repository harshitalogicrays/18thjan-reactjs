import React from 'react'
import { Container, Table } from 'react-bootstrap'

const Cart = () => {
  return (
   <>
    <Container className='mt-5 '>
        <h1>Cart Page</h1><hr/>
        <Table className='table table-bordered table-striped'>
            <thead>
                <tr>
                    <th>Sr. No</th><th>Name</th><th>Image</th><th>Price</th><th>qty</th>
                    <th>Total Price</th><th>Remove</th>
                </tr>
            </thead>
            <tbody>
                <tr><td colSpan={7}>No Item in Cart</td></tr>
                <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
            </tbody>
        </Table>
    </Container>
   </>
  )
}

export default Cart
