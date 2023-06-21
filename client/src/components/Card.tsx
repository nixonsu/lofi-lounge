interface Props {
  id: string
  src: string
  text: string
  isSelected: boolean
  handleClick: (id: string) => void
}

const Card = ({ id, src, text, handleClick, isSelected }: Props) => {
  return (
    <div
      className={`flex flex-col h-full w-full gap-2 items-center cursor-pointer ${
        isSelected && 'border'
      }`}
      onClick={() => {
        handleClick(id)
      }}
    >
      <img className="h-3/4 w-full object-cover" src={src} />
      <p>{text}</p>
    </div>
  )
}

export default Card
