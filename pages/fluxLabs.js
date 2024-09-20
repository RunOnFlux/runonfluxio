import Head from 'next/head'
import Image from 'next/image'
import Script from 'next/script'
import { FluxLabsPage } from '../components/fluxLabsPage/fluxLabsPage'
import { NavBar1 } from '../components/navbar/navbar1'
export default function FluxLabs() {
  return (
    <div>
      <Head>
        <title>Flux | FluxLabs</title>
        <meta name="description" content="official website of flux" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavBar1/>
     <FluxLabsPage/>
    </div>
  )
}