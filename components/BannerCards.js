import Image from 'next/image'
import bannerStyles from '../styles/Cards.module.css'

export default function BannerCards({ banners, paginate }) {
  return (
    <div className={bannerStyles.grid}>
      {banners.slice(0, paginate).map(banner =>
        <div className={bannerStyles.card} key={banner.id}>
          {banner.images.smallIcon &&
            <Image
              alt={banner.description}
              src={banner.images.smallIcon}
              width={100}
              height={100} />
          }
          <h2>{banner.devName}</h2>
        </div>
      )}
    </div>
  )
}