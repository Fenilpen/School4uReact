import { useState } from 'react'
import './App.css'

function App() {

  return (
    <>
      
    </>
  )
}

export default App

// what is hooks
// hooks are one of the most powerfull fetures in react
// they were introduced in react 16.8 to let us use state and lifecycle methods inside
// functional components - without writing a class

// before hooks

// functional components were stateless
// we used class components for state & lifecycle.

// after hooks:
// functional components can now manage state, handle side effects and reuse components easily.

// hooks?
// a hook is a special function provided by react.
// it lets you "hook into" React features like state, lifecycle, context, refs, etc.
// hooks must start with "use" (eg, usestate,useeffect)

// rules of hooks:
// only call hooks at the top level of your component(not inside loops/conditions)

// only call hooks from:
// react function components
// custom hooks

// commonly used built-in hooks

// use sate
// useEffect
// useRef
// useReducer
// useMemo
// useCallback
// useLayoutEffect
// useContext


// useEffect Hook
// if usestate is for managing state then usestate is for managing side effects in react
// a side effect means any code that affects something outside reacts render cycle.
