import React from "react"
import { Container ,Alert, Col, Row, ListGroup } from "react-bootstrap"
import FormularContact from "../FormularContact/FormularContact"
import Checkmark from "../SVG.components/checkmark"
import LaptopContainer from "./laptop"


const texte =[
    'Afacerea ta online incepe cu un website modern',
    'Dezvoltare Website in cel mai scurt timp dupa nevoile tale ',
    'Optimizare Seo',
    'Seo on page',
    'Plan dedicat lunar pentru ca tu sa urci printre primele rezultate de cautare Google in cel mai scurt timp',
    'Monitorizarea traficului si a comportamentului utilizatorilor prin Google Analitycs',
    'Stabilire si implementare obiective in Google Analitycs',
    'Conectare cu Google Search Console',
    
]

const FormularText = ()=>{


    return(<>
    
  
<Container className='d-md-flex' fluid>

<Col className=" d-block d-sm-block d-md-inline-block" lg={6} sm={12}  md={6}>

          {texte.map((text)=><Alert  variant='info' key={text}><Checkmark height={20} color={'green'}/>{text}</Alert>)}
         
</Col>
  
   
<Col lg={6} sm={12}  md={6}>
    <FormularContact  />
</Col>
</Container>
     </>)

        
    
}

export default FormularText