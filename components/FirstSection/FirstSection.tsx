import { Container ,Alert, Col, Row } from "react-bootstrap"
import Checkmark from "../SVG.components/checkmark"
import LaptopContainer from "./laptop"


const FirstSection = ()=>{


    return(<>
    <h1>Hello</h1>
  
<Container className='d-flex' fluid>

    <Col className="d-inline-block" sm={12} lg={6} md={6}>
       
    <p><Alert variant={'dark'} >
        <Checkmark height={20} color={'currentColor'}/>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet sint beatae quo, temporibus sapiente, voluptate dignissimos sed doloremque, reiciendis officiis veniam modi quibusdam debitis quisquam mollitia! Porro provident quidem error!
        Reiciendis non minus aliquam sunt a odit tenetur, similique sequi, neque odio accusantium ullam? Iure, quasi animi. Laudantium sequi recusandae cum minus, ad quo eligendi id modi dignissimos nulla fugiat!
    </Alert>
       </p>
    <Alert variant={'dark'} >
       <Checkmark height={20} color={'currentColor'}/>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet sint beatae quo, temporibus sapiente, voluptate dignissimos sed doloremque, reiciendis officiis veniam modi quibusdam debitis quisquam mollitia! Porro provident quidem error!
        Reiciendis non minus aliquam sunt a odit tenetur, similique sequi, neque odio accusantium ullam? Iure, quasi animi. Laudantium sequi recusandae cum minus, ad quo eligendi id modi dignissimos nulla fugiat!
    </Alert>
    </Col>
   
<Col className="d-inline-block" lg={6} sm={12}  md={6}>
    <LaptopContainer  />
</Col>
</Container>
     </>)

        
    
}

export default FirstSection