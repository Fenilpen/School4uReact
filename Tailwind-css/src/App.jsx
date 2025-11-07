import './App.css'
import "./Card.css"
import Card from './Card'
import Button from './Components/Button'
import Header from './Components/Header'


function App() {

  return (
    <> 
    <Header/>
    <div className='max-w-[60rem] m-auto text-center py-[8rem]'>
    <h1 className='text-7xl font-bold font-serif'>The best vay to
    <span className='bg-red-300 rounded-2xl px-3'>Review</span> Creative Assets</h1>
    <p className='text-lg'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vel quisquam quo laborum 
    odio dolorem dignissimos deleniti ea explicabo praesentium consequatur?</p>
    <Button title="Hello"/>
    </>
  )
}

export default App
