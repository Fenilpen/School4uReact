import { useState } from 'react'
import './App.css'

function App() {
  
  const [popup, setPopup] = useState(false)
  
  return (
  <button className='bg-black' onClick={()=>{
      setPopup(true)
    }}>Show popup</button>
    
{/* {Popup} */}
    
    {popup && (
      <div className='absolute top-0 left-0 w-screen h-screen bg-black/50 items-center justify-center flex-col'>
      <button onClick={()=>{
          setPopup(false)
        }} className='bg-[#242424] absolute top-[1rem] right-[1rem]'>Cancel</button>
        <div className='w-full h-full max-w-[40rem] max-h-[20rem] bg-[#242424] p-[5] flex items-center'>
      <h1 className='text-2xl'>confirm</h1>  
      <pclassName='text-lg my-5'>are you sure you want to delete this</p>
      <div className='flex gap-10'>
        <button className='bg-[tomato]' >Yes</button>
        <button className='bg-[green]' >No</button>
      </div>
      </div>
      </div>
    )}
  )

}

export default App
