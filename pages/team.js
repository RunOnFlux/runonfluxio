import Head from 'next/head'
import Image from 'next/image'
import Script from 'next/script'
import { TeamPage } from '../components/teamPage/teamPage'
import { NavBar } from '../components/navbar/navbar'

export default function Team() {
  return (
    <div>
      <Head>
        <title>Flux | Team</title>
        <meta name="description" content="official website of flux" />
        <link rel="icon" href="/favicon.ico" />
      </Head>    
      <NavBar/>
     <TeamPage/>
    </div>
  )
}