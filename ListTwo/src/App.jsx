import { useState } from 'react'
import data from "./Data.json"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className='h-screen w-full bg-red-500'>
      {data.map(function(phoneDetails, index){
        return {
          <div className='flex'>
            
          {/* Image */}
          <div>
          <img src={phoneDetails.image}  />
          </div>
            
          {/* details */}
          <div className='flex-1' >
           <h1>
            {phoneDetails.title}
           </h1> 
          </div>
      
          {/* pricing */}
          <div>
            <h1>{phoneDetails.price}</h1>
          </div>
          </div>
        }
      })}
    </div>
    </>
  )
}

export default App
