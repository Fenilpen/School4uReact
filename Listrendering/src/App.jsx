import { useState } from 'react'
import './App.css'

function App() {
  const arr = ["one","two","three"]

  <h1>List rendering</h1>
  {arr.map(function(item,index){
  return <h1 key={item} >{item}</h1>
    })}
  return (
    <>
    </>
  )
}

export default App

// why we use .map() in react
// react works with immutable ui updates and map() creates a new array without modifying the original
