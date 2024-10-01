
import Head from 'next/head'
import { FluxMediaPage } from '../components/fluxMediaPage/fluxMediaPage.js'
import { NavBar0 } from '../components/navbar/mainNav.js'

export default function FluxMedia() {
  return (
    <div>
      <Head>
        <title>Flux | Decentralized Cloud Computing</title>
        <meta name="description" content="official website of flux" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavBar0/>
      <FluxMediaPage/> 
    </div>
  )
}
