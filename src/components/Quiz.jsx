// src/components/Quiz.js

import React from 'react'

function Quiz({ question, handleAnswer, currentQuestion, totalQuestions }) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 mb-8">
      <h2 className="text-xl font-semibold mb-4">{question.question}</h2>
      <div className="space-y-2">
        {question.options.map((option, index) => (
          <button
            key={index}
            onClick={() => handleAnswer(option)}
            className="w-full text-left p-3 rounded bg-gray-100 dark:bg-gray-700 hover:bg-blue-100 dark:hover:bg-blue-900 transition duration-150"
          >
            {option}
          </button>
        ))}
      </div>
      <div className="mt-4 text-sm text-gray-500 dark:text-gray-400">
        Question {currentQuestion + 1} of {totalQuestions}
      </div>
    </div>
  )
}

export default Quiz
