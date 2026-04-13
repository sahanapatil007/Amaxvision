import React, { useState } from 'react'
import { Link, useNavigate } from "react-router-dom";
import 'remixicon/fonts/remixicon.css';
import '../index.css'
import imag3 from '../assets/reading.jpg'

function Nav() {
  const navigate = useNavigate();

  return (
    <div className='h-1/6 w-full flex space-x-10 p-2 justify-between  z-20 relative'>
      <div className='bg-linear-to-l from-blue-400 to-slate-600 bg-clip-text text-[25px] text-transparent font-black'>
        MaxVision
      </div>
      <div className='h-full  hidden md:flex items-center  justify-between w-[40%] text-xl z-0 '>
        <div className='h-full relative group'>
          <Link className='hover:border-b-2 hover:border-b-cyan-900 p-3 cursor-pointer' to={'/Product'}>
            Products
          </Link>
          <div className='absolute -left-100 top-10 hidden group-hover:block  w-[95vw] h-[50vh] shadow-lg rounded-md'>
            <div className='w-full h-full bg-white flex space-x-4'>
              <div className='w-[48%] h-full bg-amber-50 flex items-center justify-center flex-col  p-1'>
                <h2 className='text-2xl '>Mens</h2>
            <div className='h-[85%] w-full flex items-center space-x-5'>
                <div className='h-[80%] w-[55%] flex items-center justify-center'>
                <img src={imag3} alt="/" className='h-[90%] w-[80%]' />
              </div>
              <div className='w-[40%] h-[80%]  flex items-center justify-center'>
                <ul className='flex flex-col  '>
                  <li className='p-2 hover:bg-gray-200 cursor-pointer' onClick={() => navigate("/Product", { state: { gender: "men", material: 'Acetate' } })}> Spectacles</li>
                  <li className='p-2 hover:bg-gray-200 cursor-pointer' onClick={() => navigate("/Product", { state: { gender: "men", material: 'Acetate' } })}>Computer Glass</li>
                  <li className='p-2 hover:bg-gray-200 cursor-pointer'>Lens</li>
                  <li className='p-2 hover:bg-gray-200 cursor-pointer'>Accessories</li>
                </ul>
              </div>
            </div>
              
            </div><hr className='h-full p-0.5 bg-gray-600'/>
             <div className='w-[48%] h-full bg-amber-50 flex items-center justify-center flex-col  p-1'>
                <h2 className='text-2xl '>Womens</h2>
            <div className='h-[85%] w-full flex items-center space-x-5'>
                <div className='h-[80%] w-[55%] flex items-center justify-center'>
                <img src={imag3} alt="/" className='h-[90%] w-[80%]' />
              </div>
              <div className='w-[40%] h-[80%]  flex items-center justify-center'>
                <ul className='flex flex-col  '>
                  <li className='p-2 hover:bg-gray-200 cursor-pointer' onClick={() => navigate("/Product", { state: { gender: "women", material: 'Acetate' } })}> Spectacles</li>
                  <li className='p-2 hover:bg-gray-200 cursor-pointer' onClick={() => navigate("/Product", { state: { gender: "women", material: 'Acetate' } })}>Computer Glass</li>
                  <li className='p-2 hover:bg-gray-200 cursor-pointer'>Lens</li>
                  <li className='p-2 hover:bg-gray-200 cursor-pointer'>Accessories</li>
                </ul>
              </div>
            </div>
              
            </div>
            </div>
          </div>
        </div>
        <Link className='hover:border-b-2 hover:border-b-cyan-900'>Company</Link>
        <Link className='hover:border-b-2 hover:border-b-cyan-900'>Support</Link>
        <Link className='hover:border-b-2 hover:border-b-cyan-900'>FAQ's</Link>
      </div>
      <div className='w-[10%] space-x-5 md:block hidden'>
        <i className="ri-user-3-fill"></i>
        <i className="ri-shopping-cart-2-fill text-blue-950 text-[23px]"></i>
      </div>
      <i className='ri-menu-fill lg:hidden'></i>
    </div>
  )
}

export default Nav