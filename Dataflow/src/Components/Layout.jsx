import React from 'react'
import Hero from './Hero'
import About from './About'

function Layout() {
  return (
    <div className='h-[30vw] bg-gray-400w-full'>
      <Hero/>
      <About/>
    </div>
  )
}

export default Layout
