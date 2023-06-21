import React, { useState } from 'react'

const Toggle: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useState(false)

  const handleToggle = () => {
    setIsDarkMode(!isDarkMode)
    // You can perform additional logic here to switch between light and dark mode
  }

  return (
    <div className="flex items-center">
      <label htmlFor="toggle" className="flex items-center cursor-pointer">
        <div className="relative">
          <input
            id="toggle"
            type="checkbox"
            className="sr-only"
            checked={isDarkMode}
            onChange={handleToggle}
          />
          <div className="block bg-black bg-opacity-50 w-14 h-8 rounded-full"></div>
          <div
            className={`dot absolute left-1 top-1 bg-white w-6 h-6 rounded-full transition transform ${
              isDarkMode ? 'translate-x-6' : ''
            }`}
          ></div>
        </div>
      </label>
    </div>
  )
}

export default Toggle
