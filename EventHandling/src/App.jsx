import { useState } from 'react'

function App() {
  
  function greet(){
    alert("Hello Fenil Patel")
  }
  
  return (
    <>
    <h1 className='bg-red-500'>Hello Universe</h1>
    <button onClick={greet}>Click me</button>

    <input className='border border-white' type='text'/>      
    </>
  )
}

export default App
