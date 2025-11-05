import './App.css'
import "./Card.css"
import Card from './Card'

function App() {

  return (
    <> 
    <div>
    <header className='max-w-[60rem] flex justify-between items-center text-xl text-black/80  bg-red-300 m-auto'>

    <h1><span className='font-extrabold text-[tomato]'>B</span>rand</h1>
    
    <div className='flex gap-7'>
      <a href="">Features</a>
      <a href="">Use Cases</a>
      <a href="">Intergrations</a>
      <a href="">Portfolio</a>
    </div>
    
    <button className='bg-[tomato] rounded-lg px-3 py-2'> Join US</button>
    </header>
    </div>
    </>
  )
}

export default App
