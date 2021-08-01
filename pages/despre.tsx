import React from "react"
import { Image, Container, Col, Row } from "react-bootstrap"
import Text from "../components/Despre Mine/Text"
import styles from '../styles/Despre.module.css'
const Despre = () =>{

    return(<Container fluid>
        <Row className='d-flex align-content-center justify-content-center'>
    <Col md={6}>
    <Image className={styles.img} src="img/despre/Eu.jpg"  thumbnail />
    </Col>
    <Col md={6}>
        <Text />
    </Col>
    </Row>

    <style global jsx>{`
   body{
    
   background-image: url(/img/background/Desprebg2.jpg) !important;
   background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
}


     `}</style>
    </Container>)
}

export default Despre