// import { useRouter } from 'next/router'
import Link from 'next/link'

export default function Navbar() {
//   const router = useRouter()
  const pages = [
    'About',
    'Articles',
    'Projects',
    'Talks',
    'Podcasts',
    'Investing',
    'Uses',
    'Reminder',
  ]
    return (
        <>
        {pages.map(page => {
                const path = `/${page.toLowerCase()}`
                return (
                <li key={page}>
                    <Link href={path} passHref>
                        {page}
                    </Link>
                </li>
                )
            })}
        </>
    );
}