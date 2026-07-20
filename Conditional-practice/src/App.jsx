import { useState } from 'react'
import './App.css'
import Popup from './Popup'

function App() {
const [popup, setPopup] = useState(false)
  
  return (
  <button className='bg-black' onClick={()=>{
      setPopup(true)
    }}>delete</button>


  <button className='bg-black' onClick={()=>{
      setPopup(true)
    }}>edit</button>
    
    <Popup 
    popup={popup} 
    setPopup={setPopup}/>
    edit={"edit"}
    description={"are you sure you want to edit this"}

   <Popup popup={popup} 
    setPopup={setPopup} 
    title={"delete"} 
    description={"are you sure you want to delete this?"}/>
  
  )

}

export default App
