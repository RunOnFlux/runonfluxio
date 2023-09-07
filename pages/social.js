import Head from 'next/head'
import Image from 'next/image'
import { Social } from '../components/socials/social.js'
import { NavBar } from '../components/navbar/navbar.js'
export default function Home() {
  return (
    <div>
      <Head>
        <title>Flux | Socials</title>
        <meta name="description" content="official website of flux" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavBar/>
      <Social/> 
    </div>
  )
}
