
import 'bootstrap/dist/css/bootstrap.css'
import '../styles/globals.css'
import type { AppProps } from 'next/app'
import React from 'react'
import WhatsappSticky from '../components/Phone-only/stickyWhatsapp'

function MyApp({ Component, pageProps }: AppProps) {
  return (<>
  <Component {...pageProps} />  
  <WhatsappSticky />
 </> )
}
export default MyApp
