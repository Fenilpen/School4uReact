import { Component, useState } from 'react'
import './App.css'

// function Component2 () {
//   return(
//     <div>
//       <h1>this is component no 2</h1>
//       <img src="https://tse1.mm.bing.net/th/id/OIP.GQWe6h-gMUSf7kMVzSBnTQHaF7?r=0&rs=1&pid=ImgDetMain&o=7&rm=3" alt="" srcset="" />
//     </div>
//   )
// }

// function Components() {
//   return (
//     <div>
//      <h1>hello this is component</h1>
//      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, autem?</p>
//     </div>
//   )
// }


// function Components() {
//   return (
//     <div>
//      <h1>hello this is component</h1>
//      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, autem?</p>
//     </div>
//   )
// }


function App() {

  return (
  <div>
  {/*<Components/>
   <Components/> */}
   <Navi title="Navbaar 1" link="google.com" number={3} />
   <Navi title="Navbaar 2" />
   <Navi title="Navbaar 3"/>
  </div>
  )
}

export default App
