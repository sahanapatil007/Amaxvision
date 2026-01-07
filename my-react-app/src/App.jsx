import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Nav from './Components/Nav';
import Home from './Components/Home';
import Category from './Components/Category';
function App() {
  const [count, setCount] = useState(0)

  return (
    
      <div>
       <Home/>
    </div>
  )
}

export default App
