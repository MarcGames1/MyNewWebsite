import { Alert, Col, Row } from "react-bootstrap"
import Checkmark from "../SVG.components/checkmark"
import LaptopContainer from "./laptop"


const FirstSection = ()=>{


    return(<>
    <h1>Hello</h1>
  

   

    <LaptopContainer col={6} />
    <Col className=' d-sm-block d-md-inline-block position-absolute' md={6}>
        <Row>
    <Alert variant={'dark'} >
        <Checkmark height={20} color={'currentColor'}/>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet sint beatae quo, temporibus sapiente, voluptate dignissimos sed doloremque, reiciendis officiis veniam modi quibusdam debitis quisquam mollitia! Porro provident quidem error!
        Reiciendis non minus aliquam sunt a odit tenetur, similique sequi, neque odio accusantium ullam? Iure, quasi animi. Laudantium sequi recusandae cum minus, ad quo eligendi id modi dignissimos nulla fugiat!
    </Alert>
        </Row>

        <Row>
    <Alert variant={'dark'} >
       <Checkmark height={20} color={'currentColor'}/>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet sint beatae quo, temporibus sapiente, voluptate dignissimos sed doloremque, reiciendis officiis veniam modi quibusdam debitis quisquam mollitia! Porro provident quidem error!
        Reiciendis non minus aliquam sunt a odit tenetur, similique sequi, neque odio accusantium ullam? Iure, quasi animi. Laudantium sequi recusandae cum minus, ad quo eligendi id modi dignissimos nulla fugiat!
    </Alert>
    </Row>
    </Col>
     </>)
}

export default FirstSection