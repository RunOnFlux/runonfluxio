

import Head from 'next/head'
import '../styles/globals.css'
import React, { useEffect } from 'react';
import Layout from '../components/layout';
import 'bootstrap/dist/css/bootstrap.css';
import { SSRProvider } from 'react-bootstrap';



function MyApp({ Component, pageProps }) {
  
  useEffect(() => {
    import ('bootstrap/dist/js/bootstrap.js')
}, []);
   
  return (
    <>
    <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

    <React.Fragment>
       <SSRProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>  
      </SSRProvider>
    </React.Fragment>
    </>
  );
}

export default MyApp;
