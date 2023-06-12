import Head from 'next/head'
import Image from 'next/image'
import { DonatePage } from '../components/donatePage/donatePage'

export default function Donate() {
  return (
    <div>
      <Head>
        <title>Flux | Donate</title>
        <meta name="description" content="official website of flux" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
     <DonatePage/>
    </div>
  )
}