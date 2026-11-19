import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <input type="text" placeholder='enter name' onChange={ (e)=>{
      setState(e.target.value)
      } }/>
    </>
  )
}

export default App
