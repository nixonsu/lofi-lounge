import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/Home.module.css'

export default function Home() {
  return (
    <>
      <Head>
        <title>pixelated</title>
        <meta
          name="description"
          content="An immersive digital environment featuring Lofi music and stunning pixel art."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${styles.main}`}>
        <Image
          className={`${styles.backgroundImage}`}
          src={'/city-skyline.gif'}
          alt="city skyline"
          fill
        />
      </main>
    </>
  )
}
