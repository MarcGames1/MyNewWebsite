import { Container, Row, Col } from 'react-bootstrap'
import Image from 'next/image'
import HeaderInFunctieDeCuprins from '../components/HeaderInFunctieDeCuprins/HeaderInFunctieDeCuprins'
import CuprinsElement from '../Classes/CuprinsElement'
import React from 'react'
import Cuprins from '../components/Cuprins/Cuprins'

const SeoPage=()=>{


    let cuprinss = [

        new CuprinsElement('1', 'Reprezentarea vizuala a websiteului', '#1', 'paragrafe[0]'),
        new CuprinsElement('2', 'Pregatirea resurselor pentru web', '#2', 'paragrafe[1]'),
        new CuprinsElement('3', 'Dezvoltarea efectiva a website-ului', '#3', 'paragrafe[2]'),
        new CuprinsElement('3.1', 'Testare', '#3.1', 'paragrafe[3]'),
        new CuprinsElement('3.2', 'Debug', '#3.2', 'paragrafe[4]'),
        new CuprinsElement('3.3', 'Optimizare', '#3.3', 'paragrafe[5]'),
        new CuprinsElement('3.4','Mentenanta si Administrare','#3.4', 'paragrafe[6]'),
        new CuprinsElement('4', 'De ce sa lucrezi cu mine', '#4', ''),
      ]
    

    let cuprins =[
       new CuprinsElement( '1','Audit seo on page', '#1', ''),
       new CuprinsElement( '1.1',' Generarea rapoartelor de cuvinte cheie pentru fiecare pagina a site-ului', '#1.1', ''),
       new CuprinsElement( '2','Audit de performanță al paginii web', '#2', 'astfel încât acesta să fie cât mai vizibil. Site-urile create de mine au parametri optimi de viteză, astfel încât motorul de căutare Google nu va penaliza site-ul pentru timpul de încărcare.'),
       new CuprinsElement( '3','Plan de conținut și structură pentru articole de blog', '#3', 'Backlinks și advertoriale Seo'),
       new CuprinsElement('5','Plan de Advertoriale SEO','#5','Planul de advertoriale SEO este cel care menține site-ul pe prima pagină a căutării Google, asigurandu-se așadar o vizibilitate maximă a brandului. Este necesar ca advertorialele să fie publicate constant, pentru a putea urca și rămâne în primele rezultate pe Google.')
    ]

    // De facut Iconite Vectori cu Cartonase care arata textul la hover? sau ceva de genul

    return(<>
    <Container fluid>

    <h1 className='text-center'>Optimizare Seo</h1>
    <Row>
    {/* <Col lg={3}><Cuprins active={false} list={cuprins} /></Col> */}
    <Col><article>

    <Col  lg={{span:6, offset:3}}>
    <Image  src='/img/seo/seo.jpg' height={300} width={600} layout='responsive'/>
    </Col>
    <p>Optimizarea SEO a site-ului îți aduce avantajul de a crește crește vizibilitatea online a afacerii tale și te poziționează ca expert pe nișa ta. În plus, reduce costul cu reclamele plătite; practic, rolul seo este să demareze procesul de vânzare, cât și vânzarea propriu-zisă, direct din articolele de blog. 

Pachetul de servicii și consultanță SEO cuprinde:
</p>
<HeaderInFunctieDeCuprins {...cuprins[0]}/>
<HeaderInFunctieDeCuprins {...cuprins[1]}/>
<HeaderInFunctieDeCuprins {...cuprins[2]}/>
<p><span>Recomandări pentru optimizarea site-ului</span> {cuprins[2].text}</p>
<HeaderInFunctieDeCuprins {...cuprins[3]}/>

    </article></Col>
    </Row>
    </Container>
    </>)
}

export default SeoPage