// src/components/ThemeToggle.js

import React from 'react'
import { SunIcon, MoonIcon } from '@heroicons/react/24/solid'

function ThemeToggle({ darkMode, toggleDarkMode }) {
  return (
    <button
      onClick={toggleDarkMode}
      className="fixed top-4 right-4 p-2 rounded-full bg-gray-200 dark:bg-gray-700"
    >
      {darkMode ? (
        <SunIcon className="h-6 w-6 text-yellow-400" />
      ) : (
        <MoonIcon className="h-6 w-6 text-gray-800 dark:text-gray-200" />
      )}
    </button>
  )
}

export default ThemeToggle
