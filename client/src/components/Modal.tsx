import React, { ReactNode } from 'react'

interface ModalProps {
  isOpen?: boolean
  onClose?: () => void
  children: ReactNode
}

const Modal = ({ isOpen, onClose, children }: ModalProps) => {
  if (!isOpen) return null

  return (
    <div className="z-10 fixed inset-0 flex items-center justify-center">
      <div className="fixed inset-0 bg-black opacity-50"></div>
      <div className="fixed z-10 bg-white w-96 p-6 rounded shadow">
        {children}
        <button
          className="mt-4 px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600"
          onClick={onClose}
        >
          Close
        </button>
      </div>
    </div>
  )
}

export default Modal
