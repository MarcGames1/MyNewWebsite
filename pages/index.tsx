import React from 'react'
import { Alert, Col } from 'react-bootstrap'
import SecondSection from '../components/SecondSection/SecondSection'
import FormularContact from '../components/FormularContact/FormularContact'
import MainNav from '../components/navbar/mainNav'
import FirstSection from '../components/FirstSection/FirstSection'



export default function Home() {



  return (
    <>
   <MainNav />
   <FirstSection />
 <SecondSection />
 <Col md={6}>
   <FormularContact />
 </Col>
   
  </>
  )
}
