import { useState } from 'react'
import './App.css'
import Card from './Components/Card'

function App() {

  const obj = {
    name:"Fenil",
    age: 28,
    quali:9
  }

  return (
    <div className='layout'>
    <Card data={obj} isStudent={true}/>
    
    <Card />
    </div>
     
  )
}

export default App
