import { useState } from 'react'
import './App.css'
import Card from './Components/Card'

function App() {

  return (
    <div className='layout'>
    <Card name={"ABCD"} age={25}/>
    <Card name="Alpha"/>
    <Card/>
    <Card/>
    <Card/>
    </div>
     
  )
}

export default App
