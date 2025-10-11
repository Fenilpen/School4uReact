import { useState } from 'react'
import './App.css'
import { Inputbox} from './Inputs'


function Box(){

const [value,setValue] = useState("")

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
      backgroundColor: value ,
      color:"white"
    }}>{value}</div>
    <div className='inputBox'>
      <Inputbox onChange={e => setValue(e.target.value)}/>
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
