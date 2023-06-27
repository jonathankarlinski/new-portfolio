import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="pt-br">
       <Head>
        <meta name="description" content="Meu portfolio" />
        <link rel="icon" href="/iconPortifolio.png" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
