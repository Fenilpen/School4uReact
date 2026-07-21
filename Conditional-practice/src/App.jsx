import { useState } from 'react'
import './App.css'
import Popup from './Popup'

function App() {
const [popup, setPopup] = useState(false)
const [editPopup,setEditPopup] = useState(false)
  
  return (
    <>
    {/* {delete} */}
    <button className='bg-black' onClick={()=>{
      setPopup(true)
    }}>delete</button>
    
    <Popup popup={popup} 
    setPopup={setPopup} 
    title={"delete"} 
    description={"are you sure you want to delete this?"}/>
    
    {/* {edit} */}
    <button className='bg-black' onClick={()=>{
      setPopup(true)
    }}>Edit</button>
    
    <Popup 
    popup={popup} 
    setPopup={setPopup}
    title={"edit"}
    description={"are you sure you want to edit this"}
    />

    </>
  )

}

export default App
