// import Head from 'next/head'
// import Image from 'next/image'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function Home() {
  return (
    <div>
      <Navbar/>
      <h1>HomePage</h1>
      <p>lorem5</p>
      <Link href="/ninjas">
        <a>See ninja lists...</a>
      </Link>
      <Footer/>
    </div>
  )
}
