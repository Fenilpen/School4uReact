import { useState } from 'react'
import './App.css'

function App() {
  
  function testing (event){
  // console.log(event.target.value)
  //   setTimeout(()=>{
  //     console.log(event.target.value)
  //   },1000)
  // }

  // function testing(name){
  // }

  function submitHandler(event){
    event.preventDefault()
  }

  function parentHandler(){
    <div> onClick </div>
  }

  function childHandler(e) {
    e.stopPropagation()
  }
  
  return (
    <>
      
     <div className='bg-red-500' onClick={parentHandler}>
        parent click
        <button onClick={childHandler}>
         child click 
        </button>
      </div>
      
{/* <form onSubmit={submitHandler} action="" >
    <input type='text' placeholder='enter name' />
    <button type="submit">Click</button>
</form> */}
      
    <button onClick={()=>{testing('XYZ')}}>Click</button>
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
