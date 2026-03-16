import { useState } from 'react'
import './App.css'
import Timer from './Components/Timer'
import Questions from './Components/Questions'

function App() {
  const [isOver,setIsOver] = useState(false)

  return (
    <>
    <Timer/>
    
    <Questions/>
    </>
  )
}

export default App
