
import 'bootstrap/dist/css/bootstrap.css'
import '../styles/globals.css'
import type { AppProps } from 'next/app'
import React from 'react'
import WhatsappSticky from '../components/Phone-only/stickyWhatsapp'

function MyApp({ Component, pageProps }: AppProps) {

  
  return (<div id={'particles-js'}>
  <Component {...pageProps} />  
  <WhatsappSticky />
 </div> )
}
export default MyApp
