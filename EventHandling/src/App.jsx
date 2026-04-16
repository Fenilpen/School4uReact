import { useState } from 'react'

function App() {
  
  function testing (event){
  console.log(event.target.value)
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

    {/* <button onCLick={testing}>Click</button> */}
    <input type='text' placeholder='Enter name' onChange={testing}/>
    </>
  )
}

export default App
