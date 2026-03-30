import React, { useEffect,useState} from 'react'

function Timer({setIsOver}) {
  
  const [leftTime,setLeftTime] = useState(20)
  const [displayTime, setDispalyTime] = useState('')

  // left time logic
  useEffect(()=>{

    setInterval(() => {
    let intervalId =  setLeftTime(prev => {
      if(prev <= 0 ){
        clearInterval(intervalId)
        setIsOver(true)
        return 0
      }
      return prev - 1
      })
    },1000)

    return () => {
      clearInterval(intervalId)
    }
    
  },[])

  // // time format logic
  useEffect(()=>{
    if(leftTime === 0){
      setIsOver(true)
    }
    let formatedTime = (`${(Math.floor(leftTime/60)).toString().padStart(2,0)} : 
    ${(leftTime%60).toString().padStart(2,0)}`);
    setDispalyTime(formatedTime)
  },[leftTime])
  
  return (
    <div>
      Time Left: {displayTime}
    </div>
  )
}

export default Timer
