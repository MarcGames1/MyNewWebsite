
import 'bootstrap/dist/css/bootstrap.css'
import '../styles/globals.css'
import type { AppProps } from 'next/app'

import React from 'react'
import WhatsappSticky from '../components/Phone-only/stickyWhatsapp'

function MyApp({ Component, pageProps }: AppProps) {

  
  return (<div id={'particles-js'}>
    <head>
  <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
  />
</head>
  <Component {...pageProps} />  
  <WhatsappSticky />
 </div> )
}
export default MyApp
