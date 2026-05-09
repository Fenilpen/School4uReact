import { useState } from 'react'

function App() {
  
const isLogin = true
const option = "a";
  
return(
  <div>
  {option === "a" ? <h1>Component </h1> : 
    
  (option === "b" ? <h1> components</h1> : <h1>Other components</h1> )}
    
  </div>
)

export default App
