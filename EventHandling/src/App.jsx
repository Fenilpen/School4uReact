import { useState } from 'react'

function App() {
  
  function testing (e){
  console.log(e.target)
  }
  
  return (
    <>
    {/* <h1 className='bg-red-500'>Hello Universe</h1>
    <button 
      onClick={function greet(){
      alert("Hello Fenil Patel")}}> Click me<button>

    <input className='border border-white' type='text' onChange={handleInputBox} placeholder='Enter name'/>
    
    <form onSubmit={handleInputBox} action="">
    <input type='text' placeholder='Enteremail'/>
    <button> Submit </button>
    </form>   */}

      <button onCLick={testing}>Click</button>
    </>
  )
}

export default App
