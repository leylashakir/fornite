import Head from 'next/head'
import BannerCards from '@/components/BannerCards'
import PageBottomNav from '@/components/PageBottomNav';
import { useState } from 'react';

export default function Banners({ banners }) {
  const itemsShownOnPage = 6
  const [currentPage, setCurrentPage] = useState(itemsShownOnPage);

  function loadMore() {
    setCurrentPage((prevPage) => prevPage + itemsShownOnPage)
  }

  return (
    <>
      <Head>
        <title>Banners</title>
      </Head>
      <BannerCards banners={banners} paginate={currentPage} />
      <PageBottomNav loadMore={loadMore} />
    </>
  )
}

export const getStaticProps = async () => {
  const res = await fetch(`https://fortnite-api.com/v1/banners`)
  const data = await res.json()
  const banners = data.data

  return {
    props: {
      banners
    }
  }
}