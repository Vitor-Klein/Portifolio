import Document, {Html, Head, Main, NextScript}from 'next/document';

export default class MyDocument extends Document {
  render(){
    return(
      <Html>
        <Head>
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link href="https://fonts.googleapis.com/css2?family=Inter&family=Lexend:wght@500;600&display=swap" rel="stylesheet"/>
          <link rel="icon" href="/favicon.ico"/>
          <meta name="title" content="Vitor Hugo Klein" />
          <meta name="description" content="meu portfólio pessoal, espero que gostem :)" />

          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://vitor-klein.vercel.app/" />
          <meta property="og:title" content="Vitor Hugo Klein" />
          <meta property="og:description" content="meu portfólio pessoal, espero que gostem :)" />
          <meta property="og:image" content="" />

          <meta property="twitter:card" content="summary_large_image" />
          <meta property="twitter:url" content="https://vitor-klein.vercel.app/" />
          <meta property="twitter:title" content="Vitor Hugo Klein" />
          <meta property="twitter:description" content="meu portfólio pessoal, espero que gostem :)" />
          <meta property="twitter:image" content="" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
