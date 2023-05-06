import Head from 'next/head'
import Radio from '@/components/Radio'
import { StyledMain } from '@/styles/Main.styled'
import { BgImageContainer } from '@/styles/BgImageContainer'
import { Tint } from '@/styles/Tint.styled'

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
        <Tint />
        <BgImageContainer
          src={'/gifs/city-skyline.gif'}
          alt="Japanese temple"
          fill
          zindex={-3}
        />

        {/* <BgImageContainer
          src={'/pngs/tv-lines.png'}
          alt="Tv lines overlay"
          fill
          opacity={0.2}
          zindex={-2}
        /> */}
      </StyledMain>
      <Radio />
    </>
  )
}
