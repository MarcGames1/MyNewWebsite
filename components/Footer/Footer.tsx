import React from "react"
import {Row, Container, Col, ListGroup } from "react-bootstrap"
import SocialMedia from "../Social-Media/SocialMedia"

const Footer =()=>{


    return (<>
    <Container fluid className='bg-dark text-white'>
      <Container>

    <Row>

<Col>
<h5 className="text-uppercase font-weight-bold mb-4">Footer Content</h5>
<p>Here you can use rows and columns here to organize your footer content.</p>
</Col>

{/* Prima Coloana */}

<hr className="w-100 clearfix d-md-none"/>

{/* A 2 a Coloana */}

<Col>
<ListGroup>
<p className='h3 text-center'>linkuri utile</p>
<a href='/despre'><ListGroup.Item action variant='secondary'>Despre Mine</ListGroup.Item></a>
<a href='/portofoliu'><ListGroup.Item action variant='secondary'>Portofoliu</ListGroup.Item></a>
<a href='/tutoriale'><ListGroup.Item action variant='secondary'>Tutoriale</ListGroup.Item></a>
<a href='/blog'><ListGroup.Item action variant='secondary'>Blog</ListGroup.Item></a>
  </ListGroup>

</Col>

<hr className="w-100 clearfix d-md-none"/>


{/* A 3 a Coloana */}
<Col>
<ListGroup>
  <p className='h3 text-center'>Servicii</p>
  <ListGroup.Item> 1</ListGroup.Item>
  <ListGroup.Item> 1</ListGroup.Item>
  <ListGroup.Item> 1</ListGroup.Item>
  <ListGroup.Item> 1</ListGroup.Item>
  </ListGroup>

</Col>
<Col>
<ListGroup>
  <p className='h3 text-center'>Contact</p>
  <ListGroup.Item> 1</ListGroup.Item>
  <ListGroup.Item> 1</ListGroup.Item>
  <ListGroup.Item> 1</ListGroup.Item>
  <ListGroup.Item> 1</ListGroup.Item>
  </ListGroup>
</Col>
<SocialMedia col_md={3} />
</Row>
      </Container>
    </Container>

    </>)
}


export default Footer
    

