import React from 'react'
import questions from "./Question.json"

function Questions() {
  const [currentIndex, setIndex] = useState(0)
  
  return (
    <div>
      {questions[currentIndex]}
    </div>
  )
}

export default Questions
