import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function Home() {
  return (
    <div>
      <Navbar />
      <div className={styles.container}>
        <h1>Homepage</h1>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Provident earum, nisi nesciunt officia maxime quidem at tempore minus qui laboriosam!</p>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque, maxime.</p>
        <Link href="/ninjas"><a>See Ninjas List</a></Link>
      </div>
      <Footer />
    </div>
  )
}
