import React from "react"
import { Container, Col, Row } from "react-bootstrap"
import Image from 'next/image'
import Text from "../components/Despre Mine/Text"
import styles from '../styles/Despre.module.css'
import Footer  from "../components/Footer/Footer"
import MainNav from "../components/navbar/mainNav"
import WhatsappSticky from "../components/Phone-only/stickyWhatsapp"
const Despre = () =>{
    const bg_img :string= '/img/background/Desprebg2.jpg';
    const me_img :string = "/img/despre/Eu.jpg"


    return(<>
    <Image className={styles.bg_img} src={bg_img} alt='bg_img' layout='fill'  />
    <MainNav />
    <Container fluid>
        <Row className='d-flex align-content-center justify-content-center'>
    <Col md={6}>
    <div className= 'd-flex align-items-center justify-items-center'>
        <div className=' mx-auto my-auto img-thumbnail'>
        <Image className={styles.img} src={me_img} width={500} height={500} layout='intrinsic'  />
        </div>

    </div>
    </Col>
    <Col md={6}>
        <Text />
    </Col>
    </Row>

    </Container>
<WhatsappSticky />
  <Footer />
   
    </>)
}

export default Despre