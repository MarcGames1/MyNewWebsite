import React from "react"
import { Col, Row, Container,  } from "react-bootstrap"
import Image from 'next/image'
import MainJumbotron from "./MainJumbotron"


function FirstSection(){

    return(<>
   <Container fluid className='hero'>
   <Row className='align-items-center'>
<Col  md={5} xs={12} sm={12}>
<MainJumbotron  />
</Col>
    <Col md={7} xs={12} sm={12}>
<Image 
    src='/img/firstSection/hero_img.png' width={800} height={600} layout='intrinsic' />

    </Col>
  </Row>
   </Container>

   <style>{`
       .hero{
           height:100vh;
       }
       `}</style>
    </>)
}


export default FirstSection