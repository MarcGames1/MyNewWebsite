import React from "react"
import { Col } from "react-bootstrap"
import Facebook from "./facebook"
import Mail from './mail'



export type Color = '#FFFFFF' 
export type Height = '50px'
export type Url ='www.facebook.com'




 const SocialMedia = (props: {
   
  col_md:  number | boolean | { span?: (boolean | "auto" | (number | "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | "10" | "11" | "12")) | undefined; offset?: (number | "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | "10" | "11" | "12") | undefined; order?: ((number | "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | "10" | "11" | "12") | "first" | "last") | undefined } | undefined }) =>{




let color : string = '#FFFFFF' as Color
let height :string = '50px' as Height
let url :string = 'www.facebook.com'
    return(
      <>
<Col md={props.col_md} className='d-inline-flex justify-content-between'>
   
  <Mail color = {color} height={height} />
  <Facebook color = {color} height={height} url={url}/>
  <Facebook  color = {color} height={height} url={url}/>
  </Col>


   
  <style >{`
    #__next{
    background-color:black;
    }
    `}
  </style>
        </>
 
    )
}


export default SocialMedia