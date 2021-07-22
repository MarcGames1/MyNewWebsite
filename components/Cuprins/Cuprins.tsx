import React from "react"
import { ListGroup } from "react-bootstrap"
import CuprinsElement from "../../Classes/CuprinsElement"

function Cuprins (props: { 
    list:CuprinsElement[]
    active:boolean
 })
{
   


    
    return(<div className='position-fixed' id="sticky-sidebar">
    <br />
  <ListGroup>
    {props.list.map((el, idx)=><ListGroup.Item active={props.active} action key={idx} variant="primary"> <a className='text-capitalize' href ={el.link}>{el.number} {el.name}</a></ListGroup.Item>)}
  </ListGroup>
  
 </div> )
  }
  

export default Cuprins