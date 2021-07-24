import React from "react";
import { Alert, Button } from "react-bootstrap";

export default function Custom404() {
    return (<>
    <Alert variant={'danger'}>

    <h1  className='text-center d-block'>A aparut o eroare! </h1>
    </Alert>

    
        <Button href='/'>Acasa</Button>
    
    <style>{`
        body{
           min-height:100vh;
            background-image: url('/img/404/404.webp');
            background-repeat: no-repeat;
            background-size: contain;
            background-position: 50% 10%;
            background-blend-mode:normal ;
        }


        `}</style>
    </>)
  }