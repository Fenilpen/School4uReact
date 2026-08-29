import { useState } from 'react'
import './App.css'

function App() {
  const arr = ["one","two","three"]

  <h1>List rendering</h1>
  {arr.map(function(item,index){
  return <h1>{item}</h1>
    })}
  return (
    <>
    </>
  )
}

export default App
