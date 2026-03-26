import { useState } from 'react'
import './App.css'
import Timer from './Components/Timer'
import Questions from './Components/Questions'
import Result from './Components/Result'

function App() {
  const [isOver,setIsOver] = useState(false)
  const [score,setScore] = useState(0)

  return (
    <>
    <Timer setIsOver={setIsOver} />
      
      {!isOver ? (
        <Result/>
      ):(
        <Questions setIsOver={setIsOver} setScore={setScore}/>
      )}
    </>
  )
}

export default App
