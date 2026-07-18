import { useState } from 'react'
import './App.css'
import Popup from './Popup'

function App({popup,setPopup}) {
const [popup, setPopup] = useState(false)
  
  return (
  <button className='bg-black' onClick={()=>{
      setPopup(true)
    }}>delete</button>
    
    <Popup popup={popup} 
    setPopup={setPopup} 
    title={"delete"} 
    description={"are you sure you want to delete this?"}/>


  <button className='bg-black' onClick={()=>{
      setPopup(true)
    }}>edit</button>
    
    <Popup popup={popup} setPopup={setPopup}/>
    
  )

}

export default App
