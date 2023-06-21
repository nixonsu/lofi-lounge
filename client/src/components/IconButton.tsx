import React from 'react'

interface Props {
  icon: React.ReactNode
  onClick?: () => void
}

const IconButton = ({ icon, onClick }: Props) => {
  return (
    <button className="h-6 w-6" onClick={onClick}>
      {icon}
    </button>
  )
}

export default IconButton
