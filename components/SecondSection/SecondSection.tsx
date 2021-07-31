import React from "react"
import { Container, CardGroup ,  Col, Row, Card, Button } from "react-bootstrap"
import AdsSvg from "../SVG.components/alteServici"
import Checkmark from "../SVG.components/checkmark"
import SeoSvg from "../SVG.components/seo"
import WebdevSvg from "../SVG.components/webdev"
import ServiceCard from "./ServiceCard"
import Link from 'next/link'



const SecondSection = () => {

    class Service {
        type: string
        title: string
        description: string
        color:string
        href:string

        constructor (type: string, title: string, description: string, color:string, href:string) {
          this.type = type
          this.title = title
          this.description = description
          this.color = color
          this.href = href
        }
        
    }

    const developer =new Service('web', 'Web Developer', 'Creare website profesional ,Website facut dupa nevoile si viziunea afacerii tale','red','/creare-website')
    const seo = new Service ('seo', 'SEO', 'Seo On Page,Seo Off Page,Plan Advertoriale SEO,Structura Articole pentru sectiunea de Blog','#00A0F0','/optimizare-seo')
    const ads = new Service ('ads', 'Alte Servicii', 'Conectare cu Google Search Console,Conectare cu Google Analitycs,Optimizare Campanii Google Ads','#00EBAC','/alte-servicii')
    

   
    return (<>

        <Container fluid>
            <CardGroup className='m-2 gap-4' id="serviceMainBlock">
                <Link href={developer.href}>
            <Card className={'ServiceBox '+developer.type}> 
            <WebdevSvg height={48} color={developer.color}/>
            <Card.Body>
                <Card.Title className='text-center'>{developer.title}</Card.Title>
                <Card.Text>{developer.description.split(',').map((text)=><div  className='light' key={text}><Checkmark height={20} color={developer.color}/> {text}</div>)}</Card.Text>
                <Button href={developer.href} className=' align-self-end' variant='primary'>Afla mai multe detalii</Button>  
            </Card.Body>
</Card>
                </Link>
<Card className={'ServiceBox '+seo.type}> 
            <WebdevSvg height={48} color={seo.color}/>
            <Card.Body>
                <Card.Title className='text-center'>{seo.title}</Card.Title>
                <Card.Text>{seo.description.split(',').map((text)=><div  className='light' key={text}><Checkmark height={20} color={seo.color}/> {text}</div>)}</Card.Text>
                <Button href={seo.href} className=' align-self-end' variant='primary'>Afla mai multe detalii</Button>  
            </Card.Body>
</Card>
<Card className={'ServiceBox '+ads.type}> 
            <WebdevSvg height={48} color={ads.color}/>
            <Card.Body>
                <Card.Title className='text-center'>{ads.title}</Card.Title>
                <Card.Text>{ads.description.split(',').map((text)=><div  className='light' key={text}><Checkmark height={20} color={ads.color}/> {text}</div>)}</Card.Text>
                <Button className='align-self-end' href={ads.href}  variant='primary'>Afla mai multe detalii</Button>  
            </Card.Body>
</Card>
            </CardGroup>

        </Container>

        <style global jsx>
            {`
       
.ServiceInner h2 {
    font-size: 35px;
    color: #000000;
}


.web div .h5 {
    color: #ff3a46;
}

/* seo */


.seo div .h5 {
    color: #00A0F0;
}





/* ads */


.ads  div .h5 {
    color: #00EBAC;
}


.ServiceBox {
    box-shadow: 4px 4px 20px #afafaf;
    transition-duration: 0.6s;
}



.ServiceBox.web:hover{
    box-shadow: -3px 3px 15px #FF3A46;
    cursor: pointer;
}

.ServiceBox.seo:hover{
    box-shadow: -3px 3px 15px #00A0F0;
    cursor: pointer;
}
.ServiceBox.ads:hover{
    box-shadow: -3px 3px 15px #00EBAC;
    cursor: pointer;
}


            `}
        </style>
    </>)
}

export default SecondSection