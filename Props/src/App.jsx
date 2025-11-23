import { useState } from 'react'
import './App.css'
import Card from './Components/Card'

function App() {

  return (
    <div className='layout'>
    <Card name={"ABCD"} age={25}/>
    <Card name={"WXYZ"} age={28}/>
    </div>
     
  )
}

export default App
