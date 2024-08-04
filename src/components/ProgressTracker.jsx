// src/components/ProgressTracker.js

import React from 'react'

function ProgressTracker({ progress }) {
  return (
    <div className="mt-8">
      <h2 className="text-2xl font-bold mb-4">Your Progress</h2>
      {progress.length > 0 ? (
        <ul className="space-y-2">
          {progress.map((attempt, index) => (
            <li
              key={index}
              className="bg-white dark:bg-gray-800 rounded-lg shadow p-4 flex justify-between items-center"
            >
              <span>{new Date(attempt.date).toLocaleDateString()}</span>
              <span className="font-semibold">{attempt.score} correct</span>
            </li>
          ))}
        </ul>
      ) : (
        <p>No progress recorded yet. Complete a quiz to see your progress!</p>
      )}
    </div>
  )
}

export default ProgressTracker
