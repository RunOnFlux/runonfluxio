
import Head from 'next/head'
import { FluxMediaPage } from '../components/fluxMediaPage/fluxMediaPage.js'
import { NavBar0 } from '../components/navbar/mainNav.js'
import client from '../utils/contentfulClient.js'

export default function FluxMedia({contentfulData}) {
  return (
    <div>
      <Head>
        <title>Flux | Decentralized Cloud Computing</title>
        <meta name="description" content="official website of flux" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavBar0/>
      <FluxMediaPage contentfulData={contentfulData}/> 
    </div>
  )
}

export async function getStaticProps() {
  let contentfulData = [];

  if (client) {
    const data = await client.getEntries({
      content_type: 'bannerNewsArticle',
      limit: 6,
      order: 'sys.createdAt',
      select: ['fields.description', 'fields.articleImage', 'fields.articleLogo', 'fields.link']
    });

    data?.items.forEach(item => {
      const newsArticles = {
        text: item.fields.description,
        backgroundImage: `https:${item.fields.articleImage.fields.file.url}`,
        logo: `https:${item.fields.articleLogo.fields.file.url}`,
        link: item.fields.link ?? "#"
      }
      contentfulData.push(newsArticles);
    });
  }

  return {
    props: {
      contentfulData
    },
    revalidate: 60
  }
}