import { ReactChild } from "react";
import CardContent from "./CardContent";

class DeCE extends CardContent{

 
    public constructor(title:string, text:string, SVG:ReactChild) {
        super(title ,text, SVG);
     this.title = title
     this.text= text
     this.SVG = SVG
  }
    
  }
  export default DeCE