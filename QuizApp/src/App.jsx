import { useState } from 'react'
import './App.css'
import Timer from './Components/Timer'

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
