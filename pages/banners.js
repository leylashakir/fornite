import Head from 'next/head'
import BannerCards from '@/components/BannerCards'
import containerStyles from '../styles/Cards.module.css'
import { useState } from 'react';

export default function Banners({ banners }) {
  const itemsShownOnPage = 2
    const [currentPage, setCurrentPage] = useState(itemsShownOnPage);
    const [previousPage, setPreviousPage] = useState(0);

    function loadMore() {
        setPreviousPage(currentPage);
        setCurrentPage((prevPage) => prevPage + itemsShownOnPage)
    }

    function loadPrevious() {
        setPreviousPage((currPage) => currPage - itemsShownOnPage)
        setCurrentPage((prevPage) => prevPage - itemsShownOnPage)
    }

  return (
    <>
      <Head>
        <title>Banners</title>
      </Head>
      <div className={containerStyles.mainContainer}>
        <BannerCards 
          banners={banners} 
          currentPage={currentPage} 
          previousPage={previousPage} 
          loadMore={loadMore} 
          loadPrevious={loadPrevious} 
        />
      </div>
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