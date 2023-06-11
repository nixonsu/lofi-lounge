import React from 'react'

interface Props {
  icon: React.ReactNode
  onClick?: () => void
}

const IconButton = ({ icon, onClick }: Props) => {
  return (
    <button className="h-8 w-8" onClick={onClick}>
      {icon}
    </button>
  )
}

export default IconButton
