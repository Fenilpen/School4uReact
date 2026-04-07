import { useState } from 'react'

function App() {
  
  
  
  return (
    <>
    <h1 className='bg-red-500'>Hello Universe</h1>
    <button onClick={function greet(){
    alert("Hello Fenil Patel")
  }}>Click me</button>

    <input className='border border-white' type='text' placeholder='Enter name'/>      
    </>
  )
}

export default App
