import { useState } from 'react'
import './App.css'
import Button from './Components/Button'
import ColorBox from './Components/ColorBox'


function App() {
  const colors = ["pink","blue","red","lightseagreen","tomato","lightcoral"]

  return (
    <>
    <h1>Color switcher</h1>
      <div>
    {
      colors.map(function(item){
       return (<Button key={item} color={item}>{item}</Button>)
      })
    }
      </div>
      <ColorBox/>
    </>
  )
}

export default App
