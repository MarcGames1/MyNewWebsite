import React, { useState } from "react"

import { Button, ButtonGroup, Col, ToggleButton } from "react-bootstrap"
import Facebook from "./facebook"
import Mail from './mail'
import Whatsapp from './whatsapp'


// export type Color = '#FFFFFF' 
// export type Height = '50px'
// export type Url ='www.facebook.com'




 function SocialMedia (props: {
     col_md: number
   })
  
  {



    
    const [color, setColor] = useState('#ffffff8c')

    const changeColor=(color: string)=>{
      setColor(color)
    }


    let height :string = '30px' 
   
    let FacebookUrl :string = 'www.facebook.com'
    let whatsappUrl :string ='https://wa.me/+40751606444'
   
   
    return(
      <>
      
<Col md={props.col_md} className='justify-content-between'>

  <ButtonGroup>
  <Button variant={'dark'}>    
  <Mail color = {color} height={height} />
  </Button>
  <Button variant={'dark'}>    
  <Facebook color = {color} height={height} url={FacebookUrl}/>
  </Button>
  <Button variant={'dark'}> 
  <Whatsapp  color = {color} height={height} url={whatsappUrl}/>
  </Button>
  </ButtonGroup>
  </Col>


   
  <style >{`
   .icon{
   
    margin:0;
    padding:0;
    }
    `}
  </style>
        </>
 
    )
}







export default SocialMedia

function setChecked(checked: boolean): void {
  throw new Error("Function not implemented.")
}
