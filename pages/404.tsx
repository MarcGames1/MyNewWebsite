import React from "react";
import { Alert, Button } from "react-bootstrap";

export default function Custom404() {
    return (<>
    <Alert variant={'danger'}>

    <h1  className='text-center d-block'>Aceasta pagina nu exista</h1>
    </Alert>
        <Button href='/'>Acasa</Button>
    
    <style>{`
        body{
           min-height:100vh;
            background-image: url('/img/404/404.jpg');
            background-repeat: no-repeat;
            background-size: contain;
            background-position: center;
        }


        
        `}</style>
    </>)
  }