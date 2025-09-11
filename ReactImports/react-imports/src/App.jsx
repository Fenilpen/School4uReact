import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {Head,Card,Card2,Thirdparty} from './Header'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header/>
      <Card/>
      <Card2/>
      <Thirdparty/>
      <img src="./vite.svg" alt=""/>
    </>
  )
}

export default App
