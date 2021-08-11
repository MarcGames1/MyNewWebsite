import Entry from "./entry"

class Portofoliu extends Entry{
 
    public link:string='' 
    public imglocation:string=''
    public serviciiList=['']

    constructor(name:string, description:string, link:string, imglocation:string, serviciiList:string[]){
        super(name, description)
        this.name = name
        this.description=description
        this.link = link
        this.imglocation=imglocation
        this.serviciiList = serviciiList

    }

}

export default Portofoliu