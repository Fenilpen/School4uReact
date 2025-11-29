import React from 'react'

function Card({data,isStudent,content}) {

const {name,age} = data
console.log(name,age,isStudent);
  
  return (
    <div className='card'>
     {content}
    </div>
  )
}

export default Card
