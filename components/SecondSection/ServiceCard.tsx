import React from "react"
import { Col, Button, Alert } from "react-bootstrap"
import Checkmark from "../SVG.components/checkmark"


const ServiceCard = (props: { 
    class: string 
    title: string
    description: string
    href: string
    color:string
    children: React.ReactNode
}) =>{


    const classVariant ='ServiceBox web '+ props.class

    const descrieri = props.description.split(',')

    return (<>
    
    <div className={classVariant}>
                    <a href={props.href}>
                    <div className="fa fa-code" aria-hidden="true">
                        {props.children}
                        </div>
                    <h2> {props.title} </h2>
                    <p>
                    {descrieri.map((text)=><div  className='light' key={text}><Checkmark height={20} color={props.color}/>{text}</div>)}
                    </p>
                    <Button className=' align-baseline' variant='primary'>Afla mai multe detalii</Button>
                    </a>

                </div>
    </>)
}


export default ServiceCard