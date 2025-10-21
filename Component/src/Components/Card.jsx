import React from 'react'

const Card = (props) => {
  return (
    <div class="card">
      <h1>{props.title}</h1>
      <p>{props.description}</p>
      <p>{props.prise}</p>
    </div>
  )
}

export default Card
