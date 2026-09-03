import { useState } from 'react'
import './App.css'

function App() {
  // const arr = ["one","two","three"]

  const arr = [
    {id: 1, name: "one",age :21},
    {id: 2, name: "two",age :22},
    {id: 3, name: "three",age :23}
  ]

  <h1>List rendering</h1>
  // {arr.map(function(item,index){
  // return <h1 key={item} >{item}</h1>
  //   })}

  {
      arr.map((user)=>{
        return (
          <div>
          <p>{user.id}</p>
          </div>
        )
      })
  }
  
  return (
    <>
    </>
  )
}

export default App

// why we use .map() in react
// react works with immutable ui updates and map() creates a new array without modifying the original
// jsx can embed javascript expressions inside {}, so we can diractly use array.map() in our jsx return

// (A) Normal Array
// const fruits = ["one","two","three"];
// <ul> {fruits.map((name,i)=> <li key={i}>{name}</li>)}  </ul>

// (B) Array of objects

// const users  = {
   // {id: 1, name: "one",age :21}
   // {id: 1, name: "two",age :22}
   // {id: 1, name: "three",age :23}
//}

//  <ul>
//  {users.map( user => (
//    <li key={user.id}>
//      {user.name} - {user.age} years old
//    </li>
//  ))}
// </ul>

