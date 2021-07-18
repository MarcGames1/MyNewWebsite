import { Container ,Alert, Col, Row } from "react-bootstrap"
import FormularContact from "../FormularContact/FormularContact"
import Checkmark from "../SVG.components/checkmark"
import LaptopContainer from "./laptop"


const FormularText = ()=>{


    return(<>
    
  
<Container className='d-md-flex' fluid>

    <Col className=" d-block d-sm-block d-md-inline-block" >

    <Alert className="animate__animated animate__fadeInLeft" variant={'success'} >
        <Checkmark height={20} color={'currentColor'}/>Afacerea ta online incepe cu un website modern
    </Alert>
       
    <Alert className="animate__animated animate__fadeInLeft" variant={'dark'} >
        <Checkmark height={20} color={'currentColor'}/>Dezvoltare Website in cel mai scurt timp dupa nevoile tale 
    </Alert>
       
    <Alert className="animate__animated animate__fadeInRight" variant={'dark'} >
       <Checkmark height={20} color={'currentColor'}/>Optimizare Seo , Seo on page si plan dedicat lunar pentru ca tu sa urci printre primele rezultate de cautare Google in cel mai scurt timp
    </Alert>
    <Alert className="animate__animated animate__fadeInLeft" variant={'dark'} >
        <Checkmark height={20} color={'currentColor'}/>Stabilire si implementare obiective in Google Analitycs
    </Alert>
    </Col>
   
<Col className=" d-block d-sm-block d-md-inline-block" lg={6} sm={12}  md={6}>
    <FormularContact  />
</Col>
</Container>
     </>)

        
    
}

export default FormularText