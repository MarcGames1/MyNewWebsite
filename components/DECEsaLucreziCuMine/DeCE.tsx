import DeCEClass from "../../Classes/CardContent/DECE"
import CalitateSVG from "../SVG.components/Calitate"
import CreativitateSVG from "../SVG.components/Creativitate"
import EficientaSVG from "../SVG.components/Eficienta"
import PretSVG from "../SVG.components/Pret"
import DeceCard from "./DeceCard"


const DeCe = ()=>{
let svgColor:string='#0d6efd'
const creativitate = new DeCEClass('Creativitate', 'Creem impreuna: ideile tale si conceptul si experienta mea. Vei avea parte de expertiza profesionala in creeare de site web, astfel incat tu sa ai cele mai bune optiuni pentru proiectul tau.',<CreativitateSVG height={80} color={svgColor} />)
const eficienta = new DeCEClass ('Eficienta','Fiecare proiect este o prioritate pentru mine. In plus, reprezinta o oportunitate de a demonstra ca vei avea servicii de o calitate inalta. Cum? Prin comunicare eficienta si rapida, rezultatul livrat este intotdeauna pe masura asteptarilor.',<EficientaSVG height={80} color={svgColor} /> )  
const calitate = new DeCEClass ('Calitate', 'In fiecare proiect, implicarea mea este 100%. Nu fac niciun fel de compromis in ceea ce priveste calitatea serviciilor si sfaturilor pe care ti le ofer, performanta fiecarui site web creat de mine este o garantie a acestui lucru. ', <CalitateSVG height={80} color={svgColor} /> )  
const pret = new DeCEClass('Pret', 'Cred in calitate, dar si in preturi corecte pentru aceasta.Poti avea garantia unui produs de inalta calitate, la un pret raportat corect.', <PretSVG height={80} color={svgColor} />)   
   
   
   
   
   return(<>
<DeceCard {...creativitate} />
<DeceCard {...eficienta} />
<DeceCard {...calitate} />
<DeceCard {...pret} />
    </>)
}

export default DeCe