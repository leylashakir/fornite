import Link from 'next/link'
import navStyles from '../styles/Nav.module.css'

export default function Nav() {
    return(
        <nav className={navStyles.nav}>
            <ul>
                <li>
                    <Link href='/'>Home</Link>
                </li>
                <li>
                    <Link href='/banners'>Banners</Link>
                </li>
                <li>
                    <Link href='/cosmetics'>Cosmetics</Link>
                </li>
            </ul>
        </nav>
    )
}