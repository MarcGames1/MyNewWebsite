import React from "react"
import { Container ,Alert, Col, Row, ListGroup } from "react-bootstrap"
import FormularContact from "../FormularContact/FormularContact.jsx"
import Checkmark from "../SVG.components/checkmark"
import LaptopContainer from "./laptop"




const FormularText = (props: { text: string[] })=>{


    return(<>
    
  
<Container className='d-md-flex' fluid>

<Col lg={{span:4, offset:1}} sm={{span:10, offset:1}}  md={{span:6, offset:0}}>

          {props.text.map((text)=><Alert  variant='info' key={text}><Checkmark height={20} color={'green'}/>{text}</Alert>)}
         
</Col>
 
   
<Col   lg={{span:4, offset:2}} sm={{span:10, offset:1}}  md={{span:5, offset:1}}>
    <FormularContact  />
</Col>
</Container>
     </>)

        
    
}

export default FormularText