import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta http-equiv="Content-Type" content="text/html;charset=UTF-8" />
        <link rel="shortcut icon" href="/Logo.png" type="image/x-icon" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.1/css/all.min.css"/>
      </Head>
      <body>

        <Main />
        <NextScript />

        {/* <script type="text/javascript" src="https://files.coinmarketcap.com/static/widget/coinMarquee.js"></script>
        <div id="coinmarketcap-widget-marquee" coins="1,825,1027,1839,74,52,3408,2" currency="USD" theme="dark" transparent="false" show-symbol-logo="true"></div> */}
      </body>
    </Html>
  )
}