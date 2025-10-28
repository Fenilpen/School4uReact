import "./app.css"
import Card from "./card"

function App() {

  return (
    <>
    <div className="red">app</div>
    <button className="btn">click me</button>
    <Card />
    </>
  )
}

export default App


// css in react

// 1. regular css
// if you import css file in react those styles are global by default

// 2. css module
// lets you scope css to a component

// 3. inline css
// you use style prop, which takes a javascript object (not a string)
