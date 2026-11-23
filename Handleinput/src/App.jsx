import { useState } from 'react'
import './App.css'

function App() {
  const [State, setState] = useState(0)

  return (
    <>
      <input type="text" placeholder='enter name' onChange={ (e)=>{
      setState(e.target.value)
      } }/>

      <br />
      <br />
      
  <button onClick={()=>setState("")}>Clear</button>
   <h1>{State}</h1>
    </>
  )
}

export default App
