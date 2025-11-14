import React from 'react'
import Button from './Button'

function Hero() {
  return (
    <>
    <div className='px-[1rem] max-w-[60rem] m-auto text-center py-[8rem]'>
    <h1 className='max-[500px]:text3xl text-7xl font-bold font-serif'>The best way to
    <span className='bg-red-300 rounded-2xl px-3'>Review</span> Creative Assets</h1>
    <p className='text-lg my-7' >Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vel quisquam quo laborum 
    odio dolorem dignissimos deleniti ea explicabo praesentium consequatur?</p>
    <div className='text-3xl'>
    <Button  title="Join subscription"/>
    </div>
    </div>
    </>
  )
}

export default Hero
