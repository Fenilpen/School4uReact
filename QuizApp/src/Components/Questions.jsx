import React from 'react'
import questions from "./Question.json"

function Questions({setIsOver}) {
  const [currentIndex, setIndex] = useState(0)
  const [score,setScore] = useState(0)

  const handleOptionClick = (selectedOption) => {
  if(selectedOption === questions[currentIndex].answer)
  {
      setScore(prev => prev + 1)  
  }
   if(currentIndex < questions.length - 1){
       setCurrentIndex(prev = prev + 1)
    }else{
     setIsOver(true)
  }
  
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
