import React from 'react'

function Popup() {
  return (
    <div>
      {popup && (
      <div className='absolute top-0 left-0 w-screen h-screen bg-black/50'
      flex items-center justify-center>
        <button onClick={()=>{
          setPopup(false)
        }} className='bg-[#242424] absolute top-[1rem] right-[1rem]'>Cancel</button>
      <div className='w-full h-full max-w-[40rem] max-h-[20rem] bg-[#242424] rounded-2xl p-[5] flex items-center flex-col'>

      <h1 className='text-2xl'>confirm</h1>  
      <p className='text-lg my-5'>are you sure you want to delete this</p>

      <div className='flex gap-10'>
        <button className='bg-[tomato]'>No</button>
        <button className='bg-[green]'>Yes</button>
      </div>

      </div>

      </div>
    )}
    </div>
  )
}

export default Popup
