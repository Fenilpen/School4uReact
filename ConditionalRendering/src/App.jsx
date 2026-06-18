import React from 'react'

const App = () => {

  const [statusOption,setStatusOption] = useState ("loading")
  
  const status = {
    loading: <h1>Loading.....</h1>,
    error: <h1>eroor aa gaya</h1>,
    success: <h1>successfull</h1>
  }
  
  return (
    <>
    {status[statusOption]}
      
    <button onClick={()=>{
      setStatusOption("loading")
    }}>Loading</button>
      
    <button onClick={()=>{
      setStatusOption("Success")
    }}>Success</button>
      
    <button> onClick={()=>{
      setStatusOption("Error")
    }}Error</button>
    </>
  )
}

export default App

// for even more elegant and scalable conditional rendering - you can use object maps to store your patterns.
// for even more elegant and scalable conditional rendering - you can use object maps to store your patterns.
// common beginner mistakes

// writing if inside JSX -> use ternary or logical AND.
// nesting too many ternaries -> makes code unreadable.
// forgetting to handle "else" case -> empty UI.
// using == insted of === -> unexpected behaviour.
// forgetting return null -> causes unnecessary rendering
