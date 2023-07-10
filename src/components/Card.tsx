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
      className={`flex h-full w-full cursor-pointer flex-col items-center gap-4 rounded ${
        isSelected && 'shadow-theme'
      }`}
      onClick={() => {
        handleClick(id)
      }}
    >
      <img className="h-5/6 w-full rounded object-cover" src={src} />
      <p className="pb-4 pl-4 pr-4 text-center">{text}</p>
    </div>
  )
}

export default Card
