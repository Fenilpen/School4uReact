import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

// you can render with another method 
// let rootElement = document.getElementById('root')
// let root = createRoot(rootElement)

// root.render(
//   <StrictMode>
//     <App />
//   </StrictMode>
// )
