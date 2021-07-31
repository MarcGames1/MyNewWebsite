import Head from 'next/head';
import 'bootstrap/dist/css/bootstrap.css'
import '../styles/globals.css'
import type { AppProps } from 'next/app'
import ConsoleMessage from '../scripts/console'
import React from 'react'
import WhatsappSticky from '../components/Phone-only/stickyWhatsapp'
import MainNav from '../components/navbar/mainNav'
import Footer from '../components/Footer/Footer'

function MyApp({ Component, pageProps }: AppProps) {
ConsoleMessage()
  return (<>

    <Head>
  <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
    />
</Head>
  <MainNav />
  <Component {...pageProps} />  
  <WhatsappSticky />
   
 

 </> )
}
export default MyApp
