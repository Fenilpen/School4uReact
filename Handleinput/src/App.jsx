import { useState } from 'react'
import './App.css'

function App() {
  const [State, setState] = useState(0)

  return (
    <>
      <input type="text" value={State} placeholder='enter name' onChange={ (e)=>{
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

//value => connected to state
// onchange => uodates state
// without onChange the input becomes read-only
