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
