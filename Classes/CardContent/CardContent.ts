import { ReactChild } from "react";

class CardContent{
    public title:string=''
    public text: string='';
    public SVG: ReactChild;
    
    public constructor(title:string, text:string, SVG:ReactChild) {
     this.title = title
     this.text= text
     this.SVG = SVG
  }
  }
  export default CardContent