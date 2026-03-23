import React from 'react'
import { Link } from 'react-router-dom'
import 'remixicon/fonts/remixicon.css'; 
import '../index.css'

function Footer() {
  return (
    <div className=' relative h-[50vh]  w-full bg-black'>
       <div className='h-full w-full flex items-center justify-end flex-col'>
         <div className='h-[70%] w-full flex '>
            <div className='h-full w-[50%] pl-11'>
              <div className='h-[50%] w-[90%] flex items-start flex-col justify-center'>
                <h1 className='text-teal-400  text-2xl font-black'>MaxVision </h1>
               <div className='h-[60%] w-auto   flex items-center  justify-center space-x-2 '>
               <i className="ri-instagram-line p-2 h-12 rounded-full bg-white text-3xl hover:scale-105 duration-200"></i>
               <i className="ri-telegram-line p-2 h-12 rounded-full bg-white text-3xl hover:scale-105 duration-200"></i>
               <i className="ri-instagram-line p-2 h-12 rounded-full  bg-white text-3xl hover:scale-105 duration-200"></i>
               <i className="ri-facebook-line p-2 h-12 rounded-full  bg-white text-3xl hover:scale-105 duration-200"></i>
               <i className="ri-youtube-line p-2 h-12 rounded-full  bg-white text-3xl hover:scale-105 duration-200"></i></div>
              </div>
              <div className='flex flex-col justify-center items-start'>
                <h3 className='text-white text-[28px] '>Stay Tuned With Us...</h3>
                <form action="" className=' h-[50%] w-[90%] flex items-center justify-center space-x-5 mr-3'>
                  <input type="email" name="email" id="email" placeholder='Your Email' className='border-b-2 bg-none text-white border-b-gray-600 w-[50%] h-11 ' required />
                  <button type="submit" className='text-2xl rounded-xl bg-amber-950 p-1'>submit</button>
                </form>
              </div>
            </div><p className='bg-gray-600 p-0.5 h-[90%] rounded-2xl'></p>
            <div className='h-full w-[20%] flex items-center justify-center flex-col space-y-2 p-3'>
              <h2 className='text-[25px] text-amber-50'>Products</h2>
                <div className='h-[70%] w-full flex items-center justify-evenly  flex-col'>
                  <Link className='text-amber-50 text-[18px] '>Spectacles</Link>
                <Link className='text-amber-50 text-[18px]'>Contactlens</Link>
                <Link className='text-amber-50 text-[18px]'>Computerglasses</Link>
                <Link className='text-amber-50 text-[18px]'>Readingglasses</Link>
                </div>
            </div>
             <div className='h-full w-[20%] flex items-center justify-center flex-col space-y-2 p-3'>
              <h2 className='text-[25px] text-amber-50'>Others</h2>
                <div className='h-[70%] w-full flex items-center justify-evenly flex-col'>
                  <Link className='text-amber-50 text-[18px] '>About-us</Link>
                <Link className='text-amber-50 text-[18px]'>Order</Link>
                <Link className='text-amber-50 text-[18px]'>Technolgy</Link>
                <Link className='text-amber-50 text-[18px]'>Support</Link>
                </div>
            </div>
        </div><p className='bg-white p-0.5  w-full rounded-2xl'></p>
        <div className='h-[15%] w-full  flex justify-evenly pl-6 pr-2'>
            <div className=' flex justify-between items-center space-x-20'>
              <h1 className='text-[18px] font-bold text-white '>Terms Of Use</h1>
              <h1 className='text-[18px] font-bold text-white'>Return and Exchange Policy</h1>
            </div>
               <h1 className='text-[23px] font-bold mt-2 text-white'>Copyright @ 2025-All Rights Reserved</h1>
        </div>
       </div>
    </div>
  )
}

export default Footer