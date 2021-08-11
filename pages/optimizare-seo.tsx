import React from 'react'
import { Container, Row, Col, ListGroup, ListGroupItem, Alert } from 'react-bootstrap'
import Image from 'next/image'
import HeaderInFunctieDeCuprins from '../components/HeaderInFunctieDeCuprins/HeaderInFunctieDeCuprins'
import CuprinsElement from '../Classes/CuprinsElement'
import FlipCard from '../components/FlipCard/FlipCard';
import Checkmark from '../components/SVG.components/checkmark';



function SeoPage(){





    // De facut Iconite Vectori cu Cartonase care arata textul la hover? sau ceva de genul

    return(<>
    <Container>

    <h1 className='text-center'>Optimizare Seo</h1>
    
    {/* <Col lg={3}><Cuprins active={false} list={cuprins} /></Col> */}
    <Col><article>

 
   

<Container>
    <Row>

        {/* Coloana 1 stanga sus */}
        <Col lg={{offset:3, span:7}}>
        <Alert variant={'success'}><span className='fw-bold'>Optimizarea SEO</span> a site-ului îți aduce avantajul de a crește crește vizibilitatea online a afacerii tale și te poziționează ca <span className='fw-bold'>ca expert pe nișa ta</span> În plus, reduce costul cu reclamele plătite; practic, rolul seo este să demareze procesul de vânzare, cât și vânzarea propriu-zisă, direct din articolele de blog. 
        <hr />
    <span className='text-center d-block fw-bold'>Pachetul de servicii și consultanță SEO cuprinde:</span>
</Alert>
        <FlipCard 
front = {{
    img:"/img/seo/audit-seo.jpg",
    altImg:'Audit seo on page',
}}
back ={{
    body:<> <p> Generarea rapoartelor de cuvinte cheie pentru fiecare pagina a site-ului</p>
    <ListGroup>
    <ListGroupItem><Checkmark height={20} color={'green'} /> Recomandări structura Url</ListGroupItem>
    <ListGroupItem><Checkmark height={20} color={'green'} /> Meta-titlu, meta-descriere si elemente heading</ListGroupItem>
    <ListGroupItem><Checkmark height={20} color={'green'} /> Realizare Arhitectura SEO a site-ului</ListGroupItem>
    </ListGroup>
    </>
}}
title={'Audit seo on page '}
/>

    
   
   
    



        </Col>



  {/* Coloana 2 Dreapta sus */}
  <Col lg={{offset:3, span:7}}>
        
        <FlipCard 
front = {{
    img:"/img/seo/audit-performanta.png",
    altImg:'alt',
}}
back ={{
    body:<> <p> <Checkmark height={30} color={'green'} /> Auditul de performanță al paginii web vine însoțit și recomandări pentru optimizarea site-ului, astfel încât după aplicarea lor, acesta să fie cât mai vizibil. </p>
    <p><Checkmark height={30} color={'green'} /> Site-urile create de mine au parametri optimi de viteză, astfel încât motorul de căutare Google nu va penaliza site-ul pentru timpul de încărcare.
    </p>
    <Image
    src='/img/seo/demo.png'
    alt='Demo'
    layout='responsive'
    width={600}
    height={300}
    />
    </>
}}
title={'Audit de performanță al paginii web'}
/>

        </Col>
    </Row>
    <Row>

  {/* Coloana 3 stanga jos */}
  <Col lg={{offset:3, span:7}}>
        
        <FlipCard 
front = {{
    img:"/img/seo/blog.jpg",
    altImg:'alt',
}}
back ={{
    body: <>  <ListGroup variant="flush">
    <ListGroup.Item><Checkmark height={30} color={'green'} /> Un blog te poate ajuta cu atragerea de trafic pe site ul tau</ListGroup.Item>
    <ListGroup.Item><Checkmark height={30} color={'green'} /> Cu ajutorul blogului poti creea o palnie de vanzare cu ajutorul careia vei prelua un potential client din momentul in care acesta constientizeaza ca are o nevoie pana in monemtul in care iti cumpara produsul sau serviciul</ListGroup.Item>
    <ListGroup.Item><Checkmark height={30} color={'green'} /> Te ajuta sa iti cresti notorietatea in mediul online chiar daca nu vei face intotdeauna vanzari din articole de blog, te vei pozitiona ca un expert pe domeniul tau de activitate iar potentiali clienti vor fi recunoscatori pentru informatiile pe care le-ai oferit creand astfel o relatie de lunga durata cu acestia</ListGroup.Item>
  </ListGroup> </>
}}
title={'Plan de conținut și structură pentru articole de blog'}
/>

        </Col>

 {/* Coloana 4 dreapta jos */}
 <Col lg={{offset:3, span:7}}>
        
        <FlipCard 
front = {{
    img:"/img/seo/advertorial.jpg",
    altImg:'alt',
}}
back ={{
    body: <>  <Alert variant="flush">
    <Alert.Heading className='text-center'>Cu ce te ajuta un plan de Link Building?</Alert.Heading>
    <ListGroup.Item variant='primary'><Checkmark height={20} color={'green'} />Linkurile care vin de la alte site-uri sunt ca niste voturi de incredere pe care le primesti, iar acestea sunt un factor deosebit de important care te ajuta sa ajungi in prima pozitie pe Google</ListGroup.Item>
    <ListGroup.Item variant='primary'><Checkmark height={20} color={'green'} />Să urci și să te menții pe termen lung în prima pagină de căutări a Google.</ListGroup.Item>
    <ListGroup.Item variant='primary'><Checkmark height={20} color={'green'} /> Să conturezi o imagine profesională a brandului tău pentru utilizatori.</ListGroup.Item>
    <hr />
    <Alert.Heading className='text-center'>‼️ Atentie! Google te <span className='text-danger'>penalizează</span> Google dacă nu îi respecți politica</Alert.Heading>
    <Alert variant='primary'><Checkmark height={20} color={'green'} /> Consultanță profesională SEO (cât și cunoașterea algoritmilor Google), pe care o asigur, reprezintă garanția că site-ul tău va fi ferit de eventuale penalizări din partea Google. 
</Alert>
  </Alert>   </>
}}

title={'Plan personalizat Link Building'}

    
   

/>
        
        </Col>
    </Row>
</Container>



    </article></Col>
    
    </Container>






    <style global jsx>
        {`
        .react-card-back{
           
            background-color:#fff;
        }
        .react-card-back , .react-card-front, .front-overlay,.card-img-overlay, .back-overlay{
            
        }
        @media only screen and (min-device-width: 480px) 
                   and (max-device-width: 640px) 
                   and (orientation: landscape) {

                    .col-md-12{
                        width:50% !important;
                    }
}
        `}
    </style>
    </>)
}

export default SeoPage