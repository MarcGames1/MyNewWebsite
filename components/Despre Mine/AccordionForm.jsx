import React from "react";
import { Accordion, Card, Alert } from "react-bootstrap";
import FormularContact from "../FormularContact/FormularContact";


function AccordionForm(){
  return(
    <> 
    
   
<Accordion className='text-dark'> 
  <Card>
   
         
      <Accordion.Toggle className="btn btn-primary cursor-poiner hover-info" as={Alert}  variant="info" eventKey="0">
     <h6 className="h3 "> ✅ Completeaza Formularul Acum! ✅</h6>
      </Accordion.Toggle>
    
    <Accordion.Collapse eventKey="0">
      <Card.Body>
     <FormularContact />
      </Card.Body>
    </Accordion.Collapse>
  </Card>
 
</Accordion>
    
     </>
  )
}

export default AccordionForm