import Head from 'next/head'
import Image from 'next/image'
import { Social } from '../components/socials/social.js'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Flux | Socials</title>
        <meta name="description" content="official website of flux" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Social/> 
    </div>
  )
}
