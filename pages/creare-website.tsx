import { Container, Row, Col } from "react-bootstrap"
import React, { useState } from "react"
import CuprinsElement from "../Classes/CuprinsElement"
import Cuprins from "../components/Cuprins/Cuprins"
import MainNav from "../components/navbar/mainNav"
import WebsiteSvg from "../components/SVG.components/websitesvg"
import HeaderInFunctieDeCuprins from "../components/HeaderInFunctieDeCuprins/HeaderInFunctieDeCuprins"



function Page() {

const [level, setLevel] =useState(1)

let cuprins =[
  
  new CuprinsElement('1', 'Reprezentarea vizuala a websiteului', '#1'),
  new CuprinsElement('1.1','MoodBord','#1.1'),
  new CuprinsElement('1.2','Wireframe','#1.2'),
  new CuprinsElement('1.3','Mokup','#1.3'),
  new CuprinsElement('2','Pregatirea resurselor pentru web','#2'),
  new CuprinsElement('3','Dezvoltarea efectiva a website-ului','#3'),
  new CuprinsElement('3.1','Testare','#3.1'),
  new CuprinsElement('3.2','Debug','#3.2'),
  new CuprinsElement('3.3','Optimizare','#3.3')
]
  
  
    return(<>
      <MainNav />
      <Container fluid>
      <h1>Creare Site Web</h1>
<Row>
  <Col className='sticky-lg-top' lg={3}><Cuprins active={false} list={cuprins} /></Col>
  <Col> <article>
       <h2>Procesul de Creare a unui site web</h2>


    
      <HeaderInFunctieDeCuprins {...cuprins[0]} />
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem rerum fugit, nostrum corrupti, esse perferendis eligendi optio quas odio fugiat autem ut repellat accusantium quaerat quis. Quo dolorum cumque in?</p>
      <HeaderInFunctieDeCuprins {...cuprins[1]} />
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur excepturi iusto itaque harum facere. Sequi nostrum deleniti est. Tempore ipsum quos odit cumque? Corporis veritatis, laudantium eos fugit nisi iste?</p>
      <HeaderInFunctieDeCuprins {...cuprins[2]} />
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur excepturi iusto itaque harum facere. Sequi nostrum deleniti est. Tempore ipsum quos odit cumque? Corporis veritatis, laudantium eos fugit nisi iste?</p>
      <HeaderInFunctieDeCuprins {...cuprins[3]} />
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur excepturi iusto itaque harum facere. Sequi nostrum deleniti est. Tempore ipsum quos odit cumque? Corporis veritatis, laudantium eos fugit nisi iste?</p>
      <HeaderInFunctieDeCuprins {...cuprins[4]} />
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur excepturi iusto itaque harum facere. Sequi nostrum deleniti est. Tempore ipsum quos odit cumque? Corporis veritatis, laudantium eos fugit nisi iste?</p>
      <HeaderInFunctieDeCuprins {...cuprins[5]} />
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur excepturi iusto itaque harum facere. Sequi nostrum deleniti est. Tempore ipsum quos odit cumque? Corporis veritatis, laudantium eos fugit nisi iste?</p>
      <HeaderInFunctieDeCuprins {...cuprins[6]} />
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur excepturi iusto itaque harum facere. Sequi nostrum deleniti est. Tempore ipsum quos odit cumque? Corporis veritatis, laudantium eos fugit nisi iste?</p>
      <HeaderInFunctieDeCuprins {...cuprins[7]} />
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur excepturi iusto itaque harum facere. Sequi nostrum deleniti est. Tempore ipsum quos odit cumque? Corporis veritatis, laudantium eos fugit nisi iste?</p>
      <HeaderInFunctieDeCuprins {...cuprins[8]} />
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur excepturi iusto itaque harum facere. Sequi nostrum deleniti est. Tempore ipsum quos odit cumque? Corporis veritatis, laudantium eos fugit nisi iste?</p>
     </article></Col>
  {/* <Col></Col> */}
</Row>
     

   
    
      </Container>
      {/* <WebsiteSvg /> */}






      <style jsx>{`
        
        
        `}</style>
    </>)
}

export default Page