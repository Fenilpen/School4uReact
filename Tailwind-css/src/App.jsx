import './App.css'
import "./Card.css"
import Card from './Card'

function App() {

  return (
    <> 
    <div>
    <header className=' flex justify-between text-xl text-black/80'>

    <h1><span className='font-extrabold text-[tomato]'>B</span>rand</h1>
    
    <div className='flex gap-7'>
      <a href="">Features</a>
      <a href="">Use Cases</a>
      <a href="">Intergrations</a>
      <a href="">Portfolio</a>
    </div>
    
    <button>Join US</button>
    </header>
    </div>
    </>
  )
}

export default App
