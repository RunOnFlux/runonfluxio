import Head from 'next/head'
import Image from 'next/image'
import { PartnersPage } from '../components/partnersPage/partnersPage'
import { NavBar } from '../components/navbar/navbar'
export default function Partners() {
  return (
    <div>
      <Head>
        <title>Flux | Partners</title>
        <meta name="description" content="official website of flux" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavBar/>
     <PartnersPage/>
    </div>
  )
}