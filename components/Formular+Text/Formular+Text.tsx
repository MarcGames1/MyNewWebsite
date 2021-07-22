import React from "react"
import { Container ,Alert, Col, Row, ListGroup } from "react-bootstrap"
import FormularContact from "../FormularContact/FormularContact"
import Checkmark from "../SVG.components/checkmark"
import LaptopContainer from "./laptop"




const FormularText = (props: { text: string[] })=>{


    return(<>
    
  
<Container className='d-md-flex' fluid>

<Col className=" d-block d-sm-block d-md-inline-block" lg={6} sm={12}  md={6}>

          {props.text.map((text)=><Alert  variant='info' key={text}><Checkmark height={20} color={'green'}/>{text}</Alert>)}
         
</Col>
  
   
<Col lg={6} sm={12}  md={6}>
    <FormularContact  />
</Col>
</Container>
     </>)

        
    
}

export default FormularText