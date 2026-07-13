import { useState } from 'react'
import './App.css'
import Popup from './Popup'

function App() {
const [popup, setPopup] = useState(false)
  
  return (
  <button className='bg-black' onClick={()=>{
      setPopup(true)
    }}>Show popup</button>
    <Popup popup={popup} setPopup={setPopup} />
    
  )

}

export default App
