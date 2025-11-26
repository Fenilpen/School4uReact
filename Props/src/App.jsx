import { useState } from 'react'
import './App.css'
import Card from './Components/Card'
import Button from './Components/Button'


function App() {

  const obj = {
    name:"Fenil",
    age: 28,
    quali:9
  }

  return (
    <div className='layout'>
    <Card data={obj} isStudent={true}/>
    <Button title={"Click me"}/>
    <Button title={"Submit"}/>
    </div>
     
  )
}

export default App
