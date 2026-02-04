import { useState } from 'react'
import './App.css'
import Button from './Components/Button'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className='bg-red-400'>Color switcher</h1>
      <Button>Hello</Button>
    </>
  )
}

export default App
