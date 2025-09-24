import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <h1>helloww  jsx </h1>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, voluptas. 
    Temporibus accusantium quam sapiente voluptatibus impedit. Quam maiores, velit possimus esse pariatur rem eligendi cupiditate adipisci voluptas, enim exercitationem architecto!
    A, consequuntur cum impedit quam numquam expedita quisquam in incidunt dolorem sunt necessitatibus tempore suscipit dolor cumque laudantium harum perspiciatis accusantium voluptas officiis pariatur modi? Ullam sunt ea maxime deleniti?
    Fugiat nostrum, nulla placeat sequi soluta pariatur consequatur </p>
    </>
  )
}

export default App


// what is jsx ??
// JSX is a sytex extension for javascript used in react.
// it lets you write HTMl like code inside javascript

// React code heavily uses JSX, a syntax extension that looks like HTML but is not standard JavaScript; 
// Babel converts this into standard JavaScript function calls usable by browsers.

// JSX Transpilation: Converts JSX into JavaScript function calls.
// ES6+ to ES5: Converts modern JavaScript to ES5 for wider browser compatibility

// Embedding expressions 

// Valid Expressions:

// Variables
// Function calls
// Ternary expressions
// Mathematical operations


// statement like if-else,for etc. are not allowed

// Note:
// JSX and template literals both folllow this rule:
// only expressions can go inside {} or ${} and not statements 

// Expressions can be part of statements (e.g., in conditions or assignments), 
// but statements cannot be used where a value is expected, such as function arguments.
// While expressions always produce a value, statements focus on actions like variable declaration 
// or loops, and may include expressions within them.
// In contexts like React JSX, expressions are used for embedding values or conditional rendering, 
// whereas statements like if-else require alternative approaches.
