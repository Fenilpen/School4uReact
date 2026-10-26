import { useState } from 'react'
import data from "./Data.json"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className='p-6 w-full flex flex-col gap-5'>
      {data.map(function(phoneDetails, index){
        return {
          <div key={index} className='flex bg-[#282828] p-[3] rounded-lg'>
            
          {/* Image */}
          <div className='w-1/4 flex item-center justify-center'>
          <img src={phoneDetails.image}  />
          </div>
            
          {/* details */}
          <div className='flex-1 bg-green-500'>
           <h1>
            {phoneDetails.title}
           </h1> 
          <p>{phoneDetails.rating} | | </p>
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
