import React from 'react'

function Timer() {
  
  const [leftTime,setLeftTime] = useState(5)

  useEffect(()=>{

    setInterval(() => {
    let intervalId =  setLeftTime(prev => prev - 1)
    },1000)

    return () => {
      
    }
    
  },[])
  
  return (
    <div>
      Time Left: {leftTime}
    </div>
  )
}

export default Timer
