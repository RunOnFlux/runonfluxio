import Head from 'next/head'
import Image from 'next/image'
import {BugBountyProgramPage} from '../components/bugBountyProgramPage/bugBountyProgramPage'
import { NavBar } from '../components/navbar/navbar'
export default function BugBountyProgram() {
  return (
    <div>
      <Head>
        <title>Flux | Bug-Bounty-Program</title>
        <meta name="description" content="official website of flux" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavBar/>
     <BugBountyProgramPage/>
    </div>
  )
}