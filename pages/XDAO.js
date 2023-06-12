import Head from 'next/head'
import Image from 'next/image'
import { XDAOPage } from '../components/xdaoPage/xdaoPage'

export default function XDAO() {
  return (
    <div>
      <Head>
        <title>Flux | Flux | XDAO</title>
        <meta name="description" content="official website of flux" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
     <XDAOPage/>
    </div>
  )
}