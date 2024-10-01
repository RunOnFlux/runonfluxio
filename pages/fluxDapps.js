import Head from 'next/head'
import Image from 'next/image'
import Script from 'next/script'
import { FluxDappsPage } from '../components/fluxDapps/fluxDappsPage'
import { NavBar } from '../components/navbar/navbar'

export default function Dapps() {
  return (
    <div>
      <Head>
        <title>Flux | Flux-Dapps</title>
        <meta name="description" content="official website of flux" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavBar/>
     <FluxDappsPage/>
    </div>
  )
}