import React from 'react'

function Navbar() {
  return (
    <div className='w-full flex justify-between items-center px-[1rem] py-[2rem] bg-[lightseagreen]'>
      <h1 className='text-2xl font-bold'>Logo</h1>
      
      <div className='flex gap-9 items-center text-lg' >
        <a href="">home</a>
        <a href="">About</a>
        <a href="">Contact</a>
        <a href="">Service</a>
        <a href="">Help</a>
      </div>

      <div className='text-2xl flex items-center'>
        <span></span>
        <span></span>
      </div>
      
    </div>
  )
}

export default Navbar
