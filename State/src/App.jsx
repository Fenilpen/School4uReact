import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <h1>{count}</h1>
     <button onClick={()=> {setCount( count + 1)}}> plus </button>
    </>
  )
}

export default App

// why do we need state
// dynamic UI
// Example: in a counter button:

// without state, UI wont update when clicked
// with state, UI will update when clicked
