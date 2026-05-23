import React from 'react'
import ComponentA from './Components/ComponentA'
import ComponentB from './Components/ComponentB'
import ComponentC from './Components/ComponentC'

const App = () => {

const option = "a"
const content = <h1>hello how are you</h1>


  if(option === "a"){
        content = <ComponentA/>
    }
  
    return(
        <>
        <div>{content}</div>
        </>
    )
}

export default App
