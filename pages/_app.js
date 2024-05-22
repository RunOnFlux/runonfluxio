

import Head from 'next/head'
import '../styles/globals.css'
import React, { useEffect, useState } from 'react';
import Layout from '../components/layout';
import 'bootstrap/dist/css/bootstrap.css';
import { SSRProvider } from 'react-bootstrap';
import { BreakpointProvider } from 'react-socks';
import ThemeToggle from '../components/themeToggle/ThemeToggle';

function MyApp({ Component, pageProps }) {
  
  useEffect(() => {
    import ('bootstrap/dist/js/bootstrap.js')
}, []);

const [showChild, setShowChild] = useState(false)

  useEffect(() => {
    setShowChild(true)
  }, [])

  if (!showChild) {
    return null
  }
   
  return (
    <>
    <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content="Flux Web3 Cloud" />
        <meta property="og:description" content="The Flux Ecosystem is a suite of decentralized computing services and blockchain-as-a-service solutions." />
        <meta property="og:image" content="https://www.runonflux.io/_next/static/media/Flux_white_logo.0150b7f6.svg" />
        <meta property="og:url" content="https://runonflux.io" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="https://www.runonflux.io/_next/static/media/Flux_white_logo.0150b7f6.svg" />
        <meta name="twitter:title" content="Flux Web3 Cloud" />
        <meta name="twitter:description" content="The Flux Ecosystem is a suite of decentralized computing services and blockchain-as-a-service solutions." />
        <meta name="twitter:image" content="https://www.runonflux.io/_next/static/media/Flux_white_logo.0150b7f6.svg" />
        <meta name="twitter:url" content="https://twitter.com/runonflux?s=21&t=Apmhzi-5t3IhlOFLmqTrPw" />
      </Head>

    <React.Fragment>
       <SSRProvider>
      <Layout>
      <BreakpointProvider>
      <ThemeToggle />
      <Component {...pageProps} />
    
      
        </BreakpointProvider>
      </Layout>  
      </SSRProvider>
    </React.Fragment>
    </>
  );
}

export default MyApp;
