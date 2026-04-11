import {Routes , Route} from 'react-router-dom'
import './App.css'
import Home from './Home/Home'
import Nav from './Home/Nav'
import Products from './Products/Products'
import Singup from './Home/Singup'

function App() {


  return (
      <div className='app'>
        <Nav />
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/Product' element={<Products/>}/>
      <Route path='/Signup' element={<Singup/>}/>
    </Routes>
     
    </div>
  )
}

export default App
