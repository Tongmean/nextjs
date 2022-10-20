
import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function Home() {
  return (
    <div>

      <h1>HomePage</h1>
      <p>lorem5</p>
      <Link href="/ninjas">
        <a>See ninja lists...</a>
      </Link>

    </div>
  )
}
