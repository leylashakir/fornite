import Head from 'next/head'
import styles from '../styles/Header.module.css'
import Link from 'next/link'

export default function Home() {
  return (
    <main>
      <Head>
        <title>Fortnite Encyclopedia</title>
        <meta name='keywords' content='fortnite, video games, nintendo, gaming' />
        <meta name="viewport" content="width=device-width,initial-scale=1"/>
      </Head>
      <div className={styles.greeting}>
        <h1>Welcome <span>Alan</span> & <span>Liam</span>!</h1>
      </div>
      <div className={styles.description}>
        <p>If you click <span><Link href='/banners'>Banners</Link></span> in the top navigation you will be able to see all the different Fornite banners.</p>
        <p>If you click <span><Link href='/cosmetics'>Cosmetics</Link></span> you will be able to see all the different characters, items, skins, and other stuff.</p>
        <p>There is a lot of stuff in Fornite so you guys have some filter options to see what you want to see.</p>
        <p>Have fun and let me know if there are other things you would like to see and if I can I will add them!</p>
      </div>
    </main>
  )
}
