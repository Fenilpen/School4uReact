import { useState } from 'react'

function App() {
  
const isLogin = true
const option = "a";
  
return(
  <div>
   {option === "a" ? <h1>LoggedIn</h1> : <h1>Please Login</h1> }
  </div>
)

export default App
