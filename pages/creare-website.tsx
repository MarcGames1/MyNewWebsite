import { Container, Row, Col } from "react-bootstrap"
import React from "react"
import CuprinsElement from "../Classes/CuprinsElement"
import Cuprins from "../components/Cuprins/Cuprins"
import HeaderInFunctieDeCuprins from "../components/HeaderInFunctieDeCuprins/HeaderInFunctieDeCuprins"
import Sketch from "../components/SVG.components/sketch"
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
  let paragrafe :string[] = [
    'Reprezentarea vizuala a websiteului',
    'Pregatirea resurselor pentru web',
    'Dezvoltarea efectiva a website-ului',
    'Testare',
    'Debug',
    'Optimizare',
    'Mentenanta si Administrare Serviciul de mentenanta -> asigur buna functionare a siteului si orice alte modificari pe care le doreste clientu (se plateste lunar sau anual)',
  ]


  let cuprins = [

    new CuprinsElement('1', 'Reprezentarea vizuala a websiteului', '#1', paragrafe[0]),
    new CuprinsElement('2', 'Pregatirea resurselor pentru web', '#2', paragrafe[1]),
    new CuprinsElement('3', 'Dezvoltarea efectiva a website-ului', '#3', paragrafe[2]),
    new CuprinsElement('3.1', 'Testare', '#3.1', paragrafe[3]),
    new CuprinsElement('3.2', 'Debug', '#3.2', paragrafe[4]),
    new CuprinsElement('3.3', 'Optimizare', '#3.3', paragrafe[5]),
    new CuprinsElement('3.4','Mentenanta si Administrare','#3.4', paragrafe[6]),
    new CuprinsElement('4', 'De ce sa lucrezi cu mine', '#4', ''),
  ]



  
  let index = 0;
try{
  if (paragrafe.length !== cuprins.length-1) throw 'Verifica arrayul texte sa aibe acelasi nr de elemente ca si cuprins'
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

        </article></Col>

      </Row>

          <HeaderInFunctieDeCuprins {...cuprins[index]} />

          < DeCeForm />

        {/* <Col></Col> */}

    </Container>
  </>)
}


export default Page