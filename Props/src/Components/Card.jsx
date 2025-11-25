import React from 'react'

function Card({data,isStudent}) {

const {name,age,quali} = data
console.log(name,age,quali,isStudent);
  
  return (
    <div className='card'>
    
    </div>
  )
}

export default Card
