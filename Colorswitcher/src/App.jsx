import { useState } from 'react'
import './App.css'
import Button from './Components/Button'

function App() {
  const colors = ["pink","blue","red"]

  return (
    <>
      <h1>Color switcher</h1>
      <Button className="bg-[red]" >Hello</Button>
    </>
  )
}

export default App
