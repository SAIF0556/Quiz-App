// src/components/Result.js

import React from 'react'

function Result({ score, totalQuestions, restartQuiz }) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 text-center">
      <h2 className="text-2xl font-bold mb-4">Quiz Completed!</h2>
      <p className="text-xl mb-4">
        Your score: {score} out of {totalQuestions}
      </p>
      <button
        onClick={restartQuiz}
        className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded transition duration-150"
      >
        Restart Quiz
      </button>
    </div>
  )
}

export default Result
