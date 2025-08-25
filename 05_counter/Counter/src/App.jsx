import { useState } from 'react'
import './App.css'

function App() {
  let [count, setCount] = useState(0)

  function increment () {
  count = count + 1
  setCount(count)
  }

  return (
    <>
     <h1>Counter App</h1>
     <p>Count : {count}</p>

    <div className='buttons'>
     <button onClick={increment}>➕ INCREMENT</button>
     <button>➖ DECREMENT</button>
     <button>🔄️ RESET</button>
    </div>
    </>
  )
}

export default App
