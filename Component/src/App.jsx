import { useState } from 'react'
import './App.css'
import Card from './Components/Card'


// as a function

// function square(para1,para2){
//   return(
//     <>
//     <div className="Square">
//     <h1>{para1}</h1>
//     <h1>{para2}</h1>
//     </div>
//     </>
//   )
// }

// as a component
function Square(props){
  return(
    <>
    <div className="Square">
    <h1>{props.name}</h1>
    <h1>{props.age}</h1>
    </div>
    </>
  )
}

// as a class

// class Square extends Component{
//   render(){
//     return(
//     <>
//     <div className="Square">
//     <h1>{this.props.name}</h1>
//     <h1>{this.props.age}</h1>
//     </div>
//     </>
//   )
//   }
// }

function App() {

  return (
    <>
    {/* <h1>hello react pe react</h1> */}
    {/* <Square  name="Fenil" age="25"/> */}
    {/* {square("hello para1" ,"this is para2")} */}
    <div className="grid">
    <Card title="Cloths" description="Kids & Adults"/>
    <Card title="Applience" description="Home"/>
    <Card title="Electrics" description="Mobiles"/>
    <Card title="Wood" description="Fruniture"/>
    <Card title="Car acssesories" description="Mechenics"/>
    </div>
    </>
  )
}

export default App
