import { useState } from 'react'

function Card() {

  const [counts,setCounts] = useState(0)
  
  function increment (){
   setCounts((prev)=>
      prev + 1
    )
    
  }

  return (
    <>
     <h1>{counts}</h1>
     <button onClick={increment}> increment </button>
    </>
  )
}

export default Card
