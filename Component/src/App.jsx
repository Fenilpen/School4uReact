import { useState } from 'react'
import './App.css'

function Square(){
  return(
    <div className="Square">here</div>
  )
}

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <h1>hello react pe react</h1>
    <Square/>
    </>
  )
}

export default App
