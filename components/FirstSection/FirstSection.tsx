import React from "react"
import { Col, Row, Container,  } from "react-bootstrap"
import Image from 'next/image'
import MainJumbotron from "./MainJumbotron"
import styles from './FirstSection.module.css'





const myImg:string = '/img/firstSection/hero_img.png'

function FirstSection(){

    return(<>
   <Container fluid className='hero'>
   <Row className='align-items-center'>
<Col  md={7} xs={12} sm={12}>
<MainJumbotron  />
</Col>
    <Col className='hero' md={5} xs={12} sm={12}>
<Image 
    className={styles.hero_img}
    src={myImg} 
    alt='Marcu Alexandru' 
    width={800} height={600} 
    layout='responsive' 
    objectFit='contain' 
    />
    </Col>
  </Row>
   </Container>


   <style>{`
      
       `}</style>
    </>)
}


export default FirstSection