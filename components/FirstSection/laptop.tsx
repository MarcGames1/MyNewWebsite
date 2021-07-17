import React from "react";
import Image from 'next/image'
import { Col } from "react-bootstrap";

// import  Laptop  from '.;

function LaptopContainer(props: { col: number | boolean | { span?: (boolean | "auto" | (number | "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | "10" | "11" | "12")) | undefined; offset?: (number | "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | "10" | "11" | "12") | undefined; order?: ((number | "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | "10" | "11" | "12") | "first" | "last") | undefined; } | undefined; }) {
  return (<>
    <Col className='m-0 p-0 d-inline-block'  md={props.col}> 
    
      <Image layout={'intrinsic'} width={800} height = {800} src='/img/firstSection/laptop.png' alt='pic' />
    </Col>
      
  </>);
}

export default LaptopContainer