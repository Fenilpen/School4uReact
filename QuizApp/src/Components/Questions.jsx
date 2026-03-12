import React from 'react'
import questions from "./Question.json"

function Questions() {
  const [currentIndex, setIndex] = useState(0)
  const [score,setScore] = useState(0)
  
  return (
    <div>
      <h2 className='mt-8 mb-4'>{questions[currentIndex].Question} </h2>
      <div <div className='flex flex-col gap-3'>>
      {
        questions[currentIndex].options.map((options)=>{
          return <button key={options} onClick={()=>handleOptionClick(options)}>
            {options}
          </button>
        })
      }
      </div>
    </div>
  )
}

export default Questions
