import { NextSeo } from 'next-seo'
import React from 'react'
import FirstSection from '../components/FirstSection/FirstSection'
import FormularText from '../components/Formular+Text/Formular+Text'
import SecondSection from '../components/SecondSection/SecondSection'
import styles from '../styles/Home.module.css'



export default function Home() {
  const texte =[
    'Afacerea ta online incepe cu un website modern',
    'Dezvoltare Website in cel mai scurt timp dupa nevoile tale ',
    'Optimizare Seo',
    'Seo on page',
    'Plan dedicat lunar pentru ca tu sa urci printre primele rezultate de cautare Google in cel mai scurt timp',
    'Monitorizarea traficului si a comportamentului utilizatorilor prin Google Analytics',
    'Stabilire si implementare obiective in Google Analitycs',
    'Conectare cu Google Search Console',
  ]
    
const title ='Webdesigner ✔️ Web Developer ✔️ Specialist SEO'
const description = 'Adu-ti afacerea pe prima pagina in Google cu strategii care dau rezultate pe termen lung  ✅ Servicii de Webdesign ✅ Creare Siteuri ✅ SEO ✅'

  return (
    <div className={styles.Home}>
   <NextSeo title = {title} description ={description}/>
   <FirstSection />
   <SecondSection />
 <FormularText text={texte}/>

   <style global jsx>{`
   :root{
    --background-image-main: url(/img/background/background3.jpg);
}

html, body{
  background-image: var(--background-image-main);
  background-blend-mode:soft-light ;
  background-attachment: fixed;
  background-color:rgba(255, 255, 255, 0.74);
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
}
     `}</style>
  </div>
  )
}
