import { useState } from 'react'

function App() {

  // const isLogin = true  
  const option = "a"

  if(option === "a"){
  return(
  <div>
    <h1>component A</h1>
  </div>
) }

if(option === "b"){
  return(
  <div>
    <h1>component B</h1>
  </div>

) }

if(option === "c"){
  return(
  <div>
    <h1>component C</h1>
  </div>

) }
  
return(
  <h1>hello please login</h1>
)
  
}

export default App
