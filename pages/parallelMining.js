import Head from 'next/head'
import Image from 'next/image'
import Script from 'next/script'
import { ParallelMiningPage } from '../components/parallelMiningPage/parallel'
import { NavBar } from '../components/navbar/navbar'

export default function ParallelMining() {
  return (
    <div>
      <Head>
        <title>Flux | Parallel | Mining</title>
        <meta name="description" content="official website of flux" />
        <link rel="icon" href="/favicon.ico" />
      </Head>   
      <NavBar/>
     <ParallelMiningPage/>
    </div>
  )
}