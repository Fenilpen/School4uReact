import { useState } from 'react'

function App() {
  
const isLogin = true
const option = "a";
  
return(
  <div>
   {option === "a" ? <h1>Component</h1> : <h1>other components</h1> }
  </div>
)

export default App
