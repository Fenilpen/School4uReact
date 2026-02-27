import React from 'react'

function Timer() {
  
  const [leftTime,setLeftTime] = useState(5)

  useEffect(()=>{

    setInterval(() => {
    let intervalId =  setLeftTime(prev => {
      if(prev <= 0 ){
        clearInterval(intervalId)
        return
      }
      return prev - 1
      })
    },1000)

    return () => {
      clearInterval(intervalId)
    }
    
  },[])
  
  return (
    <div>
      Time Left: {leftTime}
    </div>
  )
}

export default Timer
