import { useState } from 'react'
import './App.css'
import Timer from './Components/Timer'
import Questions from './Components/Questions'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Timer/>
    
    <Questions/>
    </>
  )
}

export default App
