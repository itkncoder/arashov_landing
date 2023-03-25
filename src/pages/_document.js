import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta http-equiv="Content-Type" content="text/html;charset=UTF-8" />
        <link rel="shortcut icon" href="/Logo.png" type="image/x-icon" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}