import Link from 'next/link'
import headerStyles from '../styles/Header.module.css'

export default function Header() {
    return(
        <h1 className={headerStyles.title}>
            <span>The Fortnite</span> Encyclopedia Killer
        </h1>
    )
}