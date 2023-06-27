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
      className={`flex flex-col h-full w-full gap-4 items-center cursor-pointer rounded ${
        isSelected && 'green-box-shadow'
      }`}
      onClick={() => {
        handleClick(id)
      }}
    >
      <img className="h-5/6 w-full object-cover rounded" src={src} />
      <p className="text-center">{text}</p>
    </div>
  )
}

export default Card
