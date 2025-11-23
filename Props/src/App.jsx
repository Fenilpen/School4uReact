import { useState } from 'react'
import './App.css'
import Card from './Components/Card'

function App() {

  return (
    <div className='layout'>
    <Card data={obj} isStudent={true}/>
    
    <Card />
    </div>
     
  )
}

export default App
