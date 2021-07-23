import React from "react"
import { Container, Col, Row } from "react-bootstrap"
import AdsSvg from "../SVG.components/alteServici"
import SeoSvg from "../SVG.components/seo"
import WebdevSvg from "../SVG.components/webdev"
import ServiceCard from "./ServiceCard"



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
    const seo = new Service ('seo', 'SEO', 'Seo On Page,Seo Off Page,Plan Advertoriale SEO,Structura Articole pentru sectiunea de Blog','#00A0F0','/seo')
    const ads = new Service ('ads', 'Alte Servicii', 'Conectare cu Google Search Console,Conectare cu Google Analitycs,Optimizare Campanii Google Ads','#00EBAC','/alte-servicii')
    

   
    return (<>

        <Container fluid>
            <Row id="serviceMainBlock">
            <Col className='pb-5' lg={4} md={12}> 
                <ServiceCard class={developer.type}
                    title={developer.title}
                    description={developer.description}
                    href = {developer.href}
                    color={developer.color}
                ><WebdevSvg height={48} color={developer.color}/>
                </ServiceCard>
</Col>
                <Col lg={4} md={12}> 
               <ServiceCard 
               
                class= {seo.type}
                title = {seo.title}
                description = {seo.description}
                href = {seo.href}
                color={seo.color}
            >
                <SeoSvg height={48} color={seo.color} />
                </ServiceCard>
</Col>
                <Col lg={4} md={12}> 
                <ServiceCard 
               
               class= {ads.type}
               title = {ads.title}
               description = {ads.description}
               href = {ads.href}
               color={ads.color}
               >
               <AdsSvg height={48} color={ads.color} />
               </ServiceCard>
            </Col>

            </Row>

        </Container>

        <style global jsx>
            {`
            div#services {
    background: #f7f6f6;
    text-align: center;
  
    padding: 25px;
    overflow: hidden;
}
.ServiceInner h2 {
    font-size: 35px;
    color: #000000;
}

.ServiceInner p {
    font-size: 25px;
    padding: 20px;
    color: #313d4a;
    margin-bottom: 20px;
}


div#serviceMainBlock {
    text-align: center;
    margin: auto;
    display:flex;
    
    }

.ServiceBox {
    min-height:90vh;
    display: flex;
    width: 100%;
}


.ServiceBox.web {
    background: white;
    padding: 30px 10px;
}

.ServiceBox.web p {
    font-size: 20px;
    padding: 41px;
}

.ServiceBox.web h2 {
    color: #ff3a46;
}

/* seo */


.ServiceBox.seo {
    background: white;
    padding: 30px 10px;
}

.ServiceBox.seo p {
    font-size: 20px;
    padding: 41px;
}

.ServiceBox.seo h2 {
    color: #00A0F0;
}

/* ads */


.ServiceBox.ads {
    background: white;
    padding: 30px 10px;
}

.ServiceBox.ads p {
    font-size: 20px;
    padding: 41px;
}

.ServiceBox.ads h2 {
    color: #00EBAC;
}
.ServiceBox {
    box-shadow: 4px 4px 20px #afafaf;
    transition-duration: 0.6s;
}

.fa {
    font-size: 25px;
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

.ServiceBox p {
    color: #3a3939;
}
            `}
        </style>
    </>)
}

export default SecondSection