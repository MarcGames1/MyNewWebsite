import Document, { Html, Head, Main, NextScript, DocumentContext } from 'next/document'
import React from 'react'

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
        <Html lang="ro">

        <Head>
       
        </Head>
        <body>
       
        <div id="fb-root"></div>
          <Main />
          <NextScript />
          <script type='text/javascript' async defer crossOrigin="anonymous" src="https://connect.facebook.net/ro_RO/sdk.js#xfbml=1&version=v11.0" nonce="CePegJKH"/> 
        </body>
      </Html>
    )
  }
}

export default MyDocument