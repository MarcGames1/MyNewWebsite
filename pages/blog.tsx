import React from "react";
import { Alert, Button } from "react-bootstrap";
import Image from 'next/image'
import { Container } from "next/app";
export default function Blog() {
 
      return (<>
    <Alert variant={'warning'}>
        <Button href='/'>Acasa</Button>

    <h1  className='text-center d-block'>Aceasta Pagina Va fi Disponibila incurand</h1>
    </Alert>
    <div className='d-flex flex-column justify-content-center align-content-center text-center mx-auto my-auto' >
        <Image  src='/img/construction/construction.gif' alt='construction img' width={150} height={300}  layout='intrinsic'/>
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