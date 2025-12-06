import { useState } from 'react'
import './App.css'
import Card from './Components/Card'
import Button from './Components/Button'
import Comp from './Components/Comp'


function App() {

  // const obj = {
  //   name:"Fenil",
  //   age: 28,
  // }

  function buttononClick(){
    console.log("button one is clicked")
  }

  function button2onClick(){
    console.log("button two is clicked")
  }
  
  return (
    <div className='layout'>
    {/* <Card data={obj} isStudent={true} content={
      <>
      <h1>Hello</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
        Consectetur non accusantium quos natus velit nisi alias 
        consequuntur aliquid maxime veniam?
      </p>
      </> 
      }/> */}
    
  <Button>
    click me
   </Button>
      
  <Button>
    click
  </Button>

    <Comp title={"this is audiable"}/>
    <Comp age={20}/>
    <Comp {...obj} />    // spred operator
      
      {/* <Layout > <h1>hellow</h1> </Layout> */}
    </div>
     
  )
}

export default App
