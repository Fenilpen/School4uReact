import { useState } from 'react'
import './App.css'
import Button from './Components/Button'

function App() {
  const colors = ["pink","blue","red"]

  return (
    <>
      {
      colors.map(function(item){
        console.log(item);
        
      })
    }
      <h1>Color switcher</h1>
      <Button color={""}>Hello</Button>
    </>
  )
}

export default App
