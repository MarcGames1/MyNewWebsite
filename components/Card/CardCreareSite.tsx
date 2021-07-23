// <HeaderInFunctieDeCuprins {...cuprins[0]} />
// <div className="d-flex justify-content-center">
// <Sketch height={150} />
// </div>
// <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem rerum fugit, nostrum corrupti, esse perferendis eligendi optio quas odio fugiat autem ut repellat accusantium quaerat quis. Quo dolorum cumque in?</p>

import React, { ReactChild } from "react"
import CuprinsElement from "../../Classes/CuprinsElement"
import HeaderInFunctieDeCuprins from "../HeaderInFunctieDeCuprins/HeaderInFunctieDeCuprins"

const CardCreareSite = (props: { child: ReactChild; cuprins:CuprinsElement; }) =>{

    return(<> 
    <HeaderInFunctieDeCuprins {...props.cuprins} />
    <div className="d-flex justify-content-center">
    {props.child}
    </div>
    <p>{props.cuprins.text}</p>

    
    </>)
}

export default CardCreareSite