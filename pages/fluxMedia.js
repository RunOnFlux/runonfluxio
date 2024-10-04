
import Head from 'next/head'
import { FluxMediaPage } from '../components/fluxMediaPage/fluxMediaPage.js'
import { NavBar0 } from '../components/navbar/mainNav.js'
import client from '../utils/contentfulClient.js'

export default function FluxMedia({contentfulData, lowerArticles, awardsData}) {
  return (
    <div>
      <Head>
        <title>Flux | Decentralized Cloud Computing</title>
        <meta name="description" content="official website of flux" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavBar0/>
      <FluxMediaPage contentfulData={contentfulData} lowerArticles={lowerArticles} awardsData={awardsData}/> 
    </div>
  )
}

export async function getStaticProps() {
  let contentfulData = [];
  let lowerArticles = [];
  let awardsData = [];

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

    const awards = await client.getEntries({
      content_type: 'medigaPageAwards',
      limit: 5,
      order: 'sys.createdAt',
      select: ['fields.awardImage']
    });
    awards?.items.forEach(item => {
      const awards = {
        backgroundImage: `https:${item.fields.awardImage.fields.file.url}`,
      }
      awardsData.push(awards);
    })

    const lowerData = await client.getEntries({
      content_type: 'mediaPageArticleLower',
      limit: 15,
      order: 'sys.createdAt',
      select: ['fields.description', 'fields.articleImage', 'fields.articleLogo', 'fields.link']
    });

    lowerData?.items.forEach(item => {
      const lowerArticle = {
        text: item.fields.description,
        backgroundImage: `https:${item.fields.articleImage.fields.file.url}`,
        logo: `https:${item.fields.articleLogo.fields.file.url}`,
        link: item.fields.link ?? "#"
      }
      lowerArticles.push(lowerArticle);
    })
  }

  return {
    props: {
      contentfulData,
      lowerArticles,
      awardsData
    },
    revalidate: 1800
  }
}