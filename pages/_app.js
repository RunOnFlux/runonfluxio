

import Head from 'next/head'
import '../styles/globals.css'
import React, { useEffect, useState } from 'react';
import Layout from '../components/layout';
import 'bootstrap/dist/css/bootstrap.css';
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
        <meta property="og:image" content="https://www.runonflux.com/_next/static/media/Flux_white_logo.0150b7f6.svg" />
        <meta property="og:url" content="https://runonflux.com" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="https://www.runonflux.com/_next/static/media/Flux_white_logo.0150b7f6.svg" />
        <meta name="twitter:title" content="Flux Web3 Cloud" />
        <meta name="twitter:description" content="The Flux Ecosystem is a suite of decentralized computing services and blockchain-as-a-service solutions." />
        <meta name="twitter:image" content="https://www.runonflux.com/_next/static/media/Flux_white_logo.0150b7f6.svg" />
        <meta name="twitter:url" content="https://twitter.com/runonflux?s=21&t=Apmhzi-5t3IhlOFLmqTrPw" />
        <meta name="google-site-verification" content="1Rvzs9I7j6QqrWM5HTgAokIW_MXzqtvdCkGE1fn30yw" />
      </Head>

      <React.Fragment>
        <Layout>
          <BreakpointProvider>
            <ThemeToggle />
            <Component {...pageProps} />
          </BreakpointProvider>
        </Layout>
      </React.Fragment>
    </>
  );
}

export default MyApp;
