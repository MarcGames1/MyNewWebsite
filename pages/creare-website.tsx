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
import PregatireaResurselorSVG from "../components/SVG.components/Pregatirea_resurselorSVG"
import DeveloperSvg from "../components/SVG.components/DeveloperSvg"
import TestingSvg from "../components/SVG.components/TestingSvg"
import DebugSVG from "../components/SVG.components/DebugSvg"
import OptimizareSVG from "../components/SVG.components/Optimizare"
import MentenantaSVG from "../components/SVG.components/mentenanta"




function Page() {

  const svgHeigth = 150

  let cuprins = [

    new CuprinsElement('1', 'Reprezentarea vizuala a websiteului', '#1', 'paragraf2'),
    new CuprinsElement('2', 'Pregatirea resurselor pentru web', '#2', 'paragraf2'),
    new CuprinsElement('3', 'Dezvoltarea efectiva a website-ului', '#3', 'paragraf2'),
    new CuprinsElement('3.1', 'Testare', '#3.1', 'paragraf2'),
    new CuprinsElement('3.2', 'Debug', '#3.2', 'paragraf2'),
    new CuprinsElement('3.3', 'Optimizare', '#3.3', 'paragraf2'),
    new CuprinsElement('3.4','Mentenanta si Administrare','#3.4','Serviciul de mentenanta -> asigur buna functionare a siteului si orice alte modificari pe care le doreste clientu (se plateste lunar sau anual)'),
    new CuprinsElement('4', 'De ce sa lucrezi cu mine', '#4', 'paragraf2'),
  ]



  let texte = [
    ''
  ]
  let index = 0;
try{
  // if (texte.length !== cuprins.length) throw 'Verifica arrayul texte sa aibe acelasi nr de elemente ca si cuprins'
  if (index> cuprins.length) throw new RangeError ("index Number cannot be bigger than Cuprins Length!")
} 
  catch(err){
    console.log(err)
    if(err){return(<h1>EROARE!!!!!</h1>)}
  

}
 
   
   return (<>
    
    <Container fluid>
      <h1 className='text-center'>Creare Site Web</h1>
      <Row>
        <Col lg={3}><Cuprins active={false} list={cuprins} /></Col>
        <Col> <article>
          <h2>Procesul de Creare a unui site web</h2>

          {/* Reprezentarea Vizuala A Websiteului */}
          <CardCreareSite child={<Sketch height={svgHeigth} />} cuprins={cuprins[index]} {...index++} /> 
          
          {/* Pregatirea Resurselor Pt Web */}
          <CardCreareSite child={<PregatireaResurselorSVG height={svgHeigth} />} cuprins={cuprins[index]}  {...index++} /> 
         
          {/* DEZVOLTAREA EFECTIVA A WEBSITE-ULUI */}
          <CardCreareSite child={<DeveloperSvg height={svgHeigth} />} cuprins={cuprins[index]} {...index++} /> 
        
         

          {/* Testare */}
          <CardCreareSite child={<TestingSvg height={svgHeigth} />} cuprins={cuprins[index]}   {...index++}/> 
        
          {/*Debug  */}
          <CardCreareSite child={<DebugSVG height={svgHeigth} />} cuprins={cuprins[index]}  {...index++} /> 
         
          {/* Optimizare */}

          <CardCreareSite child={<OptimizareSVG height={svgHeigth} />} cuprins={cuprins[index]}  {...index++} /> 

            {/* Mentenanta si Administrare */}

          <CardCreareSite child={<MentenantaSVG height={svgHeigth} />} cuprins={cuprins[index]}  {...index++} /> 



          <HeaderInFunctieDeCuprins {...cuprins[index]} />

          < DeCeForm />

        </article></Col>
        {/* <Col></Col> */}
      </Row>

    </Container>
  </>)
}


export default Page