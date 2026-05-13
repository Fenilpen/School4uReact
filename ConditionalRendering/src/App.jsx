import React from 'react'

const App = () => {

  const hasMessege = "hi india how are you"
  
  return (
    <div>
      {
        hasMessege ? 
        <h1>{hasMessege}</h1> : 
        null
      }
    </div>
  )
}

export default App
