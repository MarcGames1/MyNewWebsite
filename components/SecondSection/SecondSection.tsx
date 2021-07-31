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
    const seo = new Service ('seo', 'SEO', 'Seo On Page,Seo Off Page,Plan Advertoriale SEO,Structura Articole pentru sectiunea de Blog','#00A0F0','/optimizare-seo')
    const ads = new Service ('ads', 'Alte Servicii', 'Conectare cu Google Search Console,Conectare cu Google Analitycs,Optimizare Campanii Google Ads','#00EBAC','/alte-servicii')
    

   
    return (<>

        <Container fluid>
            <Row id="serviceMainBlock">
            <Col lg={4} md={12}> 
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
       
.ServiceInner h2 {
    font-size: 35px;
    color: #000000;
}




div #serviceMainBlock {
    text-align: center;
    margin: auto;
    display:flex;
    
    }

.ServiceBox {
    z-index:2;
    min-height:83vh;
    width: 100%;
    display: flex;
    flex-direction:column;
    align-items:center;
    margin-bottom:1em;
    background: white;
    padding: 30px 10px;
    
}
.col-lg-4{
    z-index: 2;
}
    




.ServiceBox  div div {
    font-size: 20px;
    padding: 1rem 1.2rem;
    text-align: left;
}

.ServiceBox.web h2 {
    color: #ff3a46;
}

/* seo */


.ServiceBox.seo h2 {
    color: #00A0F0;
}





/* ads */


.ServiceBox.ads h2 {
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