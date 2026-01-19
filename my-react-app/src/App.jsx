import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Nav from './Components/Nav';
import Home from './Components/Home';
import Category from './Components/Category';
import Product from './Products/Product';
import Footer from './Components/Footer';
import Productlist from './Products/Productlist';
import Subcat from './Products/Subcat';

function App() {
  const [count, setCount] = useState(0)

  return (
      <div>
      <Subcat/>
    </div>
  )
}

export default App
