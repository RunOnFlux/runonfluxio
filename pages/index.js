
import Head from 'next/head'
import Image from 'next/image'
import { HomePage } from '../components/Homepage/homePage.js'
import { NavBar } from '../components/navbar/navbar.js'
export default function Home() {
  return (
    <div>
      <Head>
        <title>Flux | Home</title>
        <meta name="description" content="official website of flux" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavBar/>
      <HomePage/> 
    </div>
  )
}
