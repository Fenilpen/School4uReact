import { useState } from 'react'
import './App.css'

function App() {
  
  const [popup, setPopup] = useState(false)
  
  return (
  <button>Show popup</button>
    
{/* {Popup} */}
    
    {popup && (
      <div className='absolute top-0 left-0 w-screen h-screen bg-black/50 items-center justify-center'>
      <button onClick={()=>{
          setPopup(false)
        }} className='absolute top-[1rem] right-[1rem]'>Cancel</button>
        <div className='w-full h-full max-w-[40rem] max-h-[20rem] bg-[#242424]'>

      </div>
      </div>
    )}
  )

}

export default App
