import React from 'react'
import MainNav from '../components/navbar/mainNav'
import FirstSection from '../components/FirstSection/FirstSection'
import FormularText from '../components/Formular+Text/Formular+Text'
import SecondSection from '../components/SecondSection/SecondSection'




export default function Home() {
  const texte =[
    'Afacerea ta online incepe cu un website modern',
    'Dezvoltare Website in cel mai scurt timp dupa nevoile tale ',
    'Optimizare Seo',
    'Seo on page',
    'Plan dedicat lunar pentru ca tu sa urci printre primele rezultate de cautare Google in cel mai scurt timp',
    'Monitorizarea traficului si a comportamentului utilizatorilor prin Google Analitycs',
    'Stabilire si implementare obiective in Google Analitycs',
    'Conectare cu Google Search Console',
  ]
    


  return (
    <>
   <MainNav />
   <FirstSection />
   <SecondSection />
 <FormularText text={texte}/>
 
   
  </>
  )
}
