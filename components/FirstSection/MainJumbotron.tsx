import React from "react"
import {Button } from "react-bootstrap"
import styles from 'MainJumbotron.module.css'

const MainJumbotron = () =>{

    return (<>
    
    

    <div className=' btn-lg'>
      <div >
        <h1 className="animate__animated animate__bounceInRight display-3">Marcu Alexandru</h1>
        <p className="animate__animated animate__bounceInLeft h2 main">Web Developer si Specialist Seo</p>
        <hr className="my-2" />
        <p className='animate__animated animate__bounceInRight' >Afla cum te pot ajuta sa iti cresti afacerea in mediul online</p>
       
          <Button className='rounded animate__animated animate__bounceInLeft' 
          id='hero'
          href='#serviceMainBlock' ><span className='btn-text'>Citeste mai mult</span></Button>
       
      </div>
    </div>

    <style global jsx>{`
      
    #hero{
      font-size:1.5rem;
    }
  #hero::before {
  transition: all 0.85s cubic-bezier(0.68, -0.55, 0.265, 1.55);
  content: "";
  width: 50%;
  height: 100%;
  background: var(--bs-cyan) !important;
  position: absolute;
  top: 0;
  left: 0;
}
#hero .btn-text {
  color: white !important;
  mix-blend-mode: screen;
}
#hero:hover::before {
  background: #dc7300;
  width: 100%;
}
.rounded  {
  border-radius: 50px !important;
}

.rounded::before {
  border-radius: 50px !important;
  width: 25%;
  background: #00F0B5 !important;
}
.rounded:hover::before {
  background: #00F0B5;
  width: 100%;
}

      `}</style>
    </>)
}

export default MainJumbotron