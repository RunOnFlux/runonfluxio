import Head from 'next/head'
import Image from 'next/image'
import { FluxCarbonPage } from '../components/fluxCarbonPage/fluxCarbonPage'
import { NavBar2 } from '../components/navbar/navbar2'
export default function FluxCarbon() {
  return (
    <div>
      <Head>
        <title>Flux | FluxCarbon</title>
        <meta name="description" content="official website of flux" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavBar2/>
     <FluxCarbonPage/>
    </div>
  )
}