import React from 'react'

const Card = (props) => {
  const [count,setCount] = useState(0)

  function Increment(){
    setCount(count + 1)
  }
  
  return (
    <div class="card">
      <h1>{count}</h1>
      <button onClick={Increment}>Increment</button>
      <h1>{props.title}</h1>
      <p>{props.description}</p>
      <p>{props.prise}</p>
    </div>
  )
}

export default Card
