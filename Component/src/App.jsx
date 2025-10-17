import { useState } from 'react'
import './App.css'

// as a function

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

// as a component
function Square(props){
  return(
    <>
    <div className="Square">
    <h1>{props.name}</h1>
    <h1>{props.age}</h1>
    </div>
    </>
  )
}

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <h1>hello react pe react</h1>
    {/* <Square/> */}
    {/* {square("hello para1" ,"this is para2")} */}
    </>
  )
}

export default App
