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



function Page() {

  

  let cuprins = [

    new CuprinsElement('1', 'Reprezentarea vizuala a websiteului', '#1'),
    new CuprinsElement('1.1', 'MoodBord', '#1.1'),
    new CuprinsElement('1.2', 'Wireframe', '#1.2'),
    new CuprinsElement('1.3', 'mockup', '#1.3'),
    new CuprinsElement('2', 'Pregatirea resurselor pentru web', '#2'),
    new CuprinsElement('3', 'Dezvoltarea efectiva a website-ului', '#3'),
    new CuprinsElement('3.1', 'Testare', '#3.1'),
    new CuprinsElement('3.2', 'Debug', '#3.2'),
    new CuprinsElement('3.3', 'Optimizare', '#3.3'),
    new CuprinsElement('4', 'De ce sa lucrezi cu mine', '#4')
  ]

  const beneficii = [
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit nam, magni natus repellendus quod dolore expedita provident at quas fuga, officiis quasi qui ratione atque rerum! Mollitia hic maiores ducimus.',
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit nam, magni natus repellendus quod dolore expedita provident at quas fuga, officiis quasi qui ratione atque rerum! Mollitia hic maiores ducimus.',
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit nam, magni natus repellendus quod dolore expedita provident at quas fuga, officiis quasi qui ratione atque rerum! Mollitia hic maiores ducimus.',

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
          <HeaderInFunctieDeCuprins {...cuprins[0]} />
          <div className="d-flex justify-content-center">
          <Sketch height={150} />
          </div>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem rerum fugit, nostrum corrupti, esse perferendis eligendi optio quas odio fugiat autem ut repellat accusantium quaerat quis. Quo dolorum cumque in?</p>

{/* MoodBoard */}
          <HeaderInFunctieDeCuprins {...cuprins[1]} />
          <div className="d-flex justify-content-center">
          <MoodBoard height={150} />
          </div>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur excepturi iusto itaque harum facere. Sequi nostrum deleniti est. Tempore ipsum quos odit cumque? Corporis veritatis, laudantium eos fugit nisi iste?</p>

{/* Wireframe */}
          <HeaderInFunctieDeCuprins {...cuprins[2]} />
          <div className="d-flex justify-content-center">
          <Wireframe height={150} />
          </div>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur excepturi iusto itaque harum facere. Sequi nostrum deleniti est. Tempore ipsum quos odit cumque? Corporis veritatis, laudantium eos fugit nisi iste?</p>

{/* Mockup */}
          <HeaderInFunctieDeCuprins {...cuprins[3]} />
          <div className="d-flex justify-content-center">
          <Mockup height={150} />
          </div>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur excepturi iusto itaque harum facere. Sequi nostrum deleniti est. Tempore ipsum quos odit cumque? Corporis veritatis, laudantium eos fugit nisi iste?</p>
         
         
          <HeaderInFunctieDeCuprins {...cuprins[4]} />
          <div className="d-flex justify-content-center">
          <MoodBoard height={150} />
          </div>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur excepturi iusto itaque harum facere. Sequi nostrum deleniti est. Tempore ipsum quos odit cumque? Corporis veritatis, laudantium eos fugit nisi iste?</p>



          <HeaderInFunctieDeCuprins {...cuprins[5]} />
          <div className="d-flex justify-content-center">
          <MoodBoard height={150} />
          </div>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur excepturi iusto itaque harum facere. Sequi nostrum deleniti est. Tempore ipsum quos odit cumque? Corporis veritatis, laudantium eos fugit nisi iste?</p>

          
          <HeaderInFunctieDeCuprins {...cuprins[6]} />
          <div className="d-flex justify-content-center">
          <MoodBoard height={150} />
          </div>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur excepturi iusto itaque harum facere. Sequi nostrum deleniti est. Tempore ipsum quos odit cumque? Corporis veritatis, laudantium eos fugit nisi iste?</p>


          <HeaderInFunctieDeCuprins {...cuprins[7]} />
           <div className="d-flex justify-content-center">
          <MoodBoard height={150} />
          </div>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur excepturi iusto itaque harum facere. Sequi nostrum deleniti est. Tempore ipsum quos odit cumque? Corporis veritatis, laudantium eos fugit nisi iste?</p>
          
          
          <HeaderInFunctieDeCuprins {...cuprins[8]} />
          <div className="d-flex justify-content-center">
          <MoodBoard height={150} />
          </div>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur excepturi iusto itaque harum facere. Sequi nostrum deleniti est. Tempore ipsum quos odit cumque? Corporis veritatis, laudantium eos fugit nisi iste?</p>
          
          
          
          <HeaderInFunctieDeCuprins {...cuprins[9]} />

         < DeCeForm />

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