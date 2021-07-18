import React from "react"
import { Jumbotron, Button } from "react-bootstrap"

const MainJumbotron = () =>{

    return (<>
    
    

    <div className=' btn-lg'>
      <Jumbotron >
        <h1 className="animate__animated animate__bounceInRight display-3">Marcu Alexandru</h1>
        <p className="animate__animated animate__bounceInLeft h2 main">Web Developer si specialist Seo</p>
        <hr className="my-2" />
        <p className='animate__animated animate__bounceInRight' >Afla cum te pot ajuta sa iti cresti afacerea in mediul online</p>
       
          <Button className='animate__animated animate__bounceInLeft' href='#' color="primary">Citeste mai mult</Button>
       
      </Jumbotron>
    </div>

    <style jsx>{`
      
      {/* background-color:black; */}
      
      `}</style>
    </>)
}

export default MainJumbotron