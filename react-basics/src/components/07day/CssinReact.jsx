import React from 'react'
import { Col, Container, Form, Row } from 'react-bootstrap'
import { MyButton, TextBox } from './MyCssComponents'
// import cssmodule from '../../App.module.css'
const CssinReact = () => {
  return (
    <div>
      <h1 className='App'>css file</h1>
      {/* <h2 className={cssmodule.error}>Css module demo</h2> */}


        <Container>
            <Row>
                <Col className='text-danger'>
                    <MyButton>Click Me</MyButton><br/>
                    <TextBox type="password"></TextBox>
                </Col>
                <Col>
                <Form>
                    <Form.Group>
                        <Form.Label>name</Form.Label>
                        <Form.Control></Form.Control>
                    </Form.Group>
                </Form>
                </Col>
            </Row>
        </Container>
    </div>
  )
}

export default CssinReact
