import { useState } from 'react'
import './App.css'
import Popup from './Popup'

function App() {
  
  return (
  <button className='bg-black' onClick={()=>{
      setPopup(true)
    }}>Show popup</button>
    

    <Popup/>
    
  )

}

export default App
