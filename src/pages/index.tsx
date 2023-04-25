import Head from 'next/head'
import Radio from '@/components/Radio'
import { StyledMain } from '@/styles/Main.styled'
import { BgImageContainer } from '@/styles/BgImageContainer'

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
      <StyledMain>
        <BgImageContainer
          src={'/gifs/japanese-temple.gif'}
          alt="Japanese temple"
          fill
          zindex={-2}
        />

        <BgImageContainer
          src={'/pngs/tv-lines.png'}
          alt="Tv lines overlay"
          fill
          opacity={0.2}
          zindex={-1}
        />
      </StyledMain>

      <Radio />
    </>
  )
}
