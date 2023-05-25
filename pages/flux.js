import Head from 'next/head'
import { Flux } from '../components/fluxCoin/fluxpage.js'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Flux | Cryptocurency</title>
        <meta name="description" content="official website of flux" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Flux/> 
    </div>
  )
}
