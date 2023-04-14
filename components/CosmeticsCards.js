import Image from 'next/image'
import cosmeticStyles from '../styles/Cards.module.css'

export default function CosmeticsCards({ cosmetics, paginate }) {
    return (
        <div className={cosmeticStyles.grid}>
            {cosmetics?.slice(0, paginate).map(cosmetic =>
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
                    <p>{cosmetic.set?.text}</p>
                    <p>{cosmetic.introduction?.text}</p>
                    <p>Rarity: {cosmetic.rarity.value}</p>
                </div>
            )}
        </div>
    )
}