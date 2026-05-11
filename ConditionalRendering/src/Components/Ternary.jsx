import { useState } from 'react'
import './App.css'

function App() {

    const isLogin = true
    const option = "a";

    return(
    <div>
  {option === "a" ? <h1>Component A</h1> : 
    
  (option === "b" ? <h1> components B </h1> : ( option === "c" ? <h1>components C</h1> : <h1>Other Components</h1> ))}
    
  </div>
    )

}

export default App
