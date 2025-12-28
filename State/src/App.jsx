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

// understanding usestate hook

// syntex & destructuring:
// const [count,setCount] = useState(0);

// state variable : a state variable is a special variable in react
// that holds data that changes over time and should trigger a re-render
// of the components when it changes.

// state updater function: requests react update the state and re-render the components.
// ensures changes are tracked by react's internal system.

// note
// never modify state directly(count = count + 1 X).
// directly mutating the variable won't trigger re-render. 
