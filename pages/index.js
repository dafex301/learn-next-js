import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <Head>
        <title>Ninja List | Home</title>
      </Head>
      <div>
        <div className={styles.container}>
          <div>
            <h1 className={styles.ninja}>Ninja</h1>
            <h1 className={styles.list}>List</h1>
          </div>
            <hr className={styles.line} />
          <div className={styles.click}>
            <Link href="/ninjas"><a>see full <br></br> list here</a></Link>
          </div>
        </div>
      </div>
    </>
  )
}
