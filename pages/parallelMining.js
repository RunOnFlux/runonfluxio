import Head from 'next/head'
import Image from 'next/image'
import { ParallelMiningPage } from '../components/parallelMiningPage/parallel'

export default function ParallelMining() {
  return (
    <div>
      <Head>
        <title>Flux | Parallel | Mining</title>
        <meta name="description" content="official website of flux" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
     <ParallelMiningPage/>
    </div>
  )
}