import Image from 'next/image'
import cosmeticStyles from '../styles/Cards.module.css'
import LoadNext from './LoadNext'
import LoadPrevious from './LoadPrevious'

export default function CosmeticsCards({ cosmetics, previousPage, currentPage, loadMore, loadPrevious }) {
    return (
        <div className={cosmeticStyles.viewCardContainer}>
            {previousPage != 0 ? <LoadPrevious loadPrevious={loadPrevious}/> : ''}
            {cosmetics?.slice(previousPage, currentPage).map(cosmetic =>
                <div className={cosmeticStyles.card} key={cosmetic.id}>
                    {cosmetic.images.smallIcon &&
                        <Image
                            alt={cosmetic.name}
                            src={cosmetic.images.icon}
                            width={100}
                            height={100}
                        />
                    }
                    <h2>{cosmetic.name}</h2>
                    <p>{cosmetic.description}</p>
                    <p>Type: {cosmetic.type.displayValue}</p>
                    <p>{cosmetic.set?.text}</p>
                    <p>{cosmetic.introduction?.text}</p>
                    <p>Rarity: {cosmetic.rarity.displayValue}</p>
                </div>
            )}
            <LoadNext loadMore={loadMore}/>
        </div>
    )
}