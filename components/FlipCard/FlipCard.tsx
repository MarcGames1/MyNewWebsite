import React, {ReactChild, ReactComponentElement, ReactNode, useState} from "react"
import { Button, Card, Alert } from "react-bootstrap"
import ReactCardFlip from "react-card-flip"


function FlipCard (props: { 
    
    title: string,
    
    front:{
        img:string,
        altImg:string,
       
    },
    back:{
        
        
        body:ReactNode 
    }

}){

    const [isflipped, setFlipped] = useState(false)

    const flipCard = ()=>{
    
        setFlipped(true);
    }
    const flipFront = () => {
        setFlipped(false);
    }

    return(<>

<ReactCardFlip isFlipped={isflipped}>
<Card className=' flipCard' onClick={flipCard}>
  <Card.Img src={props.front.img} alt={props.front.altImg} />
  <Card.ImgOverlay className='front-overlay d-flex flex-column align-content-center justify-content-between'>

    <Card.Title className='text-center bg-secondary-transparent fw-bolder'>{props.title}</Card.Title>
   
    <Button className='d-block'  variant="primary" onClick={flipCard}>Cititi mai mult</Button>
    </Card.ImgOverlay>

</Card>
<div className='back flipCard' onClick={flipFront}>
 
  <Card.Body className='noselect d-flex flex-column' >
    <Card.Title className=' align-top justify-top text-center'>{props.title}</Card.Title>
    <Card.Text>
      {props.back.body} 
    </Card.Text>
    <Button className='d-block'  variant="primary" onClick={flipCard}>Reveniti</Button>
  </Card.Body>
</div>
</ReactCardFlip>

<style global jsx>{` 

    .bg-secondary-transparent{
        background-color:#ffff;
    }
    .back{
        height:50vh;
        overflow:scroll;
        
    }
    .card, .card-img{
        max-height:50vh;
        background-position:fixed;
    }
    .flipCard{
        cursor:pointer;
        margin:1em;
        box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.2), 0 2px 5px 0 rgba(0, 0, 0, 0.19);

        transition:all;
        transition-delay:.2s;
        transition-duration:.5s;

        transition-timing-function:ease-in;
    }

    .front-overlay{
        transition: all 1s ease-in;
        background-color:rgba(0,0,0,0.4);
        overflow:hidden;
        
     
    }
    .front-overlay:hover{
        background-color:rgba(0,0,0,0.0);

    }
    .front-overlay > button{
        display:none !important;
    }
   

    .front-overlay:hover > button{
        display:block !important;
    }
  


    .flipCard:hover{
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    }
    `}</style>
    </>)
}

export default FlipCard