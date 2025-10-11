import { useState } from 'react'
import './App.css'
import { Inputbox} from './Inputs'


function Box(){
const [input, setInput] = useState("")
const [colors, setColors] = useState([])

// Adding color to the list and clearing the input
  const handleAddColor = () => {
    if (input.trim() !== "") {
      setColors([...colors, input])
      setInput("")
    }
  }
  
  return(
    <>
    <div className='Box' style={{
      backgroundColor: input ,
      color:"white"
    }}>{input}</div>
    <div className='inputBox'>
      <Inputbox onChange={e => setInput(e.target.value)}/>
      <button onClick={handleAddColor}>Add Color</button>
    </div>
    </>
  )
}

function App() {

  return (
    <>
     <Box/>
    </>
  )
}

export default App
