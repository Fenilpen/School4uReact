import React from 'react'

function Card({data,isStudent,content}) {

const {name,age,quali} = data
console.log(name,age,quali,isStudent);
  
  return (
    <div className='card'>
     {content}
    </div>
  )
}

export default Card
