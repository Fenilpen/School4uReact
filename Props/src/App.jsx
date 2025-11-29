import { useState } from 'react'
import './App.css'
import Card from './Components/Card'
import Button from './Components/Button'


function App() {

  const obj = {
    name:"Fenil",
    age: 28,
  }

  function buttononClick(){
    console.log("button one is clicked")
  }

  function button2onClick(){
    console.log("button two is clicked")
  }
  
  return (
    <div className='layout'>
    <Card data={obj} isStudent={true} content={
      <>
      <h1>Hello</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
        Consectetur non accusantium quos natus velit nisi alias 
        consequuntur aliquid maxime veniam?
      </p>
      </> 
      }/>
    
    <Button title={"Click me"}  func={buttononClick}/>
    <Button title={"Submit"} func={button2onClick}/>
    </div>
     
  )
}

export default App
