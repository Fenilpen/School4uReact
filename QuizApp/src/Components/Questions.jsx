import React from 'react'
import questions from "./Question.json"

function Questions() {
  const [currentIndex, setIndex] = useState(0)
  
  return (
    <div>
      <h2>{questions[currentIndex].Question} </h2>
    </div>
  )
}

export default Questions
