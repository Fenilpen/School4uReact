import React from 'react'
import  ComponentA from './Components/ComponentA'
import  ComponentB from './Components/ComponentB'
import  ComponentC from './Components/ComponentC'

function Switch() {

  const option = "a"

  switch(option){
    case "a":
      return <ComponentA/>
    case "b":
      return <ComponentB/>  
    case "c":
      return <ComponentC/> 
    default :
      return <h1>Other components</h1> 
  }
}

export default Switch
