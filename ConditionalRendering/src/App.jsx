import React from 'react'

const App = () => {

  const hasMessege = "hi india how are you"
  
  return (
    <div>
      {
        hasMessege ? hasMessege : "messege is            
        not there"
      }
    </div>
  )
}

export default App
