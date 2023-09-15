import Head from 'next/head'
import Image from 'next/image'
import { NavBar } from '../components/navbar/navbar.js'
import { PrivacyPage } from '../components/privacyPage/privacyPage.js'
export default function PrivacyPolicy() {
  return (
    <div>
      <Head>
        <title>Flux | Privacy Policy</title>
        <meta name="description" content="official website of flux" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavBar/>
    <PrivacyPage/>
    </div>
  )
}