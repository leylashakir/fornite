import Head from 'next/head'
import CosmeticsFilter from '@/components/CosmeticsFilter';

export default function Cosmetics({ cosmetics }) {
    return (
        <>
            <Head>
                <title>Cosmetics</title>
            </Head>
            <CosmeticsFilter cosmetics={cosmetics} />
        </>
    );
}

export const getStaticProps = async() => {
    const res = await fetch(`https://fortnite-api.com/v2/cosmetics/br`)
    const data = await res.json()
    const cosmetics = data.data
    
    return {
        props: {
            cosmetics
        }
    }
}