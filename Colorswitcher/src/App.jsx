import { useState } from 'react'
import './App.css'
import Button from './Components/Button'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Color switcher</h1>
      <Button className="bg-[red]" >Hello</Button>
    </>
  )
}

export default App
