import { useState } from 'react'
import './App.css'

function App() {
  
  const [popup, setPopup] = useState(false)
  
  return (
  <button>Show popup</button>
    
{/* {Popup} */}
    
    {popup && (
      <div className='absolute top-0 left-0 w-screen h-screen bg-red-500'></div>
    )}
  )

}

export default App
