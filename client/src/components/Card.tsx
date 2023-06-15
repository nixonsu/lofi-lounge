interface Props {
  src: string
  text: string
}

const Card = ({ src, text }: Props) => {
  return (
    <div className="flex flex-col h-full w-full gap-2 items-center">
      <img src={src} />
      <p>{text}</p>
    </div>
  )
}

export default Card
