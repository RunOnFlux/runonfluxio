import Head from 'next/head'
import Image from 'next/image'
import { MiningPage } from '../components/miningPage/miningPage'
import { NavBar } from '../components/navbar/navbar'
export default function Mining() {
  return (
    <div>
      <Head>
        <title>Flux | Mining</title>
        <meta name="description" content="official website of flux" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavBar/>
     <MiningPage/>
    </div>
  )
}