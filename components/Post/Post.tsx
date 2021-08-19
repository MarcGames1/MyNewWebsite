import React from "react"
import { Card, Button } from "react-bootstrap"
import Link from 'next/link'

const Post =(props :any)=>{

    return(
        <Card className="card">
            <Card.Img height={300} width={50}  src={props.frontmatter.cover_image} alt={props.frontmatter.title} />
            <Card.Body>

            <div className="post-date">Postat la data de {props.frontmatter.date}</div>

            <Card.Title>{props.frontmatter.title}</Card.Title>
            <Card.Text>{props.frontmatter.excerpt}</Card.Text>
            <Link href={`/${props.folder}/${props.slug}`}>
            <Button variant="primary">Citeste Articolul</Button>
            </Link>
            </Card.Body>
        </Card>
    )
}


export default Post