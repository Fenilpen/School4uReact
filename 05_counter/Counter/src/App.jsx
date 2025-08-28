import { useState } from 'react'
import './App.css'

function App() {
  let [count, setCount] = useState(0)

  function increment () {
  count = count + 1
  setCount(count)
  }

  function decrement () {
  count = count - 1
  setCount(count)
}

function reset () {
  count = count = 0
  setCount(count)
}

  return (
    <>
     <h1>Counter App</h1>
     <p>Count : {count}</p>

    <div className='buttons'>
{/*      <button onClick={increment}>➕ INCREMENT</button>
     <button onClick={decrement}>➖ DECREMENT</button>
     <button onClick={reset}>🔄️ RESET</button> */}

     <Button text="INCREMENT" func={increment}/>
     <Button text=" DECREMENT" func={decrement}/>
     <Button text="RESET" func={reset}/>
    </div>
    </>
  )
}

function Button({text,func}) {

  return(
    <button onClick={func}>{text}</button>
  )
}

export default App
