import React from 'react'
import {Routes , Route} from 'react-router-dom'
import './App.css'
import Home from './Home/Home'
import Product from './Products/Product'
import Nav from './Home/Nav'
import Footer from './Home/Footer'
import Proddetails from './Productdetails/Proddetails'
import Subcat from './Subcategory/Subcat'

function App() {


  return (
      <div className='app'>
        <Nav />
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/Product' element={<Product/>}/>
      <Route path='/Productdetails' element={<Proddetails/>}/>
      <Route path='/Subcat' element={<Subcat/>}/>
    </Routes>
    <Footer/>
    </div>
  )
}

export default App
