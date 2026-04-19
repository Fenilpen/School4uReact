import { useState } from 'react'
import './App.css'

function App() {
  
  function testing (event){
  // console.log(event.target.value)
    setTimeout(()=>{
      console.log(event.target.value)
    },1000)
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

// Synthetic Event
// Event handling in react follows a similar pattern to standerd javascript event handling but with
// some key diffrences, such as using synthetic events for cross-browser compatibility and providing consistent event handling
// across diffrent events and browsers

// when you handle events in react, like clicking a button or typing in an input box, react wraps the native 
// browser events in something called synthetic event. this synthatic event ensures consistent event handling
// across different browser.

// but after event handler runs, react pools the event for performance (so e.target may become null in async code).

// function handleChange(e){
//   setTimeout(() => {
//     console.log(e.target.value); // e.target is null
//   }, 1000);
// }

// in react 16 and later versions this problem is no more
