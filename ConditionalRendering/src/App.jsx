import { useState } from 'react'
import  ComponentA from './Components/ComponentA'
import  ComponentB from './Components/ComponentB'
import  ComponentC from './Components/ComponentC'

function App () {
  const option = "a"

  switch(option){
   
    case "a":
      return <ComponentA/>
    case "b":
      return <ComponentB/>
    case "c":
      return <ComponentC/> 
    default :
      return <h1> other Component </h1>
  }
  
)


}
