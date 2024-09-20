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
      <NavBar/>
     <BlogPage/>
    </div>
  )
}