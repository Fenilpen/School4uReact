import { useState } from 'react'
import './App.css'
import Card from './Card'

function App() {
  // const [count, setCount] = useState(0)

  // const [userData,setUserData] = ({
  //   name: "fenil",
  //   age:25,
  //   passion:"govt"
  // })

 // function increment (){
 //    setCounts(counts + 1)
 //  }

  // console.log(userData);

  return (
    <>
      <Card/>
    </>
  )
}

export default App

// why do we need state
// dynamic UI
// Example: in a counter button:

// without state, UI wont update when clicked
// with state, UI will update when clicked

// understanding usestate hook

// syntex & destructuring:
// const [count,setCount] = useState(0);

// state variable : a state variable is a special variable in react
// that holds data that changes over time and should trigger a re-render
// of the components when it changes.

// state updater function: requests react update the state and re-render the components.
// ensures changes are tracked by react's internal system.

// note
// never modify state directly(count = count + 1 X).
// directly mutating the variable won't trigger re-render. 


// updating State

// Direct updates:
// setCounts(count + 1)

// functional updates (when depading on previous state):
// setCount(prev => prev + 1);

// updating arrays & objects (use spread operator,immutability concept)
// common mistakes: mutating directly (push, user.age = 22)

// note 
// never modify state diractly (const = const + 1   X ),
// diractly mutating the variable won't trigger re-render

// how react components are rendred and updated

// state declaration: components in react manage their data using "state".
// in functional components, this is typicaly done using the useSate

// updating state: when an event occures (e.g. a click button,data is fetched), you use
// the state's updater function (eg setCount) to change the state value

// Re-rendering: when the state is updated using its setter function,React detects this change.
// it then queues a re-render of the components where the state was updated,and any child
// components that depend on that state

// UI Update: During the re-render. react re-executes the components render logic (the JSX).
// it compares the new virtual DOM tree with the previous one and efficiently updates only
// the necessary parts of the actual DOM to reflect the new state. this  ensures that the ui 
// accurately displays the currrent state values


// memory
// each component instance has its own independent state, even if its the same component used multiple times,

// why it works like this

// react doesnt attach state to the component function itself,
// instead, react keeps a state "bucket" for each component instance in the tree.
// when react re-renders, it matches components using their position in the tree and gives them and 
// gives tham back their own state memory 

// Keyed Components

// if you render components in a list
// {items.map(item => <counter key={item.id}/>)}

// React uses the key prop to decide which state belongs to which component.

// if key changes => react treats it as new component whith fresh state.
