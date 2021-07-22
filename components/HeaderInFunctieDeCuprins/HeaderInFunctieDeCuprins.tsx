import React from "react"

import CuprinsElement from "../../Classes/CuprinsElement"


const HeaderInFunctieDeCuprins=(props: CuprinsElement)=>{

if(props.number.length === 3){
    return(<h4 id={props.number}>{props.name.toUpperCase()}</h4>)
}

else{
    return(<h3 id={props.number}>{props.name.toUpperCase()}</h3>)
}
 
}

export default HeaderInFunctieDeCuprins

