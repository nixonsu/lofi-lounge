interface Props {
  src?: string
  className?: string
}

const Background = ({ src, className }: Props) => {
  return (
    <div className={`${className} h-full w-full absolute top-0 left-0`}>
      {src && <img src={src} className="h-full w-full object-cover" />}
    </div>
  )
}

export default Background
