import Head from 'next/head'
import Image from 'next/image'
import { Careers } from '../components/ careersPage/careersPage'

export default function Career() {
  return (
    <div>
      <Head>
        <title>Flux | Careers</title>
        <meta name="description" content="official website of flux" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
     <Careers/>
    </div>
  )
}