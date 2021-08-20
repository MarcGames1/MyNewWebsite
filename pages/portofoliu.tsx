
import React from "react"
import Portofoliu from "../Classes/entry/portofoliu"
import PortofoliuElement from "../components/PortofoliuElement/PortofoliuElement"


function PortofoliuPage() {
const doruBotea = new Portofoliu('Avocat Doru Botea',
 '',
  'https://www.avocatdorubotea.ro/',
   "img/portofoliu/doru/dorubotea.png",
   [
       'Realizare Web Design unicat dupa cerintele clientului',
        'Design 100% responsive',
         'Cercetare de cuvinte cheie',
          'Adaptarea elementelor meta titlu, meta descriere, heading in functie de volumul de cautare pentru a atrage cat mai mult trafic organic',
           'Realizare structura continut pentru sectiunea de blog',
           'Conectare Servicii Google (Google Analitycs, Google Search Console, Tag Manager etc)',
            'Adaugare Obiective prin Google Tag Manager si urmarirea conversiilor prin Google Analitycs ',
            'Rapoarte personalizate periodice din Google Analitycs adaptate domeniului de activitate',
             'Administrare cont Google my Buisness',
              'Campanii Google Ads' ])


    return(<>
   <PortofoliuElement {...doruBotea} />
    </>)
}


export default PortofoliuPage