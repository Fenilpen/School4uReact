import React from 'react'

const App = () => {

  const hasMessege = 0
  
  return (
    <div>
      /* {
        hasMessege ? 
        <h1>{hasMessege}</h1> : 
        null
      } */

      {
        hasMessege && <h1>{hasMessege}</h1> && <h1>No massege</h1>
      }
      
    </div>
  )
}

export default App
