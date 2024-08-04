// src/App.js
import { useState, useEffect } from 'react'
import Quiz from './components/Quiz'
import Result from './components/Result'
import ProgressTracker from './components/ProgressTracker'
import ThemeToggle from './components/ThemeToggle'
import { questions } from './quizData'

function App() {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [score, setScore] = useState(0)
  const [showResult, setShowResult] = useState(false)
  const [progress, setProgress] = useState([])
  const [darkMode, setDarkMode] = useState(false)

  useEffect(() => {
    const savedProgress = JSON.parse(localStorage.getItem('quizProgress')) || []
    setProgress(savedProgress)

    // Apply dark mode class to html element
    if (darkMode) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [darkMode])

  useEffect(() => {
    const savedProgress = JSON.parse(localStorage.getItem('quizProgress')) || []
    setProgress(savedProgress)
  }, [])

  const handleAnswer = (answer) => {
    if (answer === questions[currentQuestion].correctAnswer) {
      setScore(score + 1)
    }

    const nextQuestion = currentQuestion + 1
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion)
    } else {
      const newProgress = [...progress, { date: new Date(), score: score + 1 }]
      setProgress(newProgress)
      localStorage.setItem('quizProgress', JSON.stringify(newProgress))
      setShowResult(true)
    }
  }

  const restartQuiz = () => {
    setCurrentQuestion(0)
    setScore(0)
    setShowResult(false)
  }

  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
  }

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 transition-colors duration-300">
      <div className="container mx-auto px-4 py-8 text-gray-900 dark:text-white">
        <ThemeToggle darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
        <h1 className="text-3xl font-bold mb-8 text-center">Test Your GK</h1>
        {showResult ? (
          <Result
            score={score}
            totalQuestions={questions.length}
            restartQuiz={restartQuiz}
          />
        ) : (
          <Quiz
            question={questions[currentQuestion]}
            handleAnswer={handleAnswer}
            currentQuestion={currentQuestion}
            totalQuestions={questions.length}
          />
        )}
        <ProgressTracker progress={progress} />
      </div>
    </div>
  )
}

export default App
