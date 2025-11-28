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
    <Card data={obj} isStudent={true}/>
    <Button title={"Click me"}  func={buttononClick}/>
    <Button title={"Submit"} func={button2onClick}/>
    </div>
     
  )
}

export default App
