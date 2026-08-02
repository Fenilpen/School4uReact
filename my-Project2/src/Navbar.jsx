import React from 'react'

function Navbar() {
  return (
    <div className='w-full bg-red-500 flex justify-between items-center px-[1rem] py-[2rem] bg-[lightseagreen]'>
      <h1 className='text-2xl font-bold' >Logo</h1>
      <div className='flex gap-3 items-center' >
        <a href="">home</a>
        <a href="">About</a>
        <a href="">Contact</a>
        <a href="">Service</a>
        <a href="">Help</a>
      </div>

      <div>
        <span></span>
        <span></span>
      </div>
      
    </div>
  )
}

export default Navbar
