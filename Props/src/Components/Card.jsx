import React from 'react'

function Card({name,age}) {
  
  return (
    <div className='card'>{name}</div>
    <h1 className="card">{age}</h1>
  )
}

export default Card
