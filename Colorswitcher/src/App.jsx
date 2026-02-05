import { useState } from 'react'
import './App.css'
import Button from './Components/Button'

function App() {
  const colors = ["pink","blue","red"]

  return (
    <>
    <h1>Color switcher</h1>
    {
      colors.map(function(item){
       return <Button key={item} color={""}>{item}</Button>
      })
    }
    </>
  )
}

export default App
