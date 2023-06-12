import React from 'react'

interface Props {
  children: React.ReactNode
}

const OpaqueContainer = ({ children }: Props) => {
  return (
    <div className="inline-flex bg-black bg-opacity-50 p-4 rounded-lg">
      {children}
    </div>
  )
}

export default OpaqueContainer
