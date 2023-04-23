import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/Home.module.css'
import Radio from '@/components/Radio'

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
        {/* <Image
          className={`${styles.backgroundImage}`}
          src={'/city-skyline.gif'}
          alt="City skyline"
          fill
        /> */}
        <Image
          className={`${styles.backgroundImage}`}
          src={'/japanese-temple.gif'}
          alt="Japanese temple"
          fill
        />
        <Image
          className={`${styles.tvLinesOverlay}`}
          src={'/tv-lines.png'}
          alt="Tv lines overlay"
          fill
        />
        <Radio />
      </main>
    </>
  )
}
