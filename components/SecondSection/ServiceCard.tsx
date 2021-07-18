import React from "react"
import { Col, Button } from "react-bootstrap"


const ServiceCard = (props: { 
    class: string 
    title: string
    description: string
    href: string
    children: React.ReactNode
}) =>{


    const classVariant ='ServiceBox web '+ props.class

    return (<>
    
    <Col className={classVariant}>
                    <a href={props.href}>
                    <div className="fa fa-code" aria-hidden="true">
                        {props.children}
                        </div>
                    <h2> {props.title} </h2>
                    <p>
                       {props.description}
                    </p>

                    </a>
                </Col>
    </>)
}


export default ServiceCard