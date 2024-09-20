
import Head from 'next/head'
import Image from 'next/image'
import Script from 'next/script'
import { FluxArticlePage } from '../components/fluxArticlePage/fluxArticlePAge.js'
import { NavBar0 } from '../components/navbar/mainNav.js'



export default function FluxArticle() {
  return (
    <div>      
      <Head>
        <title>Flux | Decentralized Cloud Computing</title>
        <meta name="description" content="official website of flux" />
        <link rel="icon" href="/favicon.ico" />
      </Head>       
      <NavBar0/>
      <FluxArticlePage/>     
    </div>
  )
}
