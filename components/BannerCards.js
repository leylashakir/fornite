import Image from 'next/image'
import bannerStyles from '../styles/Cards.module.css'
import LoadNext from './LoadNext'
import LoadPrevious from './LoadPrevious'

export default function BannerCards({ banners, previousPage, currentPage, loadMore, loadPrevious }) {
  return (
    <div className={bannerStyles.viewCardContainer}>
      {previousPage != 0 ? <LoadPrevious loadPrevious={loadPrevious}/> : null}
      {banners.slice(previousPage, currentPage).map(banner =>
        <div className={bannerStyles.card} key={banner.id}>
          {banner.images.smallIcon &&
            <Image
              alt={banner.description}
              src={banner.images.smallIcon}
              width={100}
              height={100} />
          }
          <h2>{banner.devName}</h2>
          <p>{banner.description}</p>
        </div>
      )}
      <LoadNext loadMore={loadMore}/>
    </div>
  )
}