import { useState } from 'react'
import './App.css'

// function square(para1,para2){
//   return(
//     <>
//     <div className="Square">
//     <h1>{para1}</h1>
//     <h1>{para2}</h1>
//     </div>
//     </>
//   )
// }

function Square(para1,para2){
  return(
    <>
    <div className="Square">
    <h1>{para1}</h1>
    <h1>{para2}</h1>
    </div>
    </>
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
