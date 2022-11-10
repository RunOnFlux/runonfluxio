
import '../styles/globals.css'
import React, { useEffect } from 'react';
import Layout from '../components/layout';
import 'bootstrap/dist/css/bootstrap.css';

function MyApp({ Component, pageProps }) {


  useEffect(() => {
    import ('bootstrap/dist/js/bootstrap.js')
}, []);



  return (
    <React.Fragment>
      <Layout>
        <Component {...pageProps} />
      </Layout>  
    </React.Fragment>
 
  )
}

export default MyApp;
