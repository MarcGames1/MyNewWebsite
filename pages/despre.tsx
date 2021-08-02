import React from "react"
import { Container, Col, Row } from "react-bootstrap"
import Image from 'next/image'
import Text from "../components/Despre Mine/Text"
import styles from '../styles/Despre.module.css'
const Despre = () =>{

    return(<Container fluid>
        <Row className='d-flex align-content-center justify-content-center'>
    <Col md={6}>
    <div className= 'd-flex align-items-center justify-items-center'>
        <div className=' mx-auto my-auto img-thumbnail'>
        <Image className={styles.img} src="/img/despre/Eu.jpg" width={500} height={500} layout='intrinsic'  />
        </div>

    </div>
    </Col>
    <Col md={6}>
        <Text />
    </Col>
    </Row>

    <style global jsx>{`
   body{
    height:auto;
    width:100vw;
   background-image: url(/img/background/Desprebg2.jpg) !important;
   background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
}


     `}</style>
    </Container>)
}

export default Despre