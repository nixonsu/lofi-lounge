interface Props {
  src: string
  text: string
  onClick?: () => void
}

const Card = ({ src, text, onClick }: Props) => {
  return (
    <div
      className="flex flex-col h-full w-full gap-2 items-center cursor-pointer"
      onClick={onClick}
    >
      <img className="h-3/4 w-full object-cover" src={src} />
      <p>{text}</p>
    </div>
  )
}

export default Card
