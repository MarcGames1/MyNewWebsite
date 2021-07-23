import { ReactChild } from "react";

class DeCE{
    public title:string=''
    public text: string='';
    public SVG: ReactChild;
    
    public constructor(title:string, text:string, SVG:ReactChild) {
     this.title = title
     this.text= text
     this.SVG = SVG
  }
  }
  export default DeCE