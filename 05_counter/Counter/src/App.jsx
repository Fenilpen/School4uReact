import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  function increment () {
  count = count + 1
  setCount(count)


  return (
    <>
     
    </>
  )
}

export default App
