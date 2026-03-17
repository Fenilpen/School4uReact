import { useState } from 'react'
import './App.css'
import Timer from './Components/Timer'
import Questions from './Components/Questions'
import Result from './Components/Result'

function App() {
  const [isOver,setIsOver] = useState(false)

  return (
    <>
    <Timer/>
      
      {!isOver ? (
        <Result/>
      ):(
        <Questions setIsOver={setIsOver}/>
      )}
    </>
  )
}

export default App
