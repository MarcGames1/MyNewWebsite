import React from 'react'
import { Alert } from 'react-bootstrap'
import FirstSection from '../components/FirstSection/FirstSection'
import FormularContact from '../components/FormularContact/FormularContact'
import MainNav from '../components/navbar/mainNav'



export default function Home() {



  return (
    <>
   <MainNav />
 <FirstSection />
 
   <FormularContact />
   
  </>
  )
}
