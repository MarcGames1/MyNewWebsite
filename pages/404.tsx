import React from "react";
import { Alert, Button, Container } from "react-bootstrap";
import Image from 'next/image'

export default function Custom404() {
    return (<>
    <Alert variant={'danger'}>
        <Button href='/'>Acasa</Button>

    <h1  className='text-center d-block'>A aparut o eroare! </h1>
    </Alert>
    <div className='d-flex flex-column justify-content-center align-content-center text-center mx-auto my-auto' >
        <Image  src='/img/404/404.webp' alt='404 img' width={300} height={300}  layout='intrinsic'/>
    </div>

    
    
    <style>{`
        
        body{
            
           min-height:100vh;
            
            background-repeat: no-repeat;
            background-size: contain;
            background-position: 50% 10%;
            background-blend-mode:normal ;
        }


        `}</style>
    </>)
  }