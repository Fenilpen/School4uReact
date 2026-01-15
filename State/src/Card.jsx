import { useEffect,useState } from 'react'

function Card() {

  const [counts,setCounts] = useState(0)
  
  function increment (){
  // functional updates works on current state value.
   setCounts((prev)=>prev + 1)
   setCounts((prev)=>prev + 1)
   setCounts((prev)=>prev + 1)
   setCounts((prev)=>prev + 1)
  }

  useEffect(()=>{
    console.log(counts);
    
  })[counts]

  return (
    <>
     <h1>{counts}</h1>
     <button onClick={increment}> increment </button>
    </>
  )
}

export default Card
