import Head from 'next/head'
import Image from 'next/image'
import Script from 'next/script'
import { BlogPage } from '../components/blogPage/blogPage'
import { NavBar } from '../components/navbar/navbar'

export default function Blog() {
  return (
    <div>
      <Head>
        <title>Flux | Blog</title>
        <meta name="description" content="official website of flux" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Script src="https://www.googletagmanager.com/gtag/js?id=G-KTKEYE3YMN" />
        <Script id="google-analytics">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            
            gtag('config', 'G-KTKEYE3YMN');
            `}
        </Script>
       
      <NavBar/>
     <BlogPage/>
    </div>
  )
}