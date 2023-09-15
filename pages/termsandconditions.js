import Head from 'next/head'
import Image from 'next/image'
import { NavBar } from '../components/navbar/navbar.js'
import { TermsAndConditionsPage } from '../components/termsandconditionsPage/terms&conditions.js'
export default function TermsAndConditions() {
  return (
    <div>
      <Head>
        <title>Flux | Terms & Conditions</title>
        <meta name="description" content="official website of flux" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavBar/>
    <TermsAndConditionsPage/>
    </div>
  )
}