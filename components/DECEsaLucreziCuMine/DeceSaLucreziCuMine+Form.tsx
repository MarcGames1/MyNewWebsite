import React from "react"
import { Container ,Col } from "react-bootstrap"
import FormularContact from "../FormularContact/FormularContact.jsx"
import DeCE from "./DeCE"




const DeCeForm = ()=>{


    return(<>
    
  
<Container className='d-md-flex' fluid>

<Col className=" d-block d-sm-block d-md-inline-block" lg={6} sm={12}  md={6}>

         <DeCE />
         
</Col>
  
   
<Col lg={6} sm={12}  md={6}>
    <FormularContact  />
</Col>
</Container>
     </>)

        
    
}

export default DeCeForm