import React from "react"
import { ListGroup } from "react-bootstrap"
import CuprinsElement from "../../Classes/CuprinsElement"

function Cuprins (props: { 
    list:CuprinsElement[]
    active:boolean
 })
{
   


    
    return(<>
        <p className='text-primary text-center font-weight-bold text-uppercase'>Cuprins</p>
  <ListGroup>
    {props.list.map((el, idx)=><ListGroup.Item active={props.active} action key={idx} variant="primary"> <a href={el.link}>{el.number} {el.name}</a></ListGroup.Item>)}
  </ListGroup>
  
 </> )
  }
  

export default Cuprins