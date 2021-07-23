import { Container, Row, Col } from "react-bootstrap"
import React from "react"
import CuprinsElement from "../Classes/CuprinsElement"
import Cuprins from "../components/Cuprins/Cuprins"
import MainNav from "../components/navbar/mainNav"
import HeaderInFunctieDeCuprins from "../components/HeaderInFunctieDeCuprins/HeaderInFunctieDeCuprins"
import FormularText from "../components/Formular+Text/Formular+Text"
import MoodBoard from "../components/SVG.components/MoodBoard"
import Wireframe from "../components/SVG.components/WireFrame"
import Sketch from "../components/SVG.components/sketch"
import Mockup from "../components/SVG.components/mockup"
import DeCeForm from "../components/DECEsaLucreziCuMine/DeceSaLucreziCuMine+Form"
import CardCreareSite from "../components/Card/CardCreareSite"





function Page() {

  const svgHeigth = 150

  let cuprins = [

    new CuprinsElement('1', 'Reprezentarea vizuala a websiteului', '#1', 'paragraf2'),
    new CuprinsElement('1.1', 'MoodBord', '#1.1', 'paragraf 1'),
    new CuprinsElement('1.2', 'Wireframe', '#1.2', 'paragraf2'),
    new CuprinsElement('1.3', 'mockup', '#1.3', 'paragraf2'),
    new CuprinsElement('2', 'Pregatirea resurselor pentru web', '#2', 'paragraf2'),
    new CuprinsElement('3', 'Dezvoltarea efectiva a website-ului', '#3', 'paragraf2'),
    new CuprinsElement('3.1', 'Testare', '#3.1', 'paragraf2'),
    new CuprinsElement('3.2', 'Debug', '#3.2', 'paragraf2'),
    new CuprinsElement('3.3', 'Optimizare', '#3.3', 'paragraf2'),
    new CuprinsElement('4', 'De ce sa lucrezi cu mine', '#4', 'paragraf2')
  ]



  let texte = [
    ''
  ]

  return (<>
    <MainNav />
    <Container fluid>
      <h1 className='text-center'>Creare Site Web</h1>
      <Row>
        <Col lg={3}><Cuprins active={false} list={cuprins} /></Col>
        <Col> <article>
          <h2>Procesul de Creare a unui site web</h2>


          {/* Reprezentarea Vizuala A Websiteului */}
          <CardCreareSite child={<Sketch height={svgHeigth} />} cuprins={cuprins[0]} />
          {/* MoodBoard */}
          <CardCreareSite child={<MoodBoard height={svgHeigth} />} cuprins={cuprins[1]} />
          {/* Wireframe */}
          <CardCreareSite child={<Wireframe height={svgHeigth} />} cuprins={cuprins[2]} />
          {/* Mockup */}
          <CardCreareSite child={<Mockup height={svgHeigth} />} cuprins={cuprins[3]} />
          {/* Pregatirea Resurselor Pt Web */}
          <CardCreareSite child={<MoodBoard height={svgHeigth} />} cuprins={cuprins[4]} />
          {/* DEZVOLTAREA EFECTIVA A WEBSITE-ULUI */}
          <CardCreareSite child={<MoodBoard height={svgHeigth} />} cuprins={cuprins[5]} />

          {/* TODO De cautat SVG uri de aici incolo */}

          {/* Testare */}
          <CardCreareSite child={<MoodBoard height={svgHeigth} />} cuprins={cuprins[6]} />

          {/*Debug  */}
          <CardCreareSite child={<MoodBoard height={svgHeigth} />} cuprins={cuprins[7]} />

          {/* Optimizare */}

          <CardCreareSite child={<MoodBoard height={svgHeigth} />} cuprins={cuprins[8]} />



          <HeaderInFunctieDeCuprins {...cuprins[9]} />

          < DeCeForm />

        </article></Col>
        {/* <Col></Col> */}
      </Row>

    </Container>
  </>)
}

export default Page